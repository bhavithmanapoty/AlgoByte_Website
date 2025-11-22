"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Zap } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Feature 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-2 rounded-3xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="bg-background/90 rounded-2xl aspect-[9/16] p-6 border border-white/5 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
                <div className="flex-1 flex flex-col justify-center gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
                    >
                      <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                      <div className="h-2 w-full bg-white/10 rounded" />
                    </motion.div>
                  ))}
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-center text-green-400 font-bold animate-pulse">
                    Success! Logic Matched.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stop Grinding. <br />
              <span className="text-primary">Start Playing.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Traditional LeetCode is a chore. AlgoByte turns pattern recognition into muscle memory through rapid-fire,
              swipe-based micro-games. Solve Parsons problems by dragging code blocks into place.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-pink-600 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Gamified <br />
              <span className="text-accent">Retention.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Maintain your streak, earn badges like 'Big O Boss', and track your ELO rating across different data
              structures. Compete on the global leaderboard.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-2 rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="bg-background/90 rounded-2xl aspect-[9/16] p-6 border border-white/5 flex flex-col relative overflow-hidden">
                <div className="text-center pt-8 pb-12">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                    <Flame className="w-12 h-12 text-white fill-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">72 Days</h3>
                  <p className="text-white/40">Current Streak</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-2xl font-bold text-primary">1,420</div>
                    <div className="text-xs text-white/40">ELO Rating</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-2xl font-bold text-accent">Top 5%</div>
                    <div className="text-xs text-white/40">Global Rank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
