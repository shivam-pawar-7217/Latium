import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Active Projects</h2>
          <p className="text-3xl font-bold text-blue-600 mb-4">3</p>
          <Button asChild variant="outline">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Earnings</h2>
          <p className="text-3xl font-bold text-green-600 mb-4">$1,250</p>
          <Button asChild variant="outline">
            <Link href="/earnings">View Earnings</Link>
          </Button>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p className="text-3xl font-bold text-orange-600 mb-4">5</p>
          <Button asChild variant="outline">
            <Link href="/messages">View Messages</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

