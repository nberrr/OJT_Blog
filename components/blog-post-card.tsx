"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  slug: string
}

export function BlogPostCard({ title, description, date, slug }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Convert the slug format from "week-1" to "week1" for the image path
  const imageSlug = slug.replace('-', '')

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden transition-shadow duration-200 hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image
              src={`/blog/${slug}/cover.jpg`}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/placeholder.svg?height=360&width=640&text=${encodeURIComponent(title)}`
              }}
            />
          </motion.div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-1 text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{date}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-4">
          <Link href={`/blog/${slug}`} passHref className="w-full">
            <Button variant="outline" className="w-full">
              Read Article
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
