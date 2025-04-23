import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterModal } from "@/components/newsletter-modal"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
          <Link href="/" passHref>
            <Button variant="ghost" className="group mb-8">
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  About John Nebrej N. Rempis
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  OJT Student, aspiring professional, and advocate for working smarter, not harder.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm John Nebrej N. Rempis, the author behind "The Art of Productive Laziness." This blog serves
                  as my personal journal during my On-the-Job Training experience, documenting my weekly journey,
                  challenges, and growth.
                </p>
                <p>
                  I'm currently pursuing my degree in [Your Degree Program] at [Your University/College]. My OJT
                  placement at [Company Name] has been an incredible opportunity to apply classroom knowledge to
                  real-world scenarios and develop professional skills that will shape my future career.
                </p>
                <p>
                  The title "The Art of Productive Laziness" reflects my philosophy that efficiency isn't about working
                  harder, but working smarter. Throughout my OJT experience, I've been learning how to prioritize tasks,
                  streamline processes, and achieve maximum results with optimal effort.
                </p>
                <p>
                  This blog serves dual purposes: it fulfills my educational requirements for OJT documentation, and it
                  allows me to reflect deeply on my experiences, extracting valuable lessons that will guide my
                  professional development.
                </p>
                <p>
                  When I'm not at my internship or studying, you'll find me [Your Hobbies/Interests], always looking for
                  ways to balance productivity with well-deserved rest.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <NewsletterModal />
                <Link href="/blog" passHref>
                  <Button variant="outline">Read My Journal</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=John+Nebrej+N.+Rempis"
                  alt="John Nebrej N. Rempis"
                  fill
                  className="object-cover"
                />
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">OJT Details</h3>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="outline" className="mb-1">
                        Company
                      </Badge>
                      <p className="text-sm">[Company Name]</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        Position
                      </Badge>
                      <p className="text-sm">[Your OJT Position]</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        Duration
                      </Badge>
                      <p className="text-sm">April - June 2023</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        University
                      </Badge>
                      <p className="text-sm">[Your University/College]</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        Program
                      </Badge>
                      <p className="text-sm">[Your Degree Program]</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Skills Developing</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Communication</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Problem Solving</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Time Management</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Teamwork</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Adaptability</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Technical Skills</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Critical Thinking</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">OJT Objectives</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Apply theoretical knowledge in practical settings
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Develop professional workplace skills
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Build a professional network
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Identify career interests and strengths
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Document growth and learning experiences
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold">Email:</span>
                    john.rempis@example.com
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold">LinkedIn:</span>
                    linkedin.com/in/johnrempis
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold">University Email:</span>
                    j.rempis@university.edu
                  </li>
                </ul>
              </CardContent>
            </Card>
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
