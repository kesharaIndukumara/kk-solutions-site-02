"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, MonitorSmartphone, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { Sparkle } from "@/components/icons/sparkle"
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <Badge pulsing className="w-fit">
              AVAILABLE FOR REMOTE SUPPORT
            </Badge>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-primary">
              FAST, RELIABLE<br />
              <GradientText>COMPUTER REPAIR</GradientText>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
              Expert IT solutions for homes and small businesses in Sri Lanka. From data recovery to network setup, we get you back online quickly and securely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="group" asChild>
                <Link href="#contact">
                  Book a Repair
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href={"/services"} >
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-tertiary" />
                <span className="text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase">No Fix, No Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-tertiary" />
                <span className="text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase">Same Day Service</span>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto hidden md:block"
          >
            <Sparkle className="absolute -top-12 -left-12 text-primary opacity-20 w-24 h-24" />
            <Sparkle className="absolute -bottom-8 -right-8 text-primary opacity-10 w-16 h-16" />
            
            <div className="aspect-[4/5] bg-card rounded-[24px] p-8 border border-subtle shadow-2xl relative flex flex-col items-center justify-center">
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-12 bg-card p-4 rounded-[16px] shadow-xl flex items-center gap-4 border border-subtle"
              >
                <div className="bg-base p-3 rounded-full text-primary">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Hardware Fix</p>
                  <p className="text-[11px] text-tertiary uppercase tracking-wide mt-1">Done in 2 hrs</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-12 bg-card p-4 rounded-[16px] shadow-xl flex items-center gap-4 border border-subtle z-20"
              >
                <div className="bg-base p-3 rounded-full text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Virus Removal</p>
                  <p className="text-[11px] text-tertiary uppercase tracking-wide mt-1">100% Secured</p>
                </div>
              </motion.div>

              {/* Central abstract laptop/screen */}
              <div className="w-full max-w-[240px] h-[160px] bg-base rounded-[16px] border border-subtle flex flex-col overflow-hidden relative shadow-inner">
                <div className="h-6 border-b border-subtle bg-card/50 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-subtle" />
                  <div className="w-2 h-2 rounded-full bg-subtle" />
                  <div className="w-2 h-2 rounded-full bg-subtle" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4 items-center justify-center text-center">
                  <MonitorSmartphone className="w-8 h-8 text-tertiary" />
                  <div className="w-full flex flex-col gap-2 items-center">
                    <div className="h-1.5 w-3/4 bg-subtle rounded-full" />
                    <div className="h-1.5 w-1/2 bg-subtle rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
