"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Repairs Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Remote Support" },
]

export function StatsBar() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div 
          ref={ref}
          className="bg-card rounded-[18px] border border-subtle p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-subtle">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
