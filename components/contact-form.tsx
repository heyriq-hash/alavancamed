"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

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

export function ContactForm({
  title = "Agende sua Consulta",
  description = "Preencha os dados abaixo e nossa equipe entrará em contato em instantes.",
}: { title?: string; description?: string }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackWhatsAppClick()
    const phoneNumber = "5511945455842" // Updated phone number
    const text = encodeURIComponent(`*Novo Lead do Site*\n\nNome: ${name}\nWhatsApp: ${phone}\nMensagem: ${message}`)
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank")
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nome Completo
            </label>
            <Input id="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              WhatsApp
            </label>
            <Input
              id="phone"
              placeholder="(11) 99999-9999"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Como podemos ajudar?
            </label>
            <Textarea
              id="message"
              placeholder="Gostaria de saber mais sobre..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Enviar via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
