"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, Tag, Globe, UserCheck } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const TRUST_POINTS = [
  {
    title: "Fast Response",
    description: "Quick turnaround times because we know you need your tech.",
    icon: Clock,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. You know exactly what you pay before we start.",
    icon: Tag,
  },
  {
    title: "Remote + On-site",
    description: "Islandwide remote support or home visits in the Colombo area.",
    icon: Globe,
  },
  {
    title: "Experienced Techs",
    description: "Certified professionals with years of hands-on experience.",
    icon: UserCheck,
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-card border-y border-subtle">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="WHY US"
          title="WHY CHOOSE US"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {TRUST_POINTS.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-base border border-subtle text-primary">
                <point.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
