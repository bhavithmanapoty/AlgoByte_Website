"use client"

import { Code2, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-white">AlgoByte</span>
          </Link>
          <p className="text-white/40 text-sm">
            Master algorithms one swipe at a time.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </footer>
  )
}
