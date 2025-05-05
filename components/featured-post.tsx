"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedPost() {
  const [isVisible, setIsVisible] = useState(false)

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
            src="/placeholder.svg?height=720&width=1280&text=Featured:+Week+3+Challenge"
            alt="Featured post"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">Week 1</Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">Stepping into Workplace</CardTitle>
          <CardDescription>February 24-28 ,2025</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Week three marked a significant shift in my OJT experience as I faced my first real challenge. The
            comfortable routine I had begun to establish was disrupted, pushing me out of my comfort zone.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/blog/week-3" passHref className="w-full">
            <Button className="w-full">Read Full Entry</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
