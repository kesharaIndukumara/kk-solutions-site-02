"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, MonitorSmartphone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { AnimatePresence, motion } from "framer-motion"

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/#why-us", label: "ABOUT" },
  { href: "/#contact", label: "CONTACT" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-base/80 backdrop-blur-xl border-subtle"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <MonitorSmartphone className="w-6 h-6 text-primary" />
          <span className="font-heading text-2xl tracking-wide text-primary">
            KK REMOTE SOLUTIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.15em] text-tertiary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-subtle" />
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <Link href="https://wa.me/message/your-number" target="_blank" rel="noopener noreferrer">
              LET'S TALK
            </Link>
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-primary focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-subtle shadow-xl py-6 px-6 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium tracking-[0.15em] text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full">
              <Link href="https://wa.me/message/your-number" target="_blank" rel="noopener noreferrer">
                LET'S TALK
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
