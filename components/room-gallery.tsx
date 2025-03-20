"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface RoomGalleryProps {
  images: string[]
  roomName: string
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentIndex(null)
    document.body.style.overflow = ""
  }

  const goToPrevious = () => {
    if (currentIndex === null) return
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    if (currentIndex === null) return
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${roomName} photograph ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 h-12 w-12 rounded-full text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous image</span>
          </Button>

          <div className="relative h-full max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex h-full items-center justify-center">
              <div className={cn("relative h-auto w-full max-w-full")}>
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${roomName} photograph ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="mx-auto max-h-[90vh] w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 h-12 w-12 rounded-full text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next image</span>
          </Button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

