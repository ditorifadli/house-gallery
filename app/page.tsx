import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const rooms = [
    { id: "living-room", name: "Living Room", image: "/living-room/thumbnail.jpeg?height=600&width=800" },
    { id: "kitchen", name: "Kitchen", image: "/kitchen/thumbnail.jpeg?height=600&width=800" },
    { id: "tv-room", name: "TV Room", image: "/tv-room/thumbnail.jpeg?height=600&width=800" },
    { id: "bedroom", name: "Bedroom", image: "/bedroom/thumbnail.jpeg?height=600&width=800" },
    { id: "bathroom", name: "Bathroom", image: "/bathroom/thumbnail.jpeg?height=600&width=800" },
    { id: "office", name: "Home Office", image: "/office/thumbnail.jpeg?height=600&width=800" },
  ]
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="px-8 flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold">
            House Gallery
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {rooms.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms/${room.id}`}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-10 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="px-8 py-12 md:py-18 lg:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Modern House Photography</h1>
            <p className="max-w-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Explore the beauty of interior spaces through our carefully curated collection of photographs.
            </p>
          </div>
        </section>
        <section className="px-8 py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <Link
                key={room.id}
                href={`/rooms/${room.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={`${room.name} photograph`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{room.name}</h2>
                    <ChevronRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
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