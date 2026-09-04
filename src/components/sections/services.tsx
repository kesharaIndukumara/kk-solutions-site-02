"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { 
  Cpu, 
  ShieldAlert, 
  Headset, 
  DatabaseBackup, 
  Wifi, 
  Briefcase,
  ArrowUpRight
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import type { Service } from "@/types"

const SERVICES: Service[] = [
  {
    id: "hardware",
    title: "Hardware Repair",
    description: "Screen replacements, battery upgrades, and motherboard fixes.",
    icon: "cpu",
  },
  {
    id: "virus",
    title: "Virus & Malware Removal",
    description: "Deep scans and complete removal of all malicious software.",
    icon: "shield",
  },
  {
    id: "remote",
    title: "Remote Troubleshooting",
    description: "Instant software fixes and tune-ups without you leaving home.",
    icon: "headset",
  },
  {
    id: "data",
    title: "Data Recovery",
    description: "Recover lost or deleted files from failing hard drives safely.",
    icon: "database",
  },
  {
    id: "network",
    title: "Network Setup",
    description: "Wi-Fi troubleshooting, router config, and speed optimization.",
    icon: "wifi",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Tailored tech solutions and ongoing support for your team.",
    icon: "briefcase",
  },
]

const iconMap = {
  cpu: Cpu,
  shield: ShieldAlert,
  headset: Headset,
  database: DatabaseBackup,
  wifi: Wifi,
  briefcase: Briefcase,
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        
        <SectionHeading
          label="SERVICES"
          title="WHAT WE DO"
          description="Comprehensive computer repair and IT support solutions designed to keep you connected and productive."
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="group relative h-full overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-8 p-4 rounded-full bg-base w-fit border border-subtle group-hover:border-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-semibold text-xl text-primary mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-secondary leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>

                    <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center group-hover:bg-primary group-hover:text-base group-hover:border-primary transition-all self-start mt-auto">
                      <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
