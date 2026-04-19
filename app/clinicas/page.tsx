"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Users, TrendingUp, Award, ArrowRight, Phone, Mail, User, Stethoscope } from "lucide-react"

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

export default function ClinicasLeadPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    especialidade: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rastrear evento do pixel
    trackWhatsAppClick()
    
    // Enviar para WhatsApp
    const mensagem = `*Nova Lead - Clínicas*%0A%0A*Nome:* ${formData.nome}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A*Especialidade:* ${formData.especialidade}`
    
    window.open(`https://wa.me/5511962476012?text=${mensagem}`, "_blank")
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header minimalista */}
      <header className="border-b bg-background py-4">
        <div className="container px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="24" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 80 L60 80 L75 40 L90 120 L105 60 L120 80 L140 80"
                stroke="hsl(220, 100%, 60%)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M150 90 L170 70 L185 85 L200 60 L200 60 L220 40"
                stroke="hsl(145, 80%, 45%)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M220 40 L220 55 M220 40 L205 40"
                stroke="hsl(145, 80%, 45%)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="font-bold text-lg">AlavancaMed</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              Especialistas em Estruturação Digital para Clínicas
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Sua clínica invisível no Google?{" "}
              <span className="text-primary">Isso acaba hoje.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubra como médicos, dentistas e psicólogos estão atraindo +30 pacientes particulares por mês
              sem depender de convênios ou indicações.
            </p>

            {/* Prova Social */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span>
                <strong className="text-foreground">+127 clínicas</strong> já estruturaram sua presença digital
                conosco
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-xl mx-auto">
          {!submitted ? (
            <Card className="shadow-xl border-2">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Receba uma Análise Gratuita</h2>
                  <p className="text-muted-foreground">
                    Vamos mostrar exatamente o que está impedindo sua clínica de aparecer no Google
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nome" className="text-sm font-medium">
                      Nome completo *
                    </Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Dr(a). Seu Nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-mail profissional *
                    </Label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-sm font-medium">
                      WhatsApp *
                    </Label>
                    <div className="relative mt-1.5">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="especialidade" className="text-sm font-medium">
                      Especialidade *
                    </Label>
                    <div className="relative mt-1.5">
                      <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="especialidade"
                        type="text"
                        placeholder="Ex: Dermatologia, Odontologia, Psicologia..."
                        required
                        value={formData.especialidade}
                        onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base font-bold bg-[hsl(145,80%,38%)] hover:bg-[hsl(145,80%,32%)] text-white animate-[pulse_1s_ease-in-out_infinite] hover:animate-none shadow-lg mt-6"
                  >
                    Quero Minha Análise Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Seus dados estão seguros. Não compartilhamos com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl border-2 border-green-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Cadastro Recebido!</h2>
                <p className="text-muted-foreground mb-4">
                  Em breve entraremos em contato pelo WhatsApp para agendar sua análise gratuita.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Cadastrar Outra Clínica
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">O que você vai descobrir na análise</h2>
            <p className="text-muted-foreground text-lg">
              Vamos revelar exatamente onde sua clínica está perdendo pacientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Posição no Google",
                description:
                  "Veja como sua clínica aparece (ou não aparece) quando pacientes buscam por seus serviços na região",
              },
              {
                icon: Users,
                title: "Análise de Concorrentes",
                description:
                  "Descubra o que clínicas concorrentes estão fazendo para atrair mais pacientes particulares",
              },
              {
                icon: Award,
                title: "Plano Personalizado",
                description:
                  "Receba um roteiro customizado com os 3 primeiros passos para estruturar sua presença digital",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Esses problemas são familiares?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Sua clínica não aparece quando pacientes buscam no Google",
              "Consultório vazio em horários que poderiam estar gerando receita",
              "Dependência total de convênios com valores baixos",
              "Falta de pacientes particulares dispostos a pagar pelo seu trabalho",
              "Concorrentes com clínicas menores atraindo mais pacientes",
              "Dificuldade em se posicionar como referência na região",
            ].map((problema, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">{problema}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Está pronto para transformar sua presença digital?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Preencha o formulário acima e receba sua análise gratuita em até 24 horas.
          </p>
          <Button
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-primary hover:bg-gray-100 h-12 px-8 text-base font-bold"
          >
            Quero Minha Análise Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t bg-secondary/20">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlavancaMed. Todos os direitos reservados.</p>
          <p className="mt-1 text-xs">CNPJ: 30.391.800/0001-41</p>
        </div>
      </footer>
    </div>
  )
}
