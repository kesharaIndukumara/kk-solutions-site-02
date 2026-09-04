import * as React from "react"
import { Metadata } from "next"
import { 
  Cpu, 
  ShieldAlert, 
  Headset, 
  DatabaseBackup, 
  Wifi, 
  Briefcase,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { GradientText } from "@/components/ui/gradient-text"
import { Sparkle } from "@/components/icons/sparkle"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Services | KK Remote Solutions",
  description: "Detailed overview of our IT repair, consulting, and support services.",
}

const DETAILED_SERVICES = [
  {
    id: "hardware",
    title: "Hardware Repair",
    description: "Expert diagnostics and physical repairs for laptops and desktops. We use high-quality replacement parts to ensure longevity.",
    icon: Cpu,
    features: [
      "Screen & keyboard replacements",
      "Battery upgrades & diagnostics",
      "Motherboard component fixes",
      "Overheating & cooling system repair",
    ],
  },
  {
    id: "virus",
    title: "Virus & Malware Removal",
    description: "Complete eradication of malicious software. We secure your system, recover hijacked files, and install proactive defenses.",
    icon: ShieldAlert,
    features: [
      "Deep system security scans",
      "Ransomware & spyware removal",
      "Browser hijacker cleanup",
      "Premium antivirus installation",
    ],
  },
  {
    id: "remote",
    title: "Remote Troubleshooting",
    description: "Instant, hassle-free IT support over the internet. Most software issues can be resolved without you ever leaving your desk.",
    icon: Headset,
    features: [
      "Software installation & setup",
      "OS tune-ups & speed optimization",
      "Email configuration & troubleshooting",
      "Driver updates & conflict resolution",
    ],
  },
  {
    id: "data",
    title: "Data Recovery",
    description: "Accidentally deleted files or a failing hard drive? We use advanced tools to recover your critical data safely and securely.",
    icon: DatabaseBackup,
    features: [
      "Deleted file & photo recovery",
      "Failing HDD/SSD data extraction",
      "Corrupted partition restoration",
      "Automated backup solutions setup",
    ],
  },
  {
    id: "network",
    title: "Network Setup",
    description: "Reliable internet is crucial. We design, configure, and troubleshoot wired and wireless networks for peak performance.",
    icon: Wifi,
    features: [
      "Wi-Fi dead zone elimination",
      "Router & modem configuration",
      "Secure guest network setup",
      "Cable management & infrastructure",
    ],
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Strategic tech solutions for small businesses. We act as your outsourced IT department so you can focus on growth.",
    icon: Briefcase,
    features: [
      "Office tech infrastructure setup",
      "Security & compliance audits",
      "Hardware procurement advice",
      "Ongoing maintenance contracts",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10 text-center flex flex-col items-center">
          <Sparkle className="text-primary w-12 h-12 mb-6 opacity-80" />
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.02em] text-primary mb-6">
            <GradientText>OUR EXPERTISE</GradientText>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            From emergency data recovery to full-scale office network installations, explore our comprehensive suite of IT solutions.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {DETAILED_SERVICES.map((service) => (
              <Card key={service.id} className="h-full group hover:border-subtle/80 transition-colors">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-8 p-4 rounded-full bg-base w-fit border border-subtle">
                    <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <h2 className="font-heading text-3xl text-primary mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="bg-base rounded-2xl border border-subtle p-6 mb-8 flex-1">
                    <h3 className="text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-sm text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full group/btn bg-primary text-base hover:bg-primary/90" asChild>
                    <Link href={`https://wa.me/message/your-number?text=Hi, I'm interested in the ${service.title} service.`} target="_blank" rel="noopener noreferrer">
                      Request this service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </>
  )
}
