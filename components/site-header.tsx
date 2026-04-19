"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, TrendingUp, Menu, X } from "lucide-react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "CliqueWhatsApp")
  }
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-slate-900 hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center">
            <Activity className="h-6 w-6 text-blue-600" />
            <TrendingUp className="h-4 w-4 text-green-500 -ml-1" />
          </div>
          <span>AlavancaMed</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 justify-center items-center">
          <Link href="/servicos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Serviços
          </Link>
          <Link href="/#como-funciona" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Como Funciona
          </Link>
          <Link href="/#demos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Exemplos
          </Link>

        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex justify-end">
          <a
            href="https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
          >
            <Button>Falar com Especialista</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link
            href="/servicos"
            className="text-lg font-medium p-2 hover:bg-slate-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link
            href="/#como-funciona"
            className="text-lg font-medium p-2 hover:bg-slate-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </Link>
          <Link
            href="/#demos"
            className="text-lg font-medium p-2 hover:bg-slate-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Exemplos
          </Link>
          <a
            href="https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2"
            onClick={trackWhatsAppClick}
          >
            <Button className="w-full">Falar com Especialista</Button>
          </a>
        </div>
      )}
    </header>
  )
}
