import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CommunityVisit() {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })

  return (
    <section className="relative w-full bg-neutral-900 text-neutral-50">
      {/* Experience & Community */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
          <img
            src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=2000&auto=format&fit=crop"
            alt="Cinematic café interior"
            className="h-[48vh] w-full object-cover sm:h-[56vh] md:h-[64vh]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent)]" />
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={seen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 flex items-end"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <p className="inline rounded-full border border-amber-300/30 bg-amber-200/10 px-3 py-1 text-xs tracking-widest text-amber-200/80">
                COMMUNITY
              </p>
              <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl md:text-5xl">
                More than coffee. It’s connection.
              </h3>
              <p className="mt-3 max-w-xl text-neutral-200">
                A space for conversation, quiet focus, and the gentle cadence of
                neighborhood life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visit Us */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Map to Ground Story Café"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.5072%2C-0.1257%2C51.5122&layer=mapnik"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-serif text-2xl sm:text-3xl">Visit Us</h4>
            <p className="mt-3 text-neutral-300">
              12 Mercer Lane, Arts District
              <br />
              Mon–Sun, 7am – 7pm
            </p>
            <p className="mt-2 text-neutral-300">Contact: hello@groundstory.cafe</p>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-amber-400/90 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition hover:bg-amber-400"
            >
              Drop by today
            </motion.a>
            <p className="mt-6 text-sm text-neutral-400">
              Soft ambiance by day. Golden hour by evening. A subtle ritual — always.
            </p>
          </div>
        </div>
        <div className="mt-16 overflow-hidden rounded-2xl">
          <video
            className="h-56 w-full object-cover sm:h-64 md:h-80"
            src="https://cdn.coverr.co/videos/coverr-latte-art-4042/1080p.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  )
}
