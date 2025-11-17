"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const theme = document.documentElement.getAttribute("data-theme")
    setIsDark(theme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", newTheme)
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <header className="border-b border-gray/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">CM MIX JUNIOR</h1>
          </div>

          {/* Theme toggle button - temporarily commented out */}
          {/* <button
            onClick={toggleTheme}
            className="rounded-lg p-2 hover:bg-gray/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow" />
            ) : (
              <Moon className="h-5 w-5 text-gray" />
            )}
          </button> */}
        </div>
      </div>
    </header>
  )
}
