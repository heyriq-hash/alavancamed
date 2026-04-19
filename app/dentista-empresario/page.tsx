"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, ArrowRight, Star } from "lucide-react"
import { LeadQuiz } from "@/components/lead-quiz"

const WA_LINK =
  "https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20(p%C3%A1gina%20dentista-empresario)%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"

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

export default function DentistaEmpresarioPage() {
  const [quizOpen, setQuizOpen] = useState(false)
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView")
      window.fbq("track", "ViewContent", {
        content_name: "Dentista Empresario",
        content_category: "Landing Page Dentista Empresario"
      })
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-white font-sans">
      
      <LeadQuiz 
        isOpen={quizOpen} 
        onClose={() => setQuizOpen(false)}
        headline="Descubra o que está travando o crescimento da sua clínica"
        subtitle="Preencha abaixo e entro em contato para fazer sua análise ao vivo — sem custo e sem compromisso."
        bullets={[
          "Diagnóstico do momento atual da sua clínica",
          "Identificação dos gargalos que travam seu faturamento",
          "Plano de ação direto no WhatsApp"
        ]}
      />

      {/* Header */}
      <header className="w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-center px-6 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <LogoSvg />
            <span className="font-bold text-xl text-slate-900">AlavancaMed</span>
          </Link>
        </div>
      </header>

      <main>

        {/* ── 1. HERO SECTION ── */}
        <section className="relative min-h-[500px] md:min-h-[700px] flex items-center py-10 md:py-0">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/dentista-empresario-hero.png" 
              alt="Dentista empresário analisando resultados no computador"
              className="w-full h-full object-cover object-[center_20%] md:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 md:from-slate-900/90 md:via-slate-900/70 md:to-transparent" />
          </div>
          
          <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              <p className="text-amber-400 text-xs md:text-sm font-medium">Para dentistas donos de clínica</p>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                A faculdade te fez um ótimo dentista. <span className="text-[hsl(45,80%,55%)]">Mas não te ensinou a gerir uma clínica como empresa.</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-slate-200 leading-relaxed">
                Se você quer previsibilidade e faturamento todo mês — independente de quantas cadeiras você tem — você está no lugar certo.
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
                  className="w-full sm:w-auto h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold bg-[hsl(45,80%,45%)] hover:bg-[hsl(45,80%,40%)] text-slate-900 shadow-lg hover:shadow-xl transition-all animate-pulse"
                >
                  Quero minha análise gratuita
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 pt-1 md:pt-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-xs md:text-sm text-slate-300">Mais de 50 clínicas analisadas em todo Brasil</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ANTES E DEPOIS ── */}
        <section className="pt-10 pb-16 md:pt-10 md:pb-20 bg-white">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            
            <div className="text-center pb-6 md:pb-8">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">TRANSFORMAÇÃO REAL</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-3">
                A diferença entre trabalhar na clínica e ter uma clínica que trabalha para você
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
                Veja o impacto de estruturar sua clínica como empresa — com previsibilidade e faturamento constante.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_44px_1fr] gap-4 md:gap-2 items-start">
              
              {/* Coluna ANTES */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute top-3 left-3 z-10 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-white/80" />
                    ANTES
                  </div>
                  <img 
                    src="/images/dentista-empresario-antes.png" 
                    alt="Dentista sobrecarregado com gestão e faturamento instável"
                    className="w-full min-h-[340px] md:h-[420px] object-cover object-top rounded-xl"
                  />
                </div>
                <div className="space-y-2 px-1">
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-red-500">❌</span>
                    Faturamento imprevisível todo mês
                  </p>
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-red-500">❌</span>
                    Sobrecarregado com gestão e atendimento
                  </p>
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-red-500">❌</span>
                    Sem processo, sem equipe autônoma
                  </p>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center justify-center gap-2 h-[420px]">
                <div className="w-0.5 flex-1 bg-slate-200" />
                <span className="text-2xl text-slate-400">→</span>
                <div className="w-0.5 flex-1 bg-slate-200" />
              </div>
              
              <div className="md:hidden flex justify-center py-2">
                <span className="text-2xl text-slate-400">↓</span>
              </div>

              {/* Coluna DEPOIS */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-white/80" />
                    DEPOIS
                  </div>
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik_successful-brazilian-male_2727835737-DbYL0Fotfcnqfs0dkxIjEZtDZeOPDX.png"
                    alt="Dentista empresário confiante mostrando resultados de gestão no tablet"
                    className="w-full min-h-[340px] md:h-[420px] object-cover object-top rounded-xl"
                  />
                </div>
                <div className="space-y-2 px-1">
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-green-500">✅</span>
                    Meta mensal batida com consistência
                  </p>
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-green-500">✅</span>
                    Clínica funcionando mesmo sem você presente
                  </p>
                  <p className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <span className="text-green-500">✅</span>
                    Equipe alinhada, agenda previsível, lucro real
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center p-4 md:p-5 bg-amber-50 rounded-xl border border-amber-200">
              <p className="font-medium text-sm md:text-base text-slate-900 mb-4">
                É exatamente isso que estruturamos para a sua clínica
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full border border-amber-300">
                  Faturamento previsível
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full border border-amber-300">
                  Clínica funcionando sem você
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full border border-amber-300">
                  Gestão estratégica
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full border border-amber-300">
                  Crescimento escalável
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
                Você se identifica com algum desses cenários?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Trabalha o dia todo mas o lucro some</h3>
                  <p className="text-xs md:text-base text-slate-600">Você atende sem parar, mas no fim do mês não sobra o que deveria.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Depende 100% da sua cadeira</h3>
                  <p className="text-xs md:text-base text-slate-600">Sem você atendendo, a clínica para. Férias? Nem pensar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Sem previsibilidade de faturamento</h3>
                  <p className="text-xs md:text-base text-slate-600">Um mês vai bem, no outro desaba. Impossível planejar crescimento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-50">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">Bom dentista, péssimo empresário</h3>
                  <p className="text-xs md:text-base text-slate-600">A faculdade ensinou técnica, mas não ensinou gestão e marketing.</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm md:text-base text-slate-600 mt-8 max-w-2xl mx-auto">
              Se você marcou pelo menos um, sua clínica ainda não trabalha como empresa. E isso tem solução.
            </p>
          </div>
        </section>

        {/* ── 4. SEÇÃO MÉTODO ── */}
        <section id="metodo" className="py-12 md:py-32 bg-slate-50">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                3 passos para transformar sua clínica em empresa
              </h2>
              <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Método validado para dentistas que querem faturamento previsível todo mês.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-amber-600">01</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Análise Gratuita</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Avaliamos o momento atual da sua clínica sem custo e sem compromisso.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-amber-600">02</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Diagnóstico</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Identificamos os gargalos que estão travando seu crescimento e previsibilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-amber-600">03</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900">Plano de Ação</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Montamos junto com você a estratégia para escalar com previsibilidade de verdade.
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
              Sua clínica pode estar deixando dinheiro na mesa agora
            </h2>
            <p className="text-sm md:text-xl text-slate-300 max-w-2xl mx-auto">
              Garanta sua análise gratuita hoje e descubra o que está travando seu crescimento.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("trackCustom", "Click_Analise")
                }
                setQuizOpen(true)
              }}
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-10 text-sm md:text-base font-semibold bg-[hsl(45,80%,45%)] hover:bg-[hsl(45,80%,40%)] text-slate-900 shadow-xl hover:shadow-2xl transition-all animate-pulse"
            >
              Quero minha análise gratuita
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <p className="text-xs md:text-sm text-slate-400 pt-2">
              Gratuito. Sem compromisso. Em 10 minutos você já sabe o que está travando sua clínica.
            </p>
            
            <p className="text-xs text-amber-400 font-medium">Vagas limitadas por semana</p>
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
