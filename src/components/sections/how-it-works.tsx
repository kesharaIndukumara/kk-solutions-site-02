"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PhoneCall, Search, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const STEPS = [
  {
    id: "01",
    title: "Contact Us",
    description: "Reach out via WhatsApp or phone and describe your tech issue.",
    icon: PhoneCall,
  },
  {
    id: "02",
    title: "Diagnose",
    description: "We remotely or physically inspect the device to find the root cause.",
    icon: Search,
  },
  {
    id: "03",
    title: "Fix & Confirm",
    description: "We provide a transparent quote, fix the issue, and you verify the solution.",
    icon: Wrench,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="PROCESS"
          title="HOW IT WORKS"
          description="A simple, stress-free 3-step process to get your tech back in working order."
        />

        <div className="relative mt-16">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-subtle z-0" />
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="bg-base border border-subtle w-24 h-24 rounded-full flex items-center justify-center text-primary relative z-10">
                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-metal text-base font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-md">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
