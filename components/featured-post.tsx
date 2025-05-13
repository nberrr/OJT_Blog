"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blogPosts"

export function FeaturedPost() {
  const [isVisible, setIsVisible] = useState(false)
  const latestPost = Object.entries(blogPosts).sort((a, b) => {
    const weekA = parseInt(a[1].week.split(" ")[1])
    const weekB = parseInt(b[1].week.split(" ")[1])
    return weekB - weekA
  })[0][1]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="overflow-hidden border-primary/20 shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={latestPost.src || `/placeholder.svg?height=720&width=1280&text=Featured:+${latestPost.week}`}
            alt="Featured post"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge className="bg-primary text-primary-foreground">{latestPost.week}</Badge>
            <Badge variant="secondary">Latest</Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{latestPost.title}</CardTitle>
          <CardDescription>{latestPost.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{latestPost.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/blog/${Object.keys(blogPosts).find(key => blogPosts[key] === latestPost)}`} passHref className="w-full">
            <Button className="w-full">Read Full Entry</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
