"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Check, X, Heart, MessageCircle, Share2, User } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Public Beta Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Doomscroll Your Way to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FAANG Job.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            Master Data Structures & Algorithms in 30-second bites. Swipe through micro-challenges, spot bugs instantly,
            and build your streak.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-neon-blue text-background font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] border-0 transition-all"
            >
              Start Playing Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm gap-2 bg-transparent"
            >
              <Play className="w-4 h-4 fill-white" /> Watch Trailer
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-white/40">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center relative z-10"
                >
                    <User className="w-5 h-5 text-white/60" />
                </div>
              ))}
            </div>
            <p>Joined by 10,000+ developers</p>
          </div>
        </motion.div>

        {/* 3D Phone Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[800px] flex items-center justify-center"
        >
          <div className="relative w-[320px] h-[640px] bg-black rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out z-20">
            {/* Phone Screen Content */}
            <div className="absolute inset-0 bg-background flex flex-col">
              {/* Status Bar */}
              <div className="h-12 w-full flex justify-between items-center px-6 text-white text-xs z-10">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 w-full bg-white/10 relative">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 30, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-primary"
                />
              </div>

              {/* Code Editor */}
              <div className="flex-1 p-6 font-mono text-sm text-white/80 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
                <div className="text-muted-foreground mb-4 text-xs">
                  // Find the bug in this binary search implementation
                </div>
                <div className="space-y-1">
                  <span className="text-secondary">function</span> <span className="text-primary">binarySearch</span>
                  (arr, target) {"{"}
                  <div className="pl-4">let left = 0;</div>
                  <div className="pl-4">let right = arr.length - 1;</div>
                  <div className="pl-4 h-4" />
                  <div className="pl-4">
                    <span className="text-secondary">while</span> (left &lt;= right) {"{"}
                  </div>
                  <div className="pl-8">let mid = Math.floor((left + right) / 2);</div>
                  <div className="pl-8 h-4" />
                  <div className="pl-8">
                    <span className="text-secondary">if</span> (arr[mid] === target){" "}
                    <span className="text-secondary">return</span> mid;
                  </div>
                  <div className="pl-8">
                    <span className="text-secondary">if</span> (arr[mid] &lt; target) {"{"}
                    <div className="pl-4 bg-red-500/20 border-l-2 border-red-500 text-red-200">
                      right = mid + 1; <span className="text-xs opacity-50 ml-2">// BUG HERE</span>
                    </div>
                  </div>
                  <div className="pl-8">
                    {"}"} <span className="text-secondary">else</span> {"{"}
                    <div className="pl-4">right = mid - 1;</div>
                  </div>
                  <div className="pl-8">{"}"}</div>
                  <div className="pl-4">{"}"}</div>
                  <div className="pl-4">
                    <span className="text-secondary">return</span> -1;
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>

              {/* Interaction Overlay */}
              <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center z-20">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Heart className="w-5 h-5 text-white fill-white/20" />
                  </div>
                  <span className="text-xs text-white font-bold">12k</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-white font-bold">842</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-white font-bold">Share</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="h-24 px-2 pb-6 flex gap-2 items-end z-20 bg-gradient-to-t from-black to-transparent w-full">
                <Button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-500 border border-red-500/50 rounded-xl h-12 font-bold text-sm px-1">
                  <X className="mr-1 w-4 h-4" /> BUG FOUND
                </Button>
                <Button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-500 border border-green-500/50 rounded-xl h-12 font-bold text-sm px-1">
                  <Check className="mr-1 w-4 h-4" /> LOOKS GOOD
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Abstract Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-20 right-0 w-32 h-32 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm z-0"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-40 -left-10 w-24 h-24 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm z-30"
          />
        </motion.div>
      </div>
    </section>
  )
}
