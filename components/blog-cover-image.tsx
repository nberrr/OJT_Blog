"use client"

import Image from "next/image"

interface BlogCoverImageProps {
  src: string
  alt: string
  week: string
  title: string
}

export function BlogCoverImage({ src, alt, week, title }: BlogCoverImageProps) {
  return (
    <Image
      src={`/blog/week${week.split(" ")[1]}/cover.jpg`}
      alt={alt}
      fill
      className="object-cover"
      priority
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = `/placeholder.svg?height=720&width=1280&text=${encodeURIComponent(week + ": " + title)}`
      }}
    />
  )
}