"use client"
import { motion} from "framer-motion"

import { Shield, Clock, Trophy, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Zero Fees For Employers",
    description:
      "That's Right! Employers pay ZERO service fees on Latium. Get more work done and reduce business costs on our FEE FREE platform!",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Find the perfect freelancer for your project in minutes, not days. Our matching system connects you with the right talent instantly.",
  },
  {
    icon: Trophy,
    title: "Verified Professionals",
    description:
      "Work with pre-vetted freelancers who have proven track records and verified skills in their respective domains.",
  },
  {
    icon: Zap,
    title: "Secure Payments",
    description:
      "Your payments are protected with our secure escrow system. Only release payment when you're 100% satisfied with the work.",
  },
];
export default function Benefits() {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-color black"
        >
          Why Hire Freelancers On Latium?
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Find out why more employers are choosing Latium to find their perfect Freelancer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
          >
            
            <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
