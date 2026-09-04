"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight, MonitorSmartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-subtle pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <Link href="/" className="flex items-center gap-2 group mb-6">
                <MonitorSmartphone className="w-6 h-6 text-primary" />
                <span className="font-heading text-2xl tracking-wide text-primary">
                  KK REMOTE SOLUTIONS
                </span>
              </Link>
              <p className="text-secondary max-w-sm leading-relaxed">
                Expert IT solutions for homes and small businesses in Sri Lanka. Fast, reliable, and secure.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-base border border-subtle text-primary">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Call or WhatsApp</h4>
                  <p className="text-secondary">+94 75 5486 826</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-base border border-subtle text-primary">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Email Us</h4>
                  <p className="text-secondary">support@kksolutions.online</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-base border border-subtle text-primary">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Service Area</h4>
                  <p className="text-secondary">On-site in Colombo & Suburbs<br/>Remote Support Islandwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Placeholder */}
          <div className="bg-base border border-subtle rounded-[24px] p-8 md:p-10 relative overflow-hidden">
            <h3 className="font-heading text-3xl tracking-tight text-primary mb-6">SEND US A MESSAGE</h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full rounded-xl border border-subtle px-4 py-3 bg-card text-primary placeholder:text-tertiary focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  title="Please enter a valid email address"
                  className="w-full rounded-xl border border-subtle px-4 py-3 bg-card text-primary placeholder:text-tertiary focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  pattern="^(?:0|\+94)[0-9]{9}$"
                  title="Please enter a valid 10-digit phone number (e.g. 0771234567 or +94771234567)"
                  className="w-full rounded-xl border border-subtle px-4 py-3 bg-card text-primary placeholder:text-tertiary focus:outline-none focus:border-primary transition-colors"
                  placeholder="07X XXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="issue" className="block text-[11px] font-medium tracking-[0.15em] text-tertiary uppercase mb-2">Describe Your Issue</label>
                <textarea 
                  id="issue" 
                  rows={4}
                  required
                  className="w-full rounded-xl border border-subtle px-4 py-3 bg-card text-primary placeholder:text-tertiary focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="E.g., Laptop won't turn on..."
                />
              </div>
              
              <Button type="submit" className="w-full mt-2 group">
                Submit Request
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-center text-tertiary mt-2">
                We typically reply within 1 hour during business hours.
              </p>
            </form>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-tertiary">
          <p>© {new Date().getFullYear()} KK Remote Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
