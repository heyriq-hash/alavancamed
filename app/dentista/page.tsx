"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, MapPin, Globe, BarChart3, ArrowRight, Star } from "lucide-react"
import { LeadQuiz } from "@/components/lead-quiz"

const WA_LINK =
  "https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20(p%C3%A1gina%20dentista)%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"

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

function LogoSvg() {
  return (
    <svg width="40" height="32" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 80 L60 80 L75 40 L90 120 L105 60 L120 80 L140 80" stroke="hsl(220, 100%, 60%)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M150 90 L170 70 L185 85 L200 60 L220 40" stroke="hsl(145, 80%, 45%)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M220 40 L220 55 M220 40 L205 40" stroke="hsl(145, 80%, 45%)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function DentistaPage() {
  const [quizOpen, setQuizOpen] = useState(false)
  
  // Dispara eventos do Pixel ao carregar a pagina
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      // Dispara PageView para garantir rastreamento em navegacao SPA
      window.fbq("track", "PageView")
      
      // Dispara ViewContent especifico para segmentacao de dentistas
      window.fbq("track", "ViewContent", {
        content_name: "Dentista",
        content_category: "Landing Page Dentista"
      })
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Quiz Modal */}
      <LeadQuiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />

      {/* Header */}
      <header className="w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <LogoSvg />
            <span className="font-bold text-xl text-slate-900">AlavancaMed</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#metodo" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Método</Link>
            <Link href="#problema" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Por que usar</Link>
          </nav>
          
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button 
              onClick={trackWhatsAppClick}
              className="bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white font-semibold animate-pulse"
            >
              Falar com Especialista
            </Button>
          </a>
        </div>
      </header>

      <main>

        {/* ── 1. HERO SECTION ── */}
        <section className="relative min-h-[500px] md:min-h-[700px] flex items-center py-10 md:py-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/dentista-hero.png" 
              alt="Dentista profissional em consultório odontológico"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay escuro para legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 md:from-slate-900/90 md:via-slate-900/70 md:to-transparent" />
          </div>
          
          {/* Content */}
          <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Seu consultório odontológico pode estar <span className="text-[hsl(145,80%,45%)]">perdendo pacientes particulares no Google</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-slate-200 leading-relaxed">
                Estruturamos sua presença digital para que pacientes que buscam dentista na sua região encontrem você primeiro.
              </p>
              
              <div className="pt-2 md:pt-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    if (typeof window !== "undefined" && window.fbq) {
                      window.fbq("trackCustom", "Click_Analise")
                    }
                    setQuizOpen(true)
                  }}
                  className="w-full sm:w-auto h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white shadow-lg hover:shadow-xl transition-all animate-pulse"
                >
                  Ver como apareço no Google
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              
              {/* Prova Social */}
              <div className="flex items-center gap-2 pt-1 md:pt-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-xs md:text-sm text-slate-300">Mais de 120 avaliações 5 estrelas estruturadas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ANTES E DEPOIS ── */}
        <section className="pt-10 pb-16 md:pt-10 md:pb-20 bg-white">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            
            {/* Título da seção */}
            <div className="text-center pb-6 md:pb-8">
              <span className="text-xs font-bold text-green-600 tracking-wider uppercase">RESULTADO REAL</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-3">
                A diferença entre perder e atrair pacientes todos os dias
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
                Veja o impacto direto de um perfil estruturado vs um perfil abandonado no Google — e o que isso representa em pacientes particulares perdidos.
              </p>
            </div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_44px_1fr] gap-4 md:gap-2 items-start">
              
              {/* IMAGEM ANTES */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Badge ANTES */}
                <div className="absolute top-3 left-3 z-10 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                  ANTES
                </div>
                <img 
                  src="/images/dentista-antes.png" 
                  alt="Perfil Google Meu Negócio antes - abandonado com poucas avaliações"
                  className="w-full min-h-[340px] md:h-[420px] object-cover object-top rounded-xl"
                />
              </div>

              {/* SETA */}
              <div className="hidden md:flex flex-col items-center justify-center gap-2 h-[420px]">
                <div className="w-0.5 flex-1 bg-slate-200" />
                <span className="text-2xl text-slate-400">→</span>
                <div className="w-0.5 flex-1 bg-slate-200" />
              </div>
              
              {/* Mobile Arrow */}
              <div className="md:hidden flex justify-center py-2">
                <span className="text-2xl text-slate-400">↓</span>
              </div>

              {/* IMAGEM DEPOIS */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Badge DEPOIS */}
                <div className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                  DEPOIS
                </div>
                <img 
                  src="/images/dentista-depois.png" 
                  alt="Perfil Google Meu Negócio depois - estruturado com 120 avaliações"
                  className="w-full min-h-[340px] md:h-[420px] object-cover object-top rounded-xl"
                />
              </div>
            </div>

            {/* Bottom Text + Pills */}
            <div className="mt-8 text-center p-4 md:p-5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-medium text-sm md:text-base text-slate-900 mb-4">
                É exatamente isso que estruturamos para o seu consultório
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200">
                  Google Meu Negócio completo
                </span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200">
                  Site profissional
                </span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200">
                  Fotos da clínica organizadas
                </span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200">
                  Avaliações reais
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. SEÇÃO PROBLEMA ── */}
        <section id="problema" className="py-12 md:py-32 bg-white">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Por que dentistas perdem pacientes no digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Perfil do Google incompleto</h3>
                  <p className="text-xs md:text-base text-slate-600">Pacientes buscam "dentista perto de mim" e escolhem quem tem mais fotos e avaliações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Site que não transmite confiança</h3>
                  <p className="text-xs md:text-base text-slate-600">Instagram não convence para procedimentos de alto valor. Paciente precisa de autoridade.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Dependência de indicação</h3>
                  <p className="text-xs md:text-base text-slate-600">Indicação é ótima, mas não é escalável. Você precisa de um sistema constante.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Concorrência mais visível</h3>
                  <p className="text-xs md:text-base text-slate-600">Outro dentista aparece primeiro porque tem estrutura digital organizada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SEÇÃO MÉTODO ── */}
        <section id="metodo" className="py-12 md:py-32 bg-slate-50">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                A base do marketing odontológico começa aqui
              </h2>
              <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Organizamos sua estrutura digital para transformar sua presença no Google em um sistema de atração de pacientes particulares.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              
              {/* Card 1 - Google Meu Negócio */}
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Google Meu Negócio</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Perfil com fotos profissionais, avaliações organizadas e descrição estratégica.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 - Site Profissional */}
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Site Profissional</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Transmite autoridade para quem decide entre você e outro dentista.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 - Estrutura Digital */}
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Estrutura Digital Completa</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Sistema de atração de pacientes que funciona 24 horas por dia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── 5. CTA FINAL ── */}
        <section className="py-12 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
              Descubra como seu consultório aparece no Google
            </h2>
            <p className="text-sm md:text-xl text-slate-300 max-w-2xl mx-auto">
              Receba uma análise gratuita e veja o que está travando novos pacientes.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("trackCustom", "Click_Analise")
                }
                setQuizOpen(true)
              }}
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-10 text-sm md:text-base font-semibold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white shadow-xl hover:shadow-2xl transition-all animate-pulse"
            >
              Quero minha análise gratuita
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <LogoSvg />
              <span className="font-bold text-xl">AlavancaMed</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors text-sm"
                onClick={() => trackWhatsAppClick()}
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/estrategista.henrique/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm space-y-2">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} AlavancaMed. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-500">CNPJ: 30.391.800/0001-41</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
