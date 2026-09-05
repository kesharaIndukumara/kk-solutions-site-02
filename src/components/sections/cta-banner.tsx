"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sparkle } from "@/components/icons/sparkle"

export function CtaBanner() {
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="bg-gradient-metal rounded-[24px] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          
          <Sparkle className="absolute top-8 left-12 text-base opacity-20 w-16 h-16" />
          <Sparkle className="absolute bottom-8 right-12 text-base opacity-10 w-24 h-24" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-base mb-6">
              READY TO GET YOUR TECH SORTED?
            </h2>
            <p className="text-base/80 text-lg md:text-xl mb-10 max-w-lg">
              Whether you need urgent remote support or an on-site hardware repair, our experts are ready to help.
            </p>
            <Button size="lg" className="group bg-base text-primary hover:bg-base/90" asChild>
              <Link href="https://wa.me/94755486826?text=Hello!%20I%20need%20some%20help%20with%20my%20computer." target="_blank" rel="noopener noreferrer">
                WhatsApp Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
