"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Invest in Your Career</h2>
          <p className="text-white/60">Flexible pricing that grows with you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card p-8 rounded-3xl flex flex-col border-white/5">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-white/60 mb-2">The Lurker</h3>
              <div className="text-5xl font-bold text-white mb-2">$0<span className="text-2xl text-white/60 font-normal">/month</span></div>
              <p className="text-white/40">Free forever</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-white/40" /> 50 swipes per day
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-white/40" /> Basic Data Structures
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-white/40" /> Community Solutions
              </li>
            </ul>

            <Button
              variant="outline"
              className="w-full h-12 rounded-xl border-white/10 hover:bg-white/5 text-white bg-transparent"
            >
              Start Free
            </Button>
          </div>

          {/* Premium Tier */}
          <div className="glass-card p-8 rounded-3xl flex flex-col border-primary/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[50px] rounded-full" />

            <div className="mb-8 relative">
              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                BEST VALUE
              </div>
              <h3 className="text-xl font-medium text-primary mb-2">Career Unlock</h3>
              <div className="text-5xl font-bold text-white mb-2">$9.99<span className="text-2xl text-white/60 font-normal">/month</span></div>
              <p className="text-white/40">Cancel anytime</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1 relative">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-primary/20 p-1 rounded-full">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Unlimited Swipes
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-primary/20 p-1 rounded-full">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Advanced Topics (DP, Graphs)
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-primary/20 p-1 rounded-full">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Company-Specific Tracks
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-primary/20 p-1 rounded-full">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Offline Mode
              </li>
            </ul>

            <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-bold shadow-lg shadow-primary/25 border-0">
              Subscribe Now
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
