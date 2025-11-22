"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function SocialProof() {
  const companies = ["Google", "Meta", "Amazon", "Netflix", "Microsoft", "Uber"]

  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <p className="text-center text-sm font-medium text-white/40 mb-8 uppercase tracking-widest">
          Our users are landing offers at
        </p>
        <div className="relative flex overflow-hidden max-w-5xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-12 md:gap-20 items-center whitespace-nowrap pr-12 md:pr-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          >
            {[...companies, ...companies].map((company, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-pointer">
                <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src="/placeholder-logo.svg" 
                    alt={company} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-xl md:text-2xl font-bold text-white/50 group-hover:text-white font-sans tracking-tight transition-colors duration-500">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
