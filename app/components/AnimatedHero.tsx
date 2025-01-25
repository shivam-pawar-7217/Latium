"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { quotes } from "@/utils/quotes"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AnimatedHero() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 10000) // Changed to 10 seconds

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative bg-[#1a1a2e] min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-violet-600/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
            "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Perfect Match
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl mb-8 text-gray-300">
            Find your <span className="text-purple-400 font-semibold">Perfect Freelancer</span> in Under 10 Minutes!
            Start a search, browse and Buy Freelancer Service Packages.
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 group" asChild>
              <Link href="/login">
                I Want To Hire
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-purple-400"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  9,176
                </motion.div>
                <div className="text-gray-300">Services Listed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-purple-400"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                >
                  373,584
                </motion.div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Animated Quotes with better transitions */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-300 italic max-w-2xl"
              >
                <Sparkles className="inline-block mr-2 text-purple-400 h-5 w-5" />"{quotes[currentQuote].text}"
                <div className="text-sm text-purple-400 mt-2 font-semibold">- {quotes[currentQuote].author}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <CheckCircle className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Zero Fees</h3>
            </div>
            <p className="text-gray-300">
              That's Right! Employers pay ZERO service fees on our platform. Get more work done and reduce business
              costs!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Start Working</h3>
            </div>
            <p className="text-gray-300">
              Browse Jobs For Bid or register and Post Your Service for employers to purchase. Begin your freelancing
              journey today!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20"
          >
         
            <p className="text-gray-300 mt-4 text-center">Join our community of successful freelancers</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

