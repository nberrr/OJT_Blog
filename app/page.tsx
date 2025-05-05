import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedPost } from "@/components/featured-post"
import { NewsletterModal } from "@/components/newsletter-modal"
import { WeeklyBlogCard } from "@/components/weekly-blog-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight"></span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    The Art of Productive Laziness
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A personal journey through my OJT experience by John Nebrej N. Rempis. Documenting weekly insights
                    and learnings.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <NewsletterModal />
                  <Link href="/blog" passHref>
                    <Button variant="outline" className="group">
                      Browse Weekly Entries
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <FeaturedPost />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Weekly Journal Entries</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow my weekly journey through on-the-job training and personal development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <WeeklyBlogCard
                title="First Steps into the Unknown"
                description="My first week of OJT was filled with new faces, unfamiliar systems, and unexpected challenges."
                date="April 15, 2023"
                slug="week-1"
                week="Week 1"
                imageUrl="/placeholder.svg?height=400&width=600&text=Week+1:+First+Steps"
              />
              <WeeklyBlogCard
                title="Finding My Rhythm"
                description="By week two, I started to establish routines and understand the workflow better."
                date="April 22, 2023"
                slug="week-2"
                week="Week 2"
                imageUrl="/placeholder.svg?height=400&width=600&text=Week+2:+Finding+Rhythm"
              />
              <WeeklyBlogCard
                title="The First Real Challenge"
                description="Week three brought my first significant project and the pressure that came with it."
                date="April 29, 2023"
                slug="week-3"
                week="Week 3"
                imageUrl="/placeholder.svg?height=400&width=600&text=Week+3:+First+Challenge"
              />
              <WeeklyBlogCard
                title="Collaboration and Growth"
                description="Learning to work effectively with my team members became the focus of my fourth week."
                date="May 6, 2023"
                slug="week-4"
                week="Week 4"
                imageUrl="/placeholder.svg?height=400&width=600&text=Week+4:+Collaboration"
              />
            </div>
            <div className="flex justify-center">
              <Link href="/blog" passHref>
                <Button variant="outline" className="group">
                  View All Weekly Entries
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Photo Highlights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">Visual memories from my OJT experience</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Photo+${i}`}
                    alt={`Photo highlight ${i}`}
                    fill
                    className="object-cover transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
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
