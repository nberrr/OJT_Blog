import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WeeklyBlogCard } from "@/components/weekly-blog-card"
import { blogPosts } from "@/lib/blogPosts"

export default function BlogPage() {
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
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link href="/" passHref>
              <Button variant="ghost" className="group mb-4">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                My OJT Weekly Journal
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A chronological record of my on-the-job training experience
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            {Object.entries(blogPosts).map(([slug, post]) => (
              <WeeklyBlogCard
                key={slug}
                title={post.title}
                description={post.description}
                date={post.date}
                slug={slug}
                week={post.week}
                imageUrl={post.src || "/placeholder.svg?height=400&width=600&text=" + encodeURIComponent(post.week + ": " + post.title)}
              />
            ))}
          </div>
        </section>
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
