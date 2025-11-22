import { Star } from "lucide-react"
import Image from "next/image"

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
  ]

  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Offer Letters,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Incoming.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join thousands of developers who turned their downtime into offer letters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
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
                <p className="text-white/80 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-primary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
