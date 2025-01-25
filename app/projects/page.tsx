"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Users, Rocket, BotIcon as Robot } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Latium Job Board",
    description:
      "Meet up with other online members that are looking to work or hire. Post jobs and get feedback, or showcase your skills.",
    image: "/images/job-board.jpg",
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
    logo: "/logo.png",
    stats: {
      type: "Open",
      members: "2,916",
      online: "10",
    },
  },
  {
    id: 2,
    title: "Crypto Airdrops",
    description:
      "Join our Crypto Airdrops Group to access top-notch airdrops from trusted projects! 🚀 Stay updated with the latest token giveaways and earn rewards.",
    image: "/images/crypto.jpg",
    banner: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&h=400",
    logo: "/crypto-logo.png",
    stats: {
      type: "Open",
      members: "389",
      online: "3",
    },
  },
  {
    id: 3,
    title: "The Trading Wolfpack",
    description: "Posting trades, sharing ideas, making money.",
    image: "/images/trading.jpg",
    banner: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=400",
    logo: "/trading-logo.png",
    stats: {
      type: "Private",
      members: "107",
      online: "6",
    },
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Discover Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Find exciting projects and connect with talented professionals
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          <Input
            type="search"
            placeholder="Search projects..."
            className="max-w-sm bg-white/5 border-purple-500/20 text-white"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="relative h-48">
                <img
                  src={project.banner || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    {index === 0 ? (
                      <Users className="w-6 h-6 text-white" />
                    ) : index === 1 ? (
                      <Rocket className="w-6 h-6 text-white" />
                    ) : (
                      <Robot className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mt-4 pt-4 border-t border-purple-500/20">
                  <span>{project.stats.type}</span>
                  <span>• {project.stats.members} Members</span>
                  <span>• {project.stats.online} Online</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

