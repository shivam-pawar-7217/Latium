"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Wallet, User, Search, Bell, LogIn, UserPlus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#1a1a2e]/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Latium
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {[
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" },
                { name: "Enterprise", href: "/enterprise" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
                  asChild
                >
                  <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
                  asChild
                >
                  <Link href="/register">
                    <UserPlus className="mr-2 h-4 w-4" /> Register
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-white md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-[#1a1a2e] border border-purple-500/20 rounded-lg p-4 backdrop-blur-none"
            >
              {[
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" },
                { name: "Enterprise", href: "/enterprise" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Button
                  variant="ghost"
                  className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
                  asChild
                >
                  <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
                  asChild
                >
                  <Link href="/register">
                    <UserPlus className="mr-2 h-4 w-4" /> Register
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

