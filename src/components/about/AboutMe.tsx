export function AboutMe() {
  return (
    <section className="mb-10" aria-labelledby="about-heading">
      <h2
        id="about-heading"
        className="text-xs font-semibold tracking-[0.3em] text-slate-400 mb-3 uppercase"
      >
        Featured Projects
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-50 tracking-tight">
            Building digital experiences with modern tech.
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            B.E. (CS) graduate and CDAC (2025) engineer focused on high-quality, production-ready
            systems using Spring Boot, MERN, and AI/LLMs to ship faster without compromising on
            reliability.
          </p>
        </div>
      </div>
    </section>
  )
}

