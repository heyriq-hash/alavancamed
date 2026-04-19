"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ArrowRight, CheckCircle2, Loader2, Lock, MessageCircle } from "lucide-react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

interface LeadData {
  nome: string
  whatsapp: string
  instagram: string
}

interface LeadQuizProps {
  isOpen: boolean
  onClose: () => void
  headline?: string
  subtitle?: string
  bullets?: string[]
}

export function LeadQuiz({ 
  isOpen, 
  onClose,
  headline = "Descubra por que pacientes escolhem sua concorrencia no Google",
  subtitle = "Preencha abaixo e entro em contato para fazer sua analise ao vivo — sem custo e sem compromisso.",
  bullets = [
    "Diagnostico rapido da sua presenca no Google",
    "Identificacao dos pontos que travam novos pacientes",
    "Retorno direto no WhatsApp"
  ]
}: LeadQuizProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [data, setData] = useState<LeadData>({
    nome: "",
    whatsapp: "",
    instagram: ""
  })

  const trackStandardEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName)
    }
  }

  const trackCustomEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", eventName)
    }
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    const limited = numbers.slice(0, 11)
    
    if (limited.length <= 2) {
      return limited
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setData(prev => ({ ...prev, whatsapp: formatted }))
  }

  // PASSO 1: Enviar formulario -> dispara APENAS Lead
  const handleSubmit = async () => {
    if (!data.nome.trim() || !data.whatsapp.trim()) {
      setError("Por favor, preencha nome e WhatsApp")
      return
    }

    const phoneNumbers = data.whatsapp.replace(/\D/g, "")
    if (phoneNumbers.length !== 11) {
      setError("WhatsApp invalido. Digite DDD + 9 digitos.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const payload = {
        data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        nome: data.nome,
        whatsapp: data.whatsapp,
        segmento: "",
        temSite: "",
        google: "",
        querPacientes: "",
        instagram: data.instagram || ""
      }
      
      await fetch("https://script.google.com/macros/s/AKfycbx5YrHC5bLeMYKujpqvj02RvFgg_rZTWgQHNMg1IE7LR-MqY10qugz5ILfu7UEn3K9A/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      // Dispara APENAS Lead
      trackStandardEvent("Lead")
      
      // Avanca para etapa 2
      setStep(2)
      
    } catch (err) {
      setError("Erro ao enviar. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  // PASSO 2: Click no WhatsApp -> dispara APENAS CliqueWhatsApp
  const handleWhatsAppClick = () => {
    // Dispara APENAS CliqueWhatsApp
    trackCustomEvent("CliqueWhatsApp")
    
    const message = encodeURIComponent(
      `Ola! Meu nome e ${data.nome} e quero receber a analise gratuita da minha clinica no Google.`
    )
    window.open(`https://wa.me/5511962476012?text=${message}`, "_blank")
    resetForm()
  }

  const resetForm = () => {
    setData({ nome: "", whatsapp: "", instagram: "" })
    setStep(1)
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay com blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={resetForm}
      />
      
      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 sm:zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Botao fechar */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>

        {/* ETAPA 1 - FORMULARIO */}
        {step === 1 && (
          <div className="p-4 sm:p-5 md:p-6">
            
            {/* TITULO */}
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 text-center leading-tight pr-6">
              {headline}
            </h2>
            
            {/* SUBTITULO */}
            <p className="text-slate-600 text-center mt-2 text-sm">
              {subtitle}
            </p>

            {/* BULLETS DE CONFIANCA */}
            <div className="flex flex-col items-start gap-1 sm:gap-1.5 mt-3 text-xs sm:text-sm text-slate-700">
              {bullets.map((bullet, index) => (
                <span key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[hsl(145,80%,38%)] shrink-0" />
                  {bullet}
                </span>
              ))}
            </div>

            {/* FORMULARIO */}
            <div className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
              <Input
                type="text"
                placeholder="Seu nome"
                value={data.nome}
                onChange={(e) => setData(prev => ({ ...prev, nome: e.target.value }))}
                className="h-10 sm:h-11 text-sm sm:text-base rounded-xl border-slate-200 focus:border-[hsl(145,80%,38%)] focus:ring-[hsl(145,80%,38%)]"
              />
              <Input
                type="tel"
                placeholder="(11) 99999-9999"
                value={data.whatsapp}
                onChange={handlePhoneChange}
                maxLength={16}
                className="h-10 sm:h-11 text-sm sm:text-base rounded-xl border-slate-200 focus:border-[hsl(145,80%,38%)] focus:ring-[hsl(145,80%,38%)]"
              />
            </div>

            {/* Erro */}
            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}

            {/* MICRO URGENCIA */}
            <p className="text-center text-xs text-amber-600 font-medium mt-3 flex items-center justify-center gap-1">
              Analise limitada por agenda diaria
            </p>

            {/* BOTAO CTA */}
            <Button 
              size="lg"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white mt-3 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse disabled:animate-none"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Quero minha analise gratuita
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </>
              )}
            </Button>

            {/* SEGURANCA */}
            <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
              <Lock className="h-3.5 w-3.5" />
              Seus dados estao seguros. Atendimento rapido e direto.
            </p>

          </div>
        )}

        {/* ETAPA 2 - CONFIRMACAO + WHATSAPP */}
        {step === 2 && (
          <div className="p-4 sm:p-5 md:p-6">
            
            {/* TITULO COM CHECK */}
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(145,80%,38%)]" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                Tudo certo! Vou te chamar agora.
              </h2>
            </div>
            
            {/* TEXTO PERSUASIVO */}
            <p className="text-slate-600 text-center text-xs sm:text-sm md:text-base leading-relaxed">
              Vou entrar em contato pelo WhatsApp agora para fazer sua analise ao vivo — leva menos de 10 minutos.
            </p>

            {/* ELEMENTOS DE VALOR */}
            <div className="bg-slate-50 rounded-xl p-3 sm:p-4 mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[hsl(145,80%,38%)] shrink-0" />
                Diagnostico direto da sua presenca
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[hsl(145,80%,38%)] shrink-0" />
                Pontos que podem estar travando novos pacientes
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[hsl(145,80%,38%)] shrink-0" />
                Orientacao pratica para melhorar
              </div>
            </div>

            {/* BOTAO WHATSAPP */}
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full h-12 sm:h-14 text-sm sm:text-base md:text-lg font-semibold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white mt-4 sm:mt-5 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ver minha analise no WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* TEXTO DE APOIO */}
            <p className="text-center text-xs text-slate-400 mt-3">
              Atendimento rapido e direto
            </p>

          </div>
        )}
      </div>
    </div>
  )
}
