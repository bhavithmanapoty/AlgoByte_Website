export function SocialProof() {
  const companies = ["Google", "Meta", "Amazon", "Netflix", "Microsoft", "Uber"]

  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-white/40 mb-8 uppercase tracking-widest">
          Our users are landing offers at
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <div key={company} className="text-xl md:text-2xl font-bold text-white font-sans tracking-tight">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
