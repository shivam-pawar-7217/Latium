"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const categories = [
  { name: "Featured Services", count: 115 },
  { name: "Graphics & Design", count: 2829 },
  { name: "Digital Marketing", count: 1340 },
  { name: "Writing & Translation", count: 2240 },
  { name: "Video & Animation", count: 437 },
  { name: "Music & Audio", count: 528 },
  { name: "Programming & Tech", count: 1893 },
  { name: "Business", count: 756 },
]

const services = [
  {
    id: 1,
    title: "I will Video Editing & Animation",
    provider: "Jose Duarte",
    rating: 4.9,
    reviews: 50,
    location: "Venezuela",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&h=500",
    isPro: true,
  },
  {
    id: 2,
    title: "I will craft a high-converting website",
    provider: "Tomas Graversen",
    rating: 4.8,
    reviews: 32,
    location: "Denmark",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
  },
  {
    id: 3,
    title: "I will do organic YouTube channel promotion",
    provider: "SEO Guru",
    rating: 4.9,
    reviews: 211,
    location: "Sri Lanka",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=500",
  },
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("Featured Services")

  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Browse Services</h1>
          <p className="text-gray-400 text-center">Find the perfect service for your needs</p>
        </motion.div>

        {/* Categories Section */}
        <div className="relative mb-12">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex-shrink-0 px-6 py-4 rounded-lg transition-colors ${
                  selectedCategory === category.name
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <div className="text-lg font-semibold">{category.name}</div>
                <div className="text-sm">Services: {category.count}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Input
            type="search"
            placeholder="Search services..."
            className="max-w-sm bg-white/5 border-purple-500/20 text-white"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="relative h-48">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {service.isPro && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    PRO
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    {service.provider.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{service.provider}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating} ({service.reviews}) • {service.location}
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-white mb-4">{service.title}</h2>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

