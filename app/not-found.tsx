import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="px-8 flex max-w-[64rem] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Room Not Found</h1>
        <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
          We couldn&apos;t find the room you were looking for.
        </p>
        <Button asChild>
          <Link href="/">Return to Gallery</Link>
        </Button>
      </div>
    </div>
  )
}

