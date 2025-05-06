import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewsletterModal } from "@/components/newsletter-modal"
import { Badge } from "@/components/ui/badge"
import { BlogCoverImage } from "@/components/blog-cover-image"
import { blogPosts } from "@/lib/blogPosts"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" passHref>
          <Button variant="link">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">The Art of Productive Laziness</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/blog" className="font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <article className="container max-w-4xl py-12 md:py-16 lg:py-24">
          <Link href="/blog" passHref>
            <Button variant="ghost" className="group mb-8">
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Entries
            </Button>
          </Link>
          <div className="space-y-4">
            <Badge variant="outline" className="text-lg font-semibold text-primary">
              {post.week}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
            <BlogCoverImage
              src={post.src}
              alt={post.title}
              week={post.week}
              title={post.title}
            />
          </div>
          <div
            className="prose prose-gray max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.images && post.images.length > 0 && (
            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-bold">Photo Gallery</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {post.images.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Week ${post.week} photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col items-center justify-center space-y-4 border-t border-b py-8">
            <h3 className="text-xl font-medium">Enjoyed this journal entry?</h3>
            <p className="text-center text-muted-foreground">
              Subscribe to get notified when new weekly entries are published.
            </p>
            <NewsletterModal />
          </div>
        </article>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 John Nebrej N. Rempis. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="font-medium underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="font-medium underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
