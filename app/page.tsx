"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, MapPin, Globe, BarChart3, ArrowRight } from "lucide-react"
import { LeadQuiz } from "@/components/lead-quiz"

const WA_LINK =
  "https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"

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

export default function HomePage() {
  const [quizOpen, setQuizOpen] = useState(false)
  
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
            <Link href="#exemplos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Exemplos</Link>
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
        <section className="py-10 md:py-24">
          <div className="container px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Coluna Esquerda - Texto */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Sua clínica pode estar <span className="text-[hsl(220,100%,60%)]">perdendo pacientes no Google</span>
                </h1>
                
                <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Estruturamos sua presença digital para transformar o Google em uma máquina de atrair pacientes particulares.
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
                    className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-semibold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white shadow-lg hover:shadow-xl transition-all animate-pulse"
                  >
                    QUERO ATRAIR MAIS PACIENTES
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </div>

              {/* Coluna Direita - Imagem */}
              <div className="w-full flex justify-center lg:justify-end">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20de%20mar.%20de%202026%2C%2012_58_26-S36pFucE59wPhljM68HhdZaeuaMpFj.png"
                  alt="Médico utilizando smartphone com elementos digitais"
                  className="w-full max-w-xs md:max-w-md lg:max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SEÇÃO MÉTODO ── */}
        <section id="metodo" className="py-16 md:py-32 bg-slate-50">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                A base do marketing para clínicas começa aqui
              </h2>
              <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A maioria das clínicas investe em marketing sem antes construir a estrutura digital correta. Sem essa base, pacientes encontram sua clínica no Google mas não sentem confiança para agendar.
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
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Google Meu Negócio</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Transformamos seu perfil no Google na verdadeira fachada digital da sua clínica.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 - Site Profissional */}
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Site Profissional</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Criamos um site estratégico que transmite autoridade e aumenta a confiança do paciente.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 - Estrutura Digital */}
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Estrutura Digital</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Organizamos toda sua presença digital para que ela funcione como um sistema de atração de pacientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── 3. SEÇÃO PROBLEMA ── */}
        <section id="problema" className="py-16 md:py-32 bg-white">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Por que muitas clínicas não conseguem atrair pacientes no digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 md:mb-2">Perfil do Google mal estruturado</h3>
                  <p className="text-sm md:text-base text-slate-600">Sem fotos profissionais, horários desatualizados e sem avaliações organizadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 md:mb-2">Falta de site profissional</h3>
                  <p className="text-sm md:text-base text-slate-600">Instagram não transmite autoridade suficiente para decisões médicas importantes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 md:mb-2">Dependência de convênios</h3>
                  <p className="text-sm md:text-base text-slate-600">Consultórios que não aparecem bem no Google perdem oportunidades de pacientes particulares.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 md:mb-2">Presença digital desorganizada</h3>
                  <p className="text-sm md:text-base text-slate-600">Informações desencontradas entre Google, redes sociais e outros canais.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. EXEMPLOS ── */}
        <section id="exemplos" className="py-16 md:py-32 bg-slate-50">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Exemplos de estruturas que criamos
              </h2>
              <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                Sites profissionais criados para diferentes especialidades médicas
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-0">
                <div className="aspect-video relative bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl md:text-6xl">🏥</div>
                  </div>
                </div>
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 text-slate-900">Cirurgia Plástica</h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-4 hidden md:block">
                    Protocolo Premium focado em transmitir luxo e segurança
                  </p>
                  <Link href="/demo/plastic-surgery" className="w-full">
                    <Button variant="outline" className="w-full text-xs md:text-sm h-8 md:h-10">Ver Demo</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-0">
                <div className="aspect-video relative bg-gradient-to-br from-teal-50 to-teal-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl md:text-6xl">🦷</div>
                  </div>
                </div>
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 text-slate-900">Implantes Dentários</h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-4 hidden md:block">
                    Protocolo Sorriso focado em tecnologia e conforto
                  </p>
                  <Link href="/demo/dental-implants" className="w-full">
                    <Button variant="outline" className="w-full text-xs md:text-sm h-8 md:h-10">Ver Demo</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-0">
                <div className="aspect-video relative bg-gradient-to-br from-purple-50 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl md:text-6xl">✨</div>
                  </div>
                </div>
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 text-slate-900">Dermatologia</h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-4 hidden md:block">
                    Protocolo Glow focado em beleza e autoestima
                  </p>
                  <Link href="/demo/dermatology" className="w-full">
                    <Button variant="outline" className="w-full text-xs md:text-sm h-8 md:h-10">Ver Demo</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-0">
                <div className="aspect-video relative bg-gradient-to-br from-green-50 to-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl md:text-6xl">🧠</div>
                  </div>
                </div>
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 text-slate-900">Psicologia</h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-4 hidden md:block">
                    Protocolo Equilíbrio focado em acolhimento
                  </p>
                  <Link href="/demo/psychology" className="w-full">
                    <Button variant="outline" className="w-full text-xs md:text-sm h-8 md:h-10">Ver Demo</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── 5. CTA FINAL ── */}
        <section className="py-16 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-5 md:space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Descubra como sua clínica aparece no Google
            </h2>
            <p className="text-sm md:text-xl text-slate-300 max-w-2xl mx-auto">
              Receba uma análise da presença digital da sua clínica e descubra onde você pode estar perdendo pacientes.
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
              QUERO ATRAIR MAIS PACIENTES
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
