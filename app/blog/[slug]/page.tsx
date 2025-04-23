import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewsletterModal } from "@/components/newsletter-modal"
import { Badge } from "@/components/ui/badge"

// This would typically come from a CMS or database
const blogPosts = {
  "week-1": {
    title: "First Steps into the Unknown",
    date: "April 15, 2023",
    author: "John Nebrej N. Rempis",
    week: "Week 1",
    images: [
      "/placeholder.svg?height=600&width=800&text=Week+1:+Office+Tour",
      "/placeholder.svg?height=600&width=800&text=Week+1:+First+Day",
      "/placeholder.svg?height=600&width=800&text=Week+1:+Team+Meeting",
    ],
    content: `
      <p>My first week at the company was a whirlwind of new experiences. I arrived early on Monday, nervous but excited about what lay ahead. The office was larger than I expected, with an open floor plan that seemed designed to encourage collaboration.</p>
      
      <h2>Day 1: Orientation</h2>
      
      <p>The HR manager, Ms. Santos, gave me a warm welcome and walked me through the orientation process. I received my company ID, access cards, and a welcome package that included a company handbook and some branded merchandise. The morning was spent filling out paperwork and setting up my accounts.</p>
      
      <p>After lunch, I met my supervisor, Mr. Reyes, who gave me a tour of the office and introduced me to the team. Everyone was friendly, though I struggled to remember all the names. Mr. Reyes explained that I would be rotating through different departments during my OJT to get a comprehensive understanding of the company's operations.</p>
      
      <h2>Day 2-3: Shadowing</h2>
      
      <p>I spent the next two days shadowing different team members. This was invaluable as it gave me insight into the day-to-day operations and the various roles within the company. I observed meetings, took notes, and asked questions whenever appropriate.</p>
      
      <p>The most challenging aspect was understanding the company's internal systems and software. They use several proprietary tools that I had never encountered before. Thankfully, everyone was patient and willing to explain things multiple times if needed.</p>
      
      <h2>Day 4: First Assignment</h2>
      
      <p>On Thursday, Mr. Reyes gave me my first real assignment: to compile data from various departments for the monthly report. It was a simple task, but it required me to interact with different team members and navigate the company's database. I made a few mistakes but managed to complete it by the end of the day.</p>
      
      <h2>Day 5: Reflection</h2>
      
      <p>Friday was more relaxed. The team has a tradition of having lunch together on Fridays, which was a great opportunity to get to know everyone better in a casual setting. In the afternoon, I had a brief check-in with Mr. Reyes to discuss my first week and set expectations for the coming weeks.</p>
      
      <h2>Key Learnings:</h2>
      
      <ul>
        <li>The importance of asking questions when unsure</li>
        <li>The value of taking detailed notes</li>
        <li>The significance of company culture in shaping the work environment</li>
        <li>The need to be adaptable and open to learning new systems</li>
      </ul>
      
      <h2>Challenges:</h2>
      
      <ul>
        <li>Information overload – there was so much to learn in such a short time</li>
        <li>Navigating the company's internal systems</li>
        <li>Remembering everyone's names and roles</li>
        <li>Managing anxiety about making mistakes</li>
      </ul>
      
      <h2>Goals for Next Week:</h2>
      
      <ul>
        <li>Become more familiar with the company's software</li>
        <li>Take on more responsibilities</li>
        <li>Build stronger relationships with team members</li>
        <li>Improve my time management skills</li>
      </ul>
      
      <p>Overall, my first week was both challenging and exciting. I'm grateful for the warm welcome and looking forward to what the coming weeks will bring.</p>
    `,
  },
  "week-2": {
    title: "Finding My Rhythm",
    date: "April 22, 2023",
    author: "John Nebrej N. Rempis",
    week: "Week 2",
    images: [
      "/placeholder.svg?height=600&width=800&text=Week+2:+Workspace",
      "/placeholder.svg?height=600&width=800&text=Week+2:+Project+Planning",
      "/placeholder.svg?height=600&width=800&text=Week+2:+Team+Lunch",
    ],
    content: `
      <p>Week two was all about finding my rhythm and establishing routines. The initial overwhelm began to subside as I became more familiar with the office environment and daily procedures.</p>
      
      <h2>Monday: Building on Foundations</h2>
      
      <p>I started the week with a clearer understanding of my role and responsibilities. Mr. Reyes assigned me to the marketing department for this week, where I would be assisting with their ongoing campaigns. Ms. Lim, the marketing manager, briefed me on their current projects and what they expected from me.</p>
      
      <p>My main task was to help analyze data from their recent social media campaign. This involved extracting data from various platforms, organizing it in spreadsheets, and identifying trends. Though I had some experience with data analysis from school, applying it in a real-world context was different and more complex.</p>
      
      <h2>Tuesday-Wednesday: Diving into Marketing</h2>
      
      <p>These days were spent immersed in marketing analytics. I learned how to use the company's analytics tools and began to understand how they measure campaign success. The marketing team was particularly interested in engagement rates and conversion metrics.</p>
      
      <p>On Wednesday afternoon, I attended my first marketing strategy meeting. It was fascinating to see how decisions were made based on data and market trends. I mostly observed, but Ms. Lim encouraged me to share my thoughts on appealing to younger demographics, which was well-received.</p>
      
      <h2>Thursday: Creative Input</h2>
      
      <p>Thursday brought a shift from analytics to creative work. The team was brainstorming ideas for an upcoming campaign, and I was invited to participate. Initially hesitant, I eventually shared some ideas that were influenced by current trends I'd observed on social media.</p>
      
      <p>To my surprise, one of my suggestions—a user-generated content contest—was added to the list of potential strategies. This was a confidence boost and made me feel like a valuable team member rather than just an intern.</p>
      
      <h2>Friday: Reflection and Planning</h2>
      
      <p>Friday morning was spent finalizing the week's analytics report. In the afternoon, I had my weekly check-in with Mr. Reyes. He seemed pleased with the feedback from the marketing team and mentioned that my next week would be split between marketing and the design department.</p>
      
      <p>The team lunch was more enjoyable this week as I felt more comfortable with my colleagues. I'm starting to build genuine connections, especially with the younger staff members who have been particularly welcoming.</p>
      
      <h2>Key Learnings:</h2>
      
      <ul>
        <li>The practical application of marketing analytics</li>
        <li>How data drives decision-making in business</li>
        <li>The importance of creative thinking in marketing</li>
        <li>The value of speaking up and sharing ideas, even as an intern</li>
      </ul>
      
      <h2>Challenges:</h2>
      
      <ul>
        <li>Learning new analytics tools with limited training</li>
        <li>Overcoming the fear of sharing ideas in meetings</li>
        <li>Balancing thoroughness with efficiency in data analysis</li>
        <li>Adapting to different working styles within the team</li>
      </ul>
      
      <h2>Goals for Next Week:</h2>
      
      <ul>
        <li>Contribute more actively in meetings</li>
        <li>Learn basic design principles from the design department</li>
        <li>Improve my efficiency with the analytics tools</li>
        <li>Start a small personal project that could benefit the company</li>
      </ul>
      
      <p>Week two has shown me that finding my place in a professional environment is a gradual process. I'm becoming more comfortable with the daily routines and beginning to see how my education translates to practical work. Most importantly, I'm learning that my perspective, even as an intern, can be valuable to the team.</p>
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
            <Image
              src={`/placeholder.svg?height=720&width=1280&text=${encodeURIComponent(post.week + ": " + post.title)}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
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
