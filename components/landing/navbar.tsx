"use client"

import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all" />
            <Code2 className="w-8 h-8 text-primary relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            AlgoByte
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Features
          </Link>
          {/* <Link 
            href="#how-it-works" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            How it Works
          </Link> */}
          {/* <Link 
            href="#pricing" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Pricing
          </Link> */}
          {/* <Link 
            href="#reviews" 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reviews
          </Link> */}
        </div>

        <Link href="https://algo-byte.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Button 
            className="bg-gradient-to-r from-primary to-neon-purple hover:opacity-90 text-background font-bold rounded-full px-6 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] border-0"
          >
            Play Now
          </Button>
        </Link>
      </div>
    </nav>
  )
}
