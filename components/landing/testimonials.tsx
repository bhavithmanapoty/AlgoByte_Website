"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "React Dev @ Netflix",
      quote:
        "I used to fall asleep watching 2-hour tutorials. The 30-second swiping format actually kept me awake. Got my L4 offer yesterday!",
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "David Chen",
      role: "Backend @ Amazon",
      quote:
        "The pattern recognition drills are insane. I spotted a DP problem in my interview instantly because I'd swiped through 50 similar ones.",
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "Maria G.",
      role: "Full Stack @ Uber",
      quote:
        "Finally, interview prep that doesn't feel like homework. It's actually addictive. My streak is at 45 days and counting.",
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "Alex K.",
      role: "System Engineer @ Google",
      quote:
        "The bite-sized format is perfect for my commute. I can knock out 5 problems before I even get to the office.",
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "Emily R.",
      role: "Frontend Lead @ Airbnb",
      quote:
        "Best way to keep your algo skills sharp without burnout. It feels more like a game than studying.",
      avatar: "/diverse-group-avatars.png",
    },
  ]

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Offer Letters,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Incoming.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join thousands of developers who turned their downtime into offer letters.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-8 px-4 pr-8"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 50, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300 w-[400px] flex-shrink-0"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed line-clamp-4">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-primary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
