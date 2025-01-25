"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Rocket } from "lucide-react"

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Power your competitive advantage with Latium Enterprise
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your most strategic sustainable competitive advantage is your access to talent. Latium Enterprise takes it
              to the next level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-white mb-6">
                Access the best from over 53 million of the world's largest cloud workforce instantly
              </h2>
              <p className="text-gray-400 mb-8">
                Scale your workforce on demand with pre-vetted talent from around the globe. Our enterprise solutions
                provide you with the flexibility and expertise you need to grow.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-600/20">
                    <Building2 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Solutions</h3>
                    <p className="text-gray-400">Customized workflows and dedicated support for your organization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-600/20">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Global Talent Pool</h3>
                    <p className="text-gray-400">Access to millions of skilled professionals worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-600/20">
                    <Rocket className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                    <p className="text-gray-400">
                      NASA achieved extraordinary cost savings (80-99%) compared to traditional methods
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
                  alt="Enterprise Solutions"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Contact Enterprise Sales <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

