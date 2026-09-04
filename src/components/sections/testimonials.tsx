"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import type { Testimonial } from "@/types"

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kasun Perera",
    role: "Small Business Owner",
    content: "KK Remote Solutions saved my business laptop. The remote troubleshooting was incredibly fast and they explained everything clearly.",
    rating: 5,
  },
  {
    name: "Nimesha De Silva",
    role: "Freelance Designer",
    content: "My PC was freezing constantly. They came on-site, found a failing hard drive, recovered all my client files, and upgraded me to an SSD. Highly recommended!",
    rating: 5,
  },
  {
    name: "Abdul Rahman",
    role: "Student",
    content: "Affordable and transparent pricing. I knew exactly what the cost was going to be before they even started the repair. Great service.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-base">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="TESTIMONIALS"
          title="WHAT CLIENTS SAY"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group">
                <CardContent className="p-8 flex flex-col h-full gap-6">
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 right-6 text-6xl font-heading text-tertiary opacity-10 group-hover:opacity-20 transition-opacity">
                    "
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-secondary italic leading-relaxed flex-1 relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-card-hover border border-subtle flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
