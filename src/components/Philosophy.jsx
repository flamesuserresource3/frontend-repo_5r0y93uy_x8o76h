import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0e0d0c] px-6 py-24 text-neutral-100 sm:py-28 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <h2 className="font-serif text-3xl leading-snug sm:text-4xl md:text-5xl">
            Our Philosophy
          </h2>
          <p className="mt-6 text-neutral-300">
            We believe every cup holds a beginning — a quiet moment where craft meets
            character. From careful sourcing to patient brewing, we honor the
            narrative in every note: warmth, depth, and connection.
          </p>
          <p className="mt-4 text-neutral-300">
            The details matter. The temperature of the kettle. The grain of the
            porcelain. The conversation that lingers. This is coffee as
            storytelling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="order-1 overflow-hidden rounded-xl ring-1 ring-white/10 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full">
            <img
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop"
              alt="Cinematic close-up of coffee beans and pour-over"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
