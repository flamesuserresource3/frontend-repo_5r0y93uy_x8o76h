import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    title: 'Select',
    copy:
      'We partner with small farms and co-ops, prioritizing terroir, soil health, and ethical stewardship.',
    img:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Roast',
    copy:
      'Measured heat curves and patient development unlock nuance — caramel, citrus, and cocoa in balance.',
    img:
      'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brew',
    copy:
      'From pour-over to espresso, precision and ritual meet to reveal the cup’s character and clarity.',
    img:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Serve',
    copy:
      'Presented with restraint and grace — minimal forms, warm textures, and a welcoming pace.',
    img:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  },
]

const collection = [
  {
    title: 'Single Origin — Andes',
    img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'House Espresso Blend',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Almond Croissant',
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Seasonal Tart',
    img: 'https://images.unsplash.com/photo-1509448613959-44d527dd5d78?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function CraftShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="relative w-full bg-neutral-50 px-6 py-24 text-neutral-900 sm:py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.h3
          style={{ opacity: glow }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl"
        >
          The Craft
        </motion.h3>

        <div className="mt-10 overflow-x-auto">
          <div className="flex snap-x snap-mandatory gap-6">
            {steps.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative aspect-[4/5] w-72 shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:w-80 md:w-[22rem]"
              >
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="font-serif text-2xl text-white">{s.title}</h4>
                  <p className="mt-2 text-sm text-neutral-200">{s.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl">Signature Collection</h3>
          <span className="text-xs tracking-widest text-amber-700/70">CURATED SEASONALLY</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {collection.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5"
            >
              <div className="relative aspect-[4/5] w-full">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-medium text-neutral-100 drop-shadow">{c.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
