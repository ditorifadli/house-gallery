import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { RoomGallery } from "@/components/room-gallery"

// This would typically come from a database or CMS
const getRoomData = async (roomId: string) => {
  const rooms = {
    "living-room": {
      name: "Living Room",
      description: "A spacious and bright living room with modern furnishings and natural light.",
      images: [
        "/living-room/1.jpeg?height=800&width=1200",
        "/living-room/2.jpeg?height=800&width=1200",
        "/living-room/3.jpeg?height=800&width=1200",
        "/living-room/4.jpeg?height=800&width=1200",
        "/living-room/5.jpeg?height=800&width=1200",
        "/living-room/6.jpeg?height=800&width=1200",
        "/living-room/7.jpeg?height=800&width=1200",
        "/living-room/8.jpeg?height=800&width=1200",
        "/living-room/9.jpeg?height=800&width=1200",
        "/living-room/10.jpeg?height=800&width=1200",
        "/living-room/11.jpeg?height=800&width=1200",
        "/living-room/12.jpeg?height=800&width=1200",
        "/living-room/13.jpeg?height=800&width=1200",
        "/living-room/14.jpeg?height=800&width=1200",
      ],
    },
    kitchen: {
      name: "Kitchen",
      description: "A contemporary kitchen with high-end appliances and elegant countertops.",
      images: [
        "/kitchen/1.jpeg?height=800&width=1200",
        "/kitchen/2.jpeg?height=800&width=1200",
        "/kitchen/3.jpeg?height=800&width=1200",
        "/kitchen/4.jpeg?height=800&width=1200",
        "/kitchen/5.jpeg?height=800&width=1200",
        "/kitchen/6.jpeg?height=800&width=1200",  
        "/kitchen/7.jpeg?height=800&width=1200",
        "/kitchen/8.jpeg?height=800&width=1200",
        
      ],
    },
    "tv-room": {
      name: "TV Room",
      description: "A cozy entertainment space with comfortable seating and state-of-the-art equipment.",
      images: [
        "/tv-room/1.jpeg?height=800&width=1200",
        "/tv-room/2.jpeg?height=800&width=1200",
        "/tv-room/3.jpeg?height=800&width=1200",
        "/tv-room/4.jpeg?height=800&width=1200",
        "/tv-room/5.jpeg?height=800&width=1200",
        "/tv-room/6.jpeg?height=800&width=1200",
        "/tv-room/7.jpeg?height=800&width=1200",
        "/tv-room/8.jpeg?height=800&width=1200",
        "/tv-room/9.jpeg?height=800&width=1200",
        "/tv-room/10.jpeg?height=800&width=1200",
        "/tv-room/11.jpeg?height=800&width=1200",
      ],
    },
    bedroom: {
      name: "Bedroom",
      description: "A tranquil bedroom featuring a minimalist design and calming atmosphere.",
      images: [
        "/bedroom/1.jpeg?height=800&width=1200",
        "/bedroom/2.jpeg?height=800&width=1200",
        "/bedroom/3.jpeg?height=800&width=1200",
        "/bedroom/4.jpeg?height=800&width=1200",
        "/bedroom/5.jpeg?height=800&width=1200",
        "/bedroom/6.jpeg?height=800&width=1200",  
        "/bedroom/7.jpeg?height=800&width=1200",  
        "/bedroom/8.jpeg?height=800&width=1200",
        "/bedroom/9.jpeg?height=800&width=1200",
        "/bedroom/10.jpeg?height=800&width=1200",
        "/bedroom/11.jpeg?height=800&width=1200",
        "/bedroom/12.jpeg?height=800&width=1200",
        "/bedroom/13.jpeg?height=800&width=1200",
      ],
    },
    bathroom: {
      name: "Bathroom",
      description: "A luxurious bathroom with premium fixtures and elegant tiling.",
      images: [
        "/bathroom/1.jpeg?height=800&width=1200",
        "/bathroom/2.jpeg?height=800&width=1200",
        "/bathroom/3.jpeg?height=800&width=1200",
        "/bathroom/4.jpeg?height=800&width=1200",
        "/bathroom/5.jpeg?height=800&width=1200",
        "/bathroom/6.jpeg?height=800&width=1200",
        "/bathroom/7.jpeg?height=800&width=1200",
        "/bathroom/8.jpeg?height=800&width=1200",
        "/bathroom/9.jpeg?height=800&width=1200",
        "/bathroom/10.jpeg?height=800&width=1200"
      ],
    },
    office: {
      name: "Home Office",
      description: "A functional yet stylish home office designed for productivity and comfort.",
      images: [
        "/office/1.jpeg?height=800&width=1200",
        "/office/2.jpeg?height=800&width=1200",
        "/office/3.jpeg?height=800&width=1200",
        "/office/4.jpeg?height=800&width=1200",
        "/office/5.jpeg?height=800&width=1200",
        "/office/6.jpeg?height=800&width=1200", 
        "/office/7.jpeg?height=800&width=1200",
        "/office/8.jpeg?height=800&width=1200",
        "/office/9.jpeg?height=800&width=1200",
        "/office/10.jpeg?height=800&width=1200",
        "/office/11.jpeg?height=800&width=1200",
        "/office/12.jpeg?height=800&width=1200",
        "/office/13.jpeg?height=800&width=1200"
      ],
    },
  }
  return rooms[roomId as keyof typeof rooms]
}

export default async function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  // Await params before accessing its properties
  const resolvedParams = await params
  const roomId = resolvedParams.roomId
  const room = await getRoomData(roomId)
  
  if (!room) {
    notFound()
  }
  
  // Get next and previous room IDs for navigation
  const roomIds = ["living-room", "kitchen", "tv-room", "bedroom", "bathroom", "office"]
  const currentIndex = roomIds.indexOf(resolvedParams.roomId)
  const prevRoom = currentIndex > 0 ? roomIds[currentIndex - 1] : null
  const nextRoom = currentIndex < roomIds.length - 1 ? roomIds[currentIndex + 1] : null
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="px-8 flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden md:inline">Back</span>
          </Link> 
          <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold">{room.name}</h1>
          <div className="w-[100px] flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="px-8 py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-lg text-muted-foreground">{room.description}</p>
            <RoomGallery images={room.images} roomName={room.name} />
          </div>
        </section>
        <section className="px-8 pb-12">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            {prevRoom ? (
              <Button variant="outline" asChild>
                <Link href={`/rooms/${prevRoom}`} className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Previous Room
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextRoom ? (
              <Button variant="outline" asChild>
                <Link href={`/rooms/${nextRoom}`} className="flex items-center gap-2">
                  Next Room
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="px-8 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} House Gallery. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Photos from</span>
            <a 
              href="https://www.pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-foreground"
            >
              <Image 
                src="/logos/pinterest.webp"
                alt="Pinterest Logo" 
                width={20} 
                height={20}
                className="h-5 w-5"
              />
              <span className="ml-1 text-sm font-medium">Pinterest</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}