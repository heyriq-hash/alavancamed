"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, MapPin, Globe, BarChart3, ArrowRight, Star } from "lucide-react"
import { LeadQuiz } from "@/components/lead-quiz"

const WA_LINK =
  "https://wa.me/5511962476012?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AlavancaMed%20(p%C3%A1gina%20est%C3%A9tica)%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20gratuita%20da%20minha%20presen%C3%A7a%20no%20Google.%0AMeu%20nome%20%C3%A9%3A"

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
      <path d="M20 80 L60 80 L75 40 L90 120 L105 60 L120 80 L140 80" stroke="#C9A96E" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M150 90 L170 70 L185 85 L200 60 L220 40" stroke="#D4896A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M220 40 L220 55 M220 40 L205 40" stroke="#D4896A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// Componente de partículas douradas
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    
    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    const particleCount = 60
    const speed = 0.3
    const connectionDistance = 130
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      })
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Atualiza e desenha partículas
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        
        // Bounce nas bordas
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        // Desenha partícula
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(201,169,110,0.5)"
        ctx.fill()
        
        // Conecta partículas próximas
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201,169,110,${0.08 * (1 - dist / connectionDistance)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[1] pointer-events-none" />
}

export default function EsteticaPage() {
  const [quizOpen, setQuizOpen] = useState(false)
  
  // Dispara eventos do Pixel ao carregar a página
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      // Dispara PageView para garantir rastreamento em navegação SPA
      window.fbq("track", "PageView")
      
      // Dispara ViewContent específico para segmentação de estética
      window.fbq("track", "ViewContent", {
        content_name: "Estetica",
        content_category: "Landing Page Estetica"
      })
    }
    
    // Scroll reveal com IntersectionObserver
    const revealElements = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, { threshold: 0.1 })
    
    revealElements.forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <>
      {/* Estilos para animações */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(201,169,110,0.3); color: white; }
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,169,110,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(201,169,110,0); }
        }
        .btn-pulse { animation: pulse-gold 2s infinite; }
      `}</style>
      
      <div className="min-h-screen bg-[#0a0a0a] font-sans">
      
        {/* Quiz Modal */}
        <LeadQuiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />

      {/* Header */}
      <header className="w-full border-b border-[#222] bg-[#0a0a0a]">
        <div className="container flex h-20 items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <LogoSvg />
            <span className="font-bold text-xl text-white">AlavancaMed</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#metodo" className="text-sm font-medium text-[#e8e0d8] hover:text-[#C9A96E] transition-colors">Método</Link>
            <Link href="#problema" className="text-sm font-medium text-[#e8e0d8] hover:text-[#C9A96E] transition-colors">Por que usar</Link>
          </nav>
          
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button 
              onClick={trackWhatsAppClick}
              className="bg-[#C9A96E] hover:bg-[#D4896A] text-black font-semibold rounded-md"
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/664f78c2a7382303585b7ed04b719b77-YZwzZxXxJ1qBMoSD6wZYBbMW3EkJgo.jpg" 
              alt="Clínica de estética avançada com ambiente luxuoso e moderno"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay escuro para legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/50 md:from-[#0a0a0a]/90 md:via-[#0a0a0a]/70 md:to-[#0a0a0a]/30" />
          </div>
          
          {/* Partículas douradas */}
          <GoldParticles />
          
          {/* Content */}
          <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              <p className="inline-block text-[#C9A96E] text-xs md:text-sm font-medium px-3 py-1.5 rounded-md bg-[rgba(201,169,110,0.15)] border border-[#C9A96E]">Para clínicas de estética avançada</p>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua clínica de estética pode estar <span className="text-[#C9A96E]">perdendo pacientes todos os dias no Google</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl text-[#e8e0d8] leading-relaxed">
                Estruturamos sua presença digital para que pacientes que buscam procedimentos estéticos na sua região encontrem você primeiro — e não a concorrência.
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
                  className="btn-pulse w-full sm:w-auto h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold bg-[#C9A96E] hover:bg-[#D4896A] text-black shadow-lg hover:shadow-xl transition-all rounded-md"
                >
                  Ver como apareço no Google
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              
              {/* Prova Social */}
              <div className="flex items-center gap-2 pt-1 md:pt-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-[#C9A96E] fill-[#C9A96E]" />
                <span className="text-xs md:text-sm text-[#e8e0d8]">Mais de 80 clínicas de estética analisadas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ANTES E DEPOIS ── */}
        <section className="pt-10 pb-16 md:pt-10 md:pb-20 bg-[#fafafa]">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            
            {/* Imagem única antes/depois */}
            <div className="reveal rounded-2xl overflow-hidden shadow-xl border border-[#e8e0d8]">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2019_04_2026%2C%2000_34_04-SSvSKYtpDb8pFtd5cAwb4Qm1gClqYU.png" 
                alt="Comparação antes e depois do perfil de estética no Google - antes com 3.7 estrelas sem site e depois com 4.8 estrelas perfil completo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom Text + Pills */}
            <div className="reveal mt-8 text-center p-4 md:p-5 bg-white rounded-xl border border-[#e8e0d8]">
              <p className="font-medium text-sm md:text-base text-[#0a0a0a] mb-4">
                É exatamente isso que estruturamos para a sua clínica
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-[rgba(201,169,110,0.15)] text-[#C9A96E] px-3 py-1.5 rounded-full border border-[#C9A96E]">
                  Google Meu Negócio completo
                </span>
                <span className="text-xs bg-[rgba(201,169,110,0.15)] text-[#C9A96E] px-3 py-1.5 rounded-full border border-[#C9A96E]">
                  Site profissional
                </span>
                <span className="text-xs bg-[rgba(201,169,110,0.15)] text-[#C9A96E] px-3 py-1.5 rounded-full border border-[#C9A96E]">
                  Fotos da clínica organizadas
                </span>
                <span className="text-xs bg-[rgba(201,169,110,0.15)] text-[#C9A96E] px-3 py-1.5 rounded-full border border-[#C9A96E]">
                  Avaliações reais
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. SEÇÃO PROBLEMA ── */}
        <section id="problema" className="py-12 md:py-32 bg-[#fafafa]">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            <div className="reveal text-center space-y-3 mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a]">
                Por que clínicas de estética perdem pacientes no digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              
              <div className="reveal flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#e8e0d8]">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-[#0a0a0a] mb-1 md:mb-2">Perfil do Google abandonado</h3>
                  <p className="text-xs md:text-base text-[#666]">Pacientes buscam "clínica de estética perto de mim" e escolhem quem tem mais fotos, avaliações e informações atualizadas.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#e8e0d8]">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-[#0a0a0a] mb-1 md:mb-2">Site que não transmite confiança</h3>
                  <p className="text-xs md:text-base text-[#666]">Procedimentos estéticos são decisões de alto valor. A paciente pesquisa antes de marcar — e um site fraco faz ela escolher outra clínica.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#e8e0d8]">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-[#0a0a0a] mb-1 md:mb-2">Dependência de indicação</h3>
                  <p className="text-xs md:text-base text-[#666]">Indicação é ótima, mas não é previsível. Você precisa de um sistema digital que atrai pacientes novos todos os dias.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#e8e0d8]">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-[#C9A96E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm md:text-lg text-[#0a0a0a] mb-1 md:mb-2">Concorrência mais visível</h3>
                  <p className="text-xs md:text-base text-[#666]">Outra clínica aparece primeiro no Google porque tem estrutura digital organizada. A sua merece estar nesse lugar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SEÇÃO MÉTODO ── */}
        <section id="metodo" className="py-12 md:py-32 bg-white">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="reveal text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a]">
                A base da atração de pacientes começa aqui
              </h2>
              <p className="text-sm md:text-xl text-[#666] max-w-3xl mx-auto leading-relaxed">
                Organizamos sua estrutura digital para transformar sua presença no Google em um sistema de atração de pacientes particulares.
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              
              {/* Card 1 - Google Meu Negócio */}
              <Card className="reveal bg-[#fafafa] shadow-md hover:shadow-xl transition-shadow border border-[#e8e0d8]">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[rgba(201,169,110,0.15)] flex items-center justify-center">
                    <MapPin className="h-6 w-6 md:h-7 md:w-7 text-[#C9A96E]" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#0a0a0a]">Google Meu Negócio</h3>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed">
                    Perfil com fotos profissionais, avaliações organizadas, descrição estratégica e atualização constante.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 - Site Profissional */}
              <Card className="reveal bg-[#fafafa] shadow-md hover:shadow-xl transition-shadow border border-[#e8e0d8]">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[rgba(201,169,110,0.15)] flex items-center justify-center">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-[#C9A96E]" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#0a0a0a]">Site Profissional</h3>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed">
                    Transmite autoridade e confiança para quem está decidindo entre você e outra clínica.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 - Estrutura Digital */}
              <Card className="reveal bg-[#fafafa] shadow-md hover:shadow-xl transition-shadow border border-[#e8e0d8]">
                <CardContent className="p-5 md:p-8 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[rgba(201,169,110,0.15)] flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-[#C9A96E]" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-[#0a0a0a]">Estrutura Digital Completa</h3>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed">
                    Um sistema de atração que funciona 24 horas por dia, mesmo quando você está atendendo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── 5. CTA FINAL ── */}
        <section className="py-12 md:py-32 bg-[#0a0a0a] text-white">
          <div className="reveal container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
              Descubra como sua clínica aparece no Google agora
            </h2>
            <p className="text-sm md:text-xl text-[#e8e0d8] max-w-2xl mx-auto">
              Receba uma análise gratuita e veja exatamente o que está travando novas pacientes de encontrarem você.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("trackCustom", "Click_Analise")
                }
                setQuizOpen(true)
              }}
              className="btn-pulse w-full sm:w-auto h-12 md:h-14 px-6 md:px-10 text-sm md:text-base font-semibold bg-[#C9A96E] hover:bg-[#D4896A] text-black shadow-xl hover:shadow-2xl transition-all rounded-md"
            >
              Quero minha análise gratuita
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <p className="text-xs md:text-sm text-[#888] pt-2">
              Gratuito · Sem compromisso · Menos de 10 minutos
            </p>
            
            <p className="text-xs text-[#C9A96E] font-medium">Vagas limitadas por semana</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12 border-t border-[#222]">
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
                className="hover:text-[#C9A96E] transition-colors text-sm text-[#e8e0d8]"
                onClick={() => trackWhatsAppClick()}
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/estrategista.henrique/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9A96E] transition-colors text-sm text-[#e8e0d8]"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="border-t border-[#222] mt-8 pt-8 text-center text-sm space-y-2">
            <p className="text-[#888]">&copy; {new Date().getFullYear()} AlavancaMed. Todos os direitos reservados.</p>
            <p className="text-xs text-[#666]">CNPJ: 30.391.800/0001-41</p>
          </div>
        </div>
      </footer>

      </div>
    </>
  )
}
