import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewsletterModal } from "@/components/newsletter-modal"
import { Badge } from "@/components/ui/badge"
import { BlogCoverImage } from "@/components/blog-cover-image"

// This would typically come from a CMS or database
const blogPosts = {
  "week-1": {
    title: "Stepping into Workplace",
    date: "February 24-28, 2025",
    author: "John Nebrej N. Rempis",
    week: "Week 1",
    src: "/blog/week1/cover.jpeg",
    images: [
      "/blog/week1/gallery/pic1.jpg",
      "/blog/week1/gallery/pic2.jpeg",
      "/blog/week1/gallery/pic3.jpg",
      "/blog/week1/gallery/pic4.jpeg",
      "/blog/week1/gallery/pic5.jpeg",
      "/blog/week1/gallery/pic6.jpeg",
      "/blog/week1/gallery/pic7.jpeg",
      "/blog/week1/gallery/pic8.jpg",
      "/blog/week1/gallery/pic9.jpg",
    ],
    content: `
      <p>My first week at the company was a whirlwind of new experiences. I arrived early on Monday, nervous but excited about what lay ahead. The office was larger than I expected, with an open floor plan that seemed designed to encourage collaboration.</p>
      
      <h2>Delayed Start but Productive Beginning</h2>
      
      <p> Our deployment was delayed due to paperwork issues, making us three weeks late from the original schedule. However, as we officially began Week 1, we made sure to maximize our time and productivity.</p>
      
      <p> This week, we focused on setting up our workspace—installing PCs, crimping and setting up LAN cables, and organizing our workstations. We actively participated in meetings and were assigned our tasks. The major task, called the "Rock Task," revolves around a system we’ll be working on, while our minor tasks involve other responsibilities. I was assigned to collateral report layout, which aligns with my other skills.

</p>
      

      <p>Determined to make the most of our first week, I worked on wireframing, layout design, and even tried creating a mock-up logo for the system. Despite the late start, we ensured a productive week, setting a strong foundation for the coming days.
</p>
    `,
  },
  "week-2": {
    title: "Finding The Rhythm",
    date: "March 3-7, 2025",
    author: "John Nebrej N. Rempis",
    week: "Week 2",
    src: "/blog/week2/cover.jpg", // This should be cover.jpg to match your file structure
    images: [
      "/blog/week2/gallery/pic1.jpg", // Missing leading slash
      "/blog/week2/gallery/pic2.jpg",
      "/blog/week2/gallery/pic3.jpg",
      "/blog/week2/gallery/pic4.jpg",
      "/blog/week2/gallery/pic5.jpg",
      "/blog/week2/gallery/pic6.jpg",   
    ],
    content: `
      <p>Week two was all about finding my rhythm and establishing routines. The initial overwhelm began to subside as I became more familiar with the office environment and daily procedures.</p>
      
      <h2>Diving into Tasks</h2>
      
      <p>This week marked the real start of our hands-on work in the Management Information System
 (MIS) Department. With guidance from the employees, we got deeper into our assigned tasks and adapted to the workflow.</p>
 <p>One of my key focuses was wireframing, ensuring that the structure of our project was well-planned and visually organized. We attended meetings to align our progress, submitted our weekly report, and underwent a realignment of tasks to ensure everyone was on track.</p>
 <p>To start by Week 3, I was also assigned the task of revising brochures, improving their layout and content to make them more engaging and professional. This involved careful attention to design and formatting while making sure the message remained clear and effective.</p>
 <p>
      <p>Our weekly meetings were a crucial part of our routine. We discussed our progress, addressed any issues, and planned our next steps. The meetings were structured to ensure everyone was on the same page and to facilitate collaboration.</p>
Throughout the week, we continued learning from our mentors, gaining insights into best practices and problem-solving approaches in MIS. It was a productive and insightful week, setting a strong foundation for the tasks ahead!
</p>
      
      
     
      
    `,
  },
  "week-3": {
    title: "The First Real Challenge",
    date: "April 29, 2023",
    author: "John Nebrej N. Rempis",
    week: "Week 3",
    images: [
      "/placeholder.svg?height=600&width=800&text=Week+3:+Project+Work",
      "/placeholder.svg?height=600&width=800&text=Week+3:+Design+Meeting",
      "/placeholder.svg?height=600&width=800&text=Week+3:+Late+Night",
    ],
    content: `
      <p>Week three marked a significant shift in my OJT experience as I faced my first real challenge. The comfortable routine I had begun to establish was disrupted, pushing me out of my comfort zone and testing my abilities.</p>
      
      <h2>Monday: A New Assignment</h2>
      
      <p>The week began with an unexpected announcement. During the morning briefing, Mr. Reyes informed me that I would be assisting with an urgent client project. The client, a local retail chain, needed a comprehensive digital marketing proposal by Friday. I would be working with a small team consisting of members from both the marketing and design departments.</p>
      
      <p>This was my first client-facing project, and the responsibility felt immense. The team lead, Ms. Chen, outlined my role: I would be responsible for researching the client's competitors and preparing a competitive analysis section for the proposal.</p>
      
      <h2>Tuesday-Wednesday: Deep Dive Research</h2>
      
      <p>These days were intense. I spent hours researching the client's five main competitors, analyzing their digital presence, marketing strategies, strengths, and weaknesses. The scope was broader than any research project I had done in school, and the stakes felt much higher.</p>
      
      <p>By Wednesday afternoon, I had compiled my findings but was struggling to organize them in a coherent, professional format. Ms. Chen reviewed my work and, while she appreciated the thoroughness of my research, she pointed out several areas that needed improvement. The feedback was constructive but overwhelming.</p>
      
      <h2>Thursday: The Setback</h2>
      
      <p>Thursday morning brought a moment of crisis. As I was finalizing my section of the proposal, I realized that some of my data was outdated. One of the competitors had recently rebranded, and another had launched a new digital campaign that wasn't reflected in my analysis.</p>
      
      <p>I had to make a difficult decision: either submit the section as it was, knowing it contained inaccuracies, or work overtime to update it. I chose the latter, staying at the office until 9 PM to ensure the information was current and accurate.</p>
      
      <h2>Friday: Redemption</h2>
      
      <p>Friday morning was a rush to integrate my updated analysis into the proposal before the client meeting at 2 PM. The team was impressed with my dedication and the quality of the revised work. Ms. Chen even asked me to join the client presentation, though I wouldn't be presenting myself.</p>
      
      <p>Observing the client meeting was an invaluable experience. Seeing how the team presented our work, addressed client questions, and navigated objections was a masterclass in professional communication. To my surprise, the client specifically commended the competitive analysis section, unaware that it was prepared by an intern.</p>
      
      <h2>Key Learnings:</h2>
      
      <ul>
        <li>The importance of verifying information and using up-to-date sources</li>
        <li>How to structure a professional competitive analysis</li>
        <li>The dynamics of client-agency relationships</li>
        <li>The value of putting in extra effort when it matters most</li>
      </ul>
      
      <h2>Challenges:</h2>
      
      <ul>
        <li>Managing time effectively under pressure</li>
        <li>Dealing with the stress of potential failure</li>
        <li>Accepting and implementing critical feedback</li>
        <li>Balancing thoroughness with meeting deadlines</li>
      </ul>
      
      <h2>Goals for Next Week:</h2>
      
      <ul>
        <li>Develop better research methodologies to avoid similar issues</li>
        <li>Improve my ability to present information visually</li>
        <li>Learn more about client management from the account executives</li>
        <li>Practice better work-life balance despite project demands</li>
      </ul>
      
      <p>Week three taught me that challenges, while stressful, are often the best learning opportunities. I discovered capabilities I didn't know I had and gained confidence in my ability to contribute meaningfully to professional projects. Most importantly, I learned that mistakes are inevitable, but how you respond to them defines your professional character.</p>
    `,
  },
  "week-4": {
    title: "Collaboration and Growth",
    date: "May 6, 2023",
    author: "John Nebrej N. Rempis",
    week: "Week 4",
    images: [
      "/placeholder.svg?height=600&width=800&text=Week+4:+Team+Collaboration",
      "/placeholder.svg?height=600&width=800&text=Week+4:+Brainstorming+Session",
      "/placeholder.svg?height=600&width=800&text=Week+4:+Group+Project",
    ],
    content: `
      <p>Week four centered around collaboration and teamwork. After the intensity of last week's individual challenge, this week provided valuable lessons in working effectively with others and the power of collective effort.</p>
      
      <h2>Monday: New Team Formation</h2>
      
      <p>The week began with Mr. Reyes announcing a new internal project: redesigning the company's intranet to improve internal communication and resource sharing. I was assigned to a cross-functional team that included members from IT, HR, design, and marketing.</p>
      
      <p>Our first team meeting was facilitated by Mr. Garcia from IT, who would be leading the project. We introduced ourselves, discussed our relevant skills, and outlined the project objectives. As the most junior member, I was initially quiet, but Mr. Garcia made a point of asking for my perspective as a "fresh pair of eyes" in the company.</p>
      
      <h2>Tuesday: Understanding User Needs</h2>
      
      <p>Tuesday was dedicated to user research. The team decided that I would work with Ms. Mendoza from HR to conduct interviews with employees from different departments about their experience with the current intranet. This was my first experience with user research in a professional setting.</p>
      
      <p>We prepared a questionnaire and interviewed ten employees throughout the day. I was nervous at first, especially when interviewing senior staff, but Ms. Mendoza's guidance helped me become more comfortable. The insights we gathered were eye-opening—many employees had workarounds for the intranet's limitations that the IT team wasn't aware of.</p>
      
      <h2>Wednesday: Collaborative Ideation</h2>
      
      <p>Wednesday featured a full-day workshop where our team analyzed the user research and brainstormed solutions. The session was held in the company's innovation room, complete with whiteboards, sticky notes, and plenty of coffee.</p>
      
      <p>I was initially hesitant to contribute, feeling that my ideas might not be as valuable as those from more experienced colleagues. However, the team had established a "no idea is a bad idea" rule, which encouraged me to speak up. To my surprise, my suggestion for a personalized dashboard based on employee roles received positive feedback and was added to our list of key features.</p>
      
      <h2>Thursday: Navigating Disagreements</h2>
      
      <p>As we moved into the planning phase, tensions emerged between team members with different priorities. The IT representatives were concerned about security and implementation complexity, while the design team pushed for a more innovative user experience. As discussions became heated, I observed how Mr. Garcia skillfully mediated the disagreements, acknowledging each perspective and guiding the team toward compromise.</p>
      
      <p>During a coffee break, Mr. Garcia mentioned that navigating such tensions is a normal part of collaborative work and offered advice on how to handle similar situations in the future. This impromptu mentoring moment was as valuable as the formal aspects of the project.</p>
      
      <h2>Friday: Presentation Preparation</h2>
      
      <p>Friday was spent preparing for our presentation to management the following week. The team divided responsibilities, and I was paired with David from the design team to create mockups for the proposed dashboard feature. Working closely with a professional designer gave me insight into the design thinking process and taught me new skills in prototyping tools.</p>
      
      <p>The weekly team lunch had a different energy this time, as I now had meaningful connections with colleagues from various departments. Conversations flowed more naturally, and I felt a genuine sense of belonging.</p>
      
      <h2>Key Learnings:</h2>
      
      <ul>
        <li>The value of diverse perspectives in problem-solving</li>
        <li>Techniques for effective user research and interview</li>
        <li>How to contribute in group settings despite being junior</li>
        <li>The importance of diplomatic communication in team conflicts</li>
      </ul>
      
      <h2>Challenges:</h2>
      
      <ul>
        <li>Overcoming imposter syndrome in team settings</li>
        <li>Balancing listening and contributing appropriately</li>
        <li>Adapting to different working and communication styles</li>
        <li>Learning new tools and methodologies on the fly</li>
      </ul>
      
      <h2>Goals for Next Week:</h2>
      
      <ul>
        <li>Practice more assertive communication in group settings</li>
        <li>Improve my prototyping skills with the tools David introduced</li>
        <li>Prepare thoroughly for the management presentation</li>
        <li>Seek feedback on my collaboration style from team members</li>
      </ul>
      
      <p>Week four has shown me that while individual competence is important, the ability to work effectively with others is equally crucial in a professional environment. I've gained appreciation for the complexity of team dynamics and the richness that comes from collaborative problem-solving. Most importantly, I'm learning that even as an intern, I can make meaningful contributions to team efforts when I find the courage to share my perspective.</p>
    `,
  },
}

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
