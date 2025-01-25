"use client"

import { motion } from "framer-motion"
import { Bitcoin, EclipseIcon as Ethereum, DollarSign, Shield, Users, Lock } from "lucide-react"
import Link from "next/link"

const PaymentIcon = ({ icon: Icon, color, delay }: { icon: any; color: string; delay: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay,
    }}
    className={`p-4 rounded-full ${color} shadow-lg hover:shadow-2xl transition-shadow`}
    whileHover={{ y: -5 }}
  >
    <Icon size={32} className="text-white" />
  </motion.div>
)

const FeatureCard = ({ title, description, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-lg bg-purple-500/20">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function Features() {
  return (
    <section className="bg-[#1a1a2e] py-20">
      <div className="container mx-auto px-4">
        {/* Crypto & USD Payments Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Crypto & USD Payments</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Latium supports payments in USD and 6 cryptocurrencies including Bitcoin, Ethereum, and our own WORK
              token. Pioneer in the crypto and blockchain freelancing ecosystem.
            </p>
          </div>

          <div className="relative h-[200px] max-w-lg mx-auto">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PaymentIcon icon={Bitcoin} color="bg-[#F7931A]" delay={0} />
            </div>
            <div className="absolute left-[30%] top-[30%] transform -translate-x-1/2 -translate-y-1/2">
              <PaymentIcon icon={Ethereum} color="bg-[#627EEA]" delay={0.2} />
            </div>
            <div className="absolute left-[70%] top-[40%] transform -translate-x-1/2 -translate-y-1/2">
              <PaymentIcon icon={DollarSign} color="bg-[#2EBD85]" delay={0.4} />
            </div>
          </div>
        </motion.div>

        {/* FaceID Verification Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&h=400"
                  alt="Face ID Verification Technology"
                  className="w-full rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl transform -rotate-6 rounded-lg"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              FaceID Verified Freelancers
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300"
            >
              You demand trust and transparency, and so Latium has developed a proprietary{" "}
              <Link href="/technology" className="text-purple-400 hover:text-purple-300 underline">
                facial scan technology
              </Link>{" "}
              that ensures verified users are unique and can only have 1 account.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard
                title="Verified Identity"
                description="Every freelancer's identity is verified using our advanced FaceID system."
                icon={Shield}
                delay={0.3}
              />
              <FeatureCard
                title="Trusted Reviews"
                description="Read genuine reviews from verified clients and freelancers."
                icon={Users}
                delay={0.4}
              />
              <FeatureCard
                title="Secure Platform"
                description="End-to-end encryption and blockchain-based security measures."
                icon={Lock}
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

