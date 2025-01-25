import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">About Latium</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Latium is a decentralized freelancing platform that connects talented professionals with exciting opportunities
        worldwide. Our mission is to revolutionize the way people work and collaborate in the digital age.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}

