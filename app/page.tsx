import AnimatedHero from "./components/AnimatedHero"
import Features from "./components/Features"
import Benefits from "./components/Benefits"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <AnimatedHero />
      <Features />
      <Benefits />
    </div>
  )
}

