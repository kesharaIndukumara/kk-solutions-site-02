"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ThemeToggle() {
  const { toggleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center opacity-50" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 absolute transition-all duration-300 dark:-rotate-90 dark:opacity-0 opacity-100 rotate-0" />
      <Moon className="h-4 w-4 absolute transition-all duration-300 dark:rotate-0 dark:opacity-100 opacity-0 rotate-90" />
    </button>
  )
}
