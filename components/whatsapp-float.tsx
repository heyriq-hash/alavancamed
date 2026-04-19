"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export function WhatsAppFloat() {
  const phoneNumber = "5511962476012"
  const message = encodeURIComponent("Olá, vim pelo site da AlavancaMed e gostaria de solicitar a análise gratuita da minha presença no Google.\nMeu nome é:")

  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "CliqueWhatsApp")
    }
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      onClick={handleClick}
    >
      <Button size="icon" className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
        <MessageCircle className="h-8 w-8 text-white" />
        <span className="sr-only">Fale conosco no WhatsApp</span>
      </Button>
    </a>
  )
}
