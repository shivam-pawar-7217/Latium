import { Button } from "@/components/ui/button"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        <div className="mb-6">
          <img src="/placeholder.svg?height=150&width=150" alt="Profile" className="rounded-full w-32 h-32 mb-4" />
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Blockchain Developer</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-600">
            Experienced blockchain developer with a passion for building decentralized applications and smart contracts.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Solidity</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Node.js</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Web3.js</span>
          </div>
        </div>
        <Button>Edit Profile</Button>
      </div>
    </div>
  )
}

