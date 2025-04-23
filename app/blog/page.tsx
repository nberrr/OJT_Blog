import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WeeklyBlogCard } from "@/components/weekly-blog-card"

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
            <WeeklyBlogCard
              title="Taking Initiative"
              description="In my fifth week, I started proposing my own ideas and taking more ownership of my work."
              date="May 13, 2023"
              slug="week-5"
              week="Week 5"
              imageUrl="/placeholder.svg?height=400&width=600&text=Week+5:+Initiative"
            />
            <WeeklyBlogCard
              title="Overcoming Setbacks"
              description="Week six taught me valuable lessons about resilience and problem-solving when things don't go as planned."
              date="May 20, 2023"
              slug="week-6"
              week="Week 6"
              imageUrl="/placeholder.svg?height=400&width=600&text=Week+6:+Setbacks"
            />
            <WeeklyBlogCard
              title="Midpoint Reflections"
              description="Halfway through my OJT, I took time to reflect on how far I've come and what I still want to accomplish."
              date="May 27, 2023"
              slug="week-7"
              week="Week 7"
              imageUrl="/placeholder.svg?height=400&width=600&text=Week+7:+Reflections"
            />
            <WeeklyBlogCard
              title="New Skills Acquired"
              description="Week eight was all about learning new technical skills that expanded my capabilities."
              date="June 3, 2023"
              slug="week-8"
              week="Week 8"
              imageUrl="/placeholder.svg?height=400&width=600&text=Week+8:+New+Skills"
            />
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
