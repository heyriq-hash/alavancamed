"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, Loader2 } from "lucide-react"

const PERGUNTAS = [
  {
    id: "faturamento",
    categoria: "Indicadores Financeiros",
    pergunta: "Qual o faturamento mensal atual da clínica?",
    opcoes: [
      { valor: "ate_30k", texto: "Até R$ 30.000", pontos: 1 },
      { valor: "30k_70k", texto: "R$ 30.000 a R$ 70.000", pontos: 2 },
      { valor: "70k_150k", texto: "R$ 70.000 a R$ 150.000", pontos: 3 },
      { valor: "acima_150k", texto: "Acima de R$ 150.000", pontos: 4 },
    ],
  },
  {
    id: "meta_crescimento",
    categoria: "Indicadores Financeiros",
    pergunta: "Meta de crescimento estabelecida para os próximos 12 meses:",
    opcoes: [
      { valor: "manter", texto: "Manter o faturamento atual", pontos: 1 },
      { valor: "crescer_20", texto: "Crescer até 20%", pontos: 2 },
      { valor: "crescer_50", texto: "Crescer entre 20% e 50%", pontos: 3 },
      { valor: "dobrar", texto: "Dobrar o faturamento ou mais", pontos: 4 },
    ],
  },
  {
    id: "presenca_digital",
    categoria: "Presença Digital",
    pergunta: "Avaliação da maturidade digital atual:",
    opcoes: [
      { valor: "inexistente", texto: "Não tenho site nem redes ativas", pontos: 1 },
      { valor: "basica", texto: "Tenho site básico e redes pouco ativas", pontos: 2 },
      { valor: "moderada", texto: "Site atualizado e redes com postagens regulares", pontos: 3 },
      { valor: "forte", texto: "Presença forte com conteúdo estratégico", pontos: 4 },
    ],
  },
  {
    id: "investimento_marketing",
    categoria: "Investimento em Marketing",
    pergunta: "Investimento mensal atual em marketing digital:",
    opcoes: [
      { valor: "nada", texto: "Não invisto", pontos: 1 },
      { valor: "ate_2k", texto: "Até R$ 2.000", pontos: 2 },
      { valor: "2k_5k", texto: "R$ 2.000 a R$ 5.000", pontos: 3 },
      { valor: "acima_5k", texto: "Acima de R$ 5.000", pontos: 4 },
    ],
  },
  {
    id: "fonte_pacientes",
    categoria: "Canais de Aquisição",
    pergunta: "Principal canal de origem de novos pacientes:",
    opcoes: [
      { valor: "indicacao", texto: "Indicações boca a boca", pontos: 2 },
      { valor: "instagram", texto: "Instagram/Redes sociais", pontos: 3 },
      { valor: "google", texto: "Google (busca orgânica ou anúncios)", pontos: 4 },
      { valor: "nao_sei", texto: "Não sei ao certo", pontos: 1 },
    ],
  },
  {
    id: "leads_mensais",
    categoria: "Volume de Oportunidades",
    pergunta: "Volume de leads/contatos qualificados recebidos mensalmente:",
    opcoes: [
      { valor: "ate_20", texto: "Até 20 leads", pontos: 1 },
      { valor: "20_50", texto: "20 a 50 leads", pontos: 2 },
      { valor: "50_100", texto: "50 a 100 leads", pontos: 3 },
      { valor: "acima_100", texto: "Mais de 100 leads", pontos: 4 },
    ],
  },
  {
    id: "taxa_conversao",
    categoria: "Eficiência Comercial",
    pergunta: "Taxa de conversão de leads em pacientes pagantes:",
    opcoes: [
      { valor: "nao_sei", texto: "Não sei/Não acompanho", pontos: 1 },
      { valor: "ate_10", texto: "Menos de 10%", pontos: 2 },
      { valor: "10_30", texto: "Entre 10% e 30%", pontos: 3 },
      { valor: "acima_30", texto: "Acima de 30%", pontos: 4 },
    ],
  },
  {
    id: "tempo_resposta",
    categoria: "Tempo de Resposta",
    pergunta: "Tempo médio de primeira resposta para novos contatos:",
    opcoes: [
      { valor: "mais_24h", texto: "Mais de 24 horas", pontos: 1 },
      { valor: "12_24h", texto: "12 a 24 horas", pontos: 2 },
      { valor: "1_12h", texto: "1 a 12 horas", pontos: 3 },
      { valor: "menos_1h", texto: "Menos de 1 hora", pontos: 4 },
    ],
  },
  {
    id: "automacao",
    categoria: "Automação e Tecnologia",
    pergunta: "Nível de automação implementado no atendimento:",
    opcoes: [
      { valor: "nao", texto: "Não utilizo nenhuma automação", pontos: 1 },
      { valor: "basica", texto: "Apenas mensagem de ausência", pontos: 2 },
      { valor: "parcial", texto: "Algumas automações simples", pontos: 3 },
      { valor: "avancada", texto: "Sistema completo de automação", pontos: 4 },
    ],
  },
  {
    id: "diferencial",
    categoria: "Posicionamento de Mercado",
    pergunta: "Clareza e força do posicionamento competitivo:",
    opcoes: [
      { valor: "nao", texto: "Não tenho diferencial definido", pontos: 1 },
      { valor: "parcial", texto: "Tenho ideias mas não comunico bem", pontos: 2 },
      { valor: "definido", texto: "Tenho diferencial mas poderia ser mais forte", pontos: 3 },
      { valor: "forte", texto: "Tenho posicionamento único e forte", pontos: 4 },
    ],
  },
  {
    id: "ticket_medio",
    categoria: "Ticket Médio",
    pergunta: "Valor médio dos procedimentos realizados:",
    opcoes: [
      { valor: "ate_500", texto: "Até R$ 500", pontos: 1 },
      { valor: "500_1500", texto: "R$ 500 a R$ 1.500", pontos: 2 },
      { valor: "1500_5000", texto: "R$ 1.500 a R$ 5.000", pontos: 3 },
      { valor: "acima_5000", texto: "Acima de R$ 5.000", pontos: 4 },
    ],
  },
  {
    id: "retencao",
    categoria: "Retenção e LTV",
    pergunta: "Estratégias implementadas para retenção e recompra:",
    opcoes: [
      { valor: "nao", texto: "Não faço nada específico", pontos: 1 },
      { valor: "basico", texto: "Apenas lembro de datas comemorativas", pontos: 2 },
      { valor: "parcial", texto: "Tenho algumas ações mas não estruturadas", pontos: 3 },
      { valor: "estruturado", texto: "Programa estruturado de fidelização", pontos: 4 },
    ],
  },
]

export default function DiagnosticoPage() {
  const router = useRouter()
  const [etapa, setEtapa] = useState<"dados" | "perguntas" | "processando">("dados")
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    nome_clinica: "",
    cidade: "",
  })

  const [respostas, setRespostas] = useState<Record<string, string>>({})

  const progresso = etapa === "dados" ? 0 : ((perguntaAtual + 1) / PERGUNTAS.length) * 100

  const handleDadosSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEtapa("perguntas")
  }

  const handleResposta = (valor: string) => {
    setRespostas((prev) => ({
      ...prev,
      [PERGUNTAS[perguntaAtual].id]: valor,
    }))
  }

  const proximaPergunta = () => {
    if (perguntaAtual < PERGUNTAS.length - 1) {
      setPerguntaAtual((prev) => prev + 1)
    }
  }

  const perguntaAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual((prev) => prev - 1)
    }
  }

  const finalizarDiagnostico = async () => {
    setIsSubmitting(true)
    setEtapa("processando")

    try {
      const response = await fetch("/api/diagnostico/criar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...dados,
          respostas,
        }),
      })

      const result = await response.json()

      if (result.success) {
        router.push(`/diagnostico/checkout?id=${result.diagnosticoId}`)
      } else {
        alert("Erro ao processar diagnóstico. Tente novamente.")
        setEtapa("perguntas")
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Erro ao processar diagnóstico. Tente novamente.")
      setEtapa("perguntas")
    } finally {
      setIsSubmitting(false)
    }
  }

  const perguntaRespondida = respostas[PERGUNTAS[perguntaAtual]?.id]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-teal-600" />
            <span className="font-bold text-xl">AlavancaMed</span>
          </div>
          <div className="text-sm text-muted-foreground">Diagnóstico Estratégico com IA</div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Barra de Progresso */}
        {etapa !== "dados" && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progresso</span>
              <span>{Math.round(progresso)}%</span>
            </div>
            <Progress value={progresso} className="h-2" />
          </div>
        )}

        {/* Etapa: Dados Iniciais */}
        {etapa === "dados" && (
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-3xl font-bold mb-3">Sistema de Diagnóstico Estratégico</CardTitle>
              <CardDescription className="text-base leading-relaxed max-w-md mx-auto">
                Nossa inteligência artificial analisa 12 indicadores-chave para mapear oportunidades de crescimento na
                sua clínica
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleDadosSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nome">Seu nome completo *</Label>
                  <Input
                    id="nome"
                    value={dados.nome}
                    onChange={(e) => setDados((prev) => ({ ...prev, nome: e.target.value }))}
                    placeholder="Dr(a). Maria Silva"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail profissional *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={dados.email}
                    onChange={(e) => setDados((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="contato@suaclinica.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">WhatsApp *</Label>
                  <Input
                    id="telefone"
                    value={dados.telefone}
                    onChange={(e) => setDados((prev) => ({ ...prev, telefone: e.target.value }))}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nome_clinica">Nome da clínica</Label>
                  <Input
                    id="nome_clinica"
                    value={dados.nome_clinica}
                    onChange={(e) => setDados((prev) => ({ ...prev, nome_clinica: e.target.value }))}
                    placeholder="Clínica Estética Premium"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    value={dados.cidade}
                    onChange={(e) => setDados((prev) => ({ ...prev, cidade: e.target.value }))}
                    placeholder="São Paulo - SP"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-base font-medium">
                  Iniciar Análise Estratégica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Dados protegidos por criptografia SSL. Não compartilhamos suas informações.
                </p>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Etapa: Perguntas */}
        {etapa === "perguntas" && (
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium">
                  {PERGUNTAS[perguntaAtual].categoria}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {perguntaAtual + 1}/{PERGUNTAS.length}
                </span>
              </div>
              <CardTitle className="text-xl leading-relaxed">{PERGUNTAS[perguntaAtual].pergunta}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={respostas[PERGUNTAS[perguntaAtual].id] || ""}
                onValueChange={handleResposta}
                className="space-y-3"
              >
                {PERGUNTAS[perguntaAtual].opcoes.map((opcao) => (
                  <div
                    key={opcao.valor}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      respostas[PERGUNTAS[perguntaAtual].id] === opcao.valor
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200 hover:border-teal-200"
                    }`}
                    onClick={() => handleResposta(opcao.valor)}
                  >
                    <RadioGroupItem value={opcao.valor} id={opcao.valor} />
                    <Label htmlFor={opcao.valor} className="flex-1 cursor-pointer font-normal">
                      {opcao.texto}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8 gap-4">
                <Button
                  variant="outline"
                  onClick={perguntaAnterior}
                  disabled={perguntaAtual === 0}
                  className="flex-1 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>

                {perguntaAtual < PERGUNTAS.length - 1 ? (
                  <Button
                    onClick={proximaPergunta}
                    disabled={!perguntaRespondida}
                    className="flex-1 bg-teal-600 hover:bg-teal-700"
                  >
                    Próxima
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={finalizarDiagnostico}
                    disabled={!perguntaRespondida || isSubmitting}
                    className="flex-1 bg-teal-600 hover:bg-teal-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Finalizar
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Etapa: Processando */}
        {etapa === "processando" && (
          <Card className="border-0 shadow-xl">
            <CardContent className="py-20 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center mb-8">
                <Loader2 className="h-10 w-10 text-teal-600 animate-spin" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Processando análise estratégica</h2>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Nossa IA está avaliando seus indicadores e identificando oportunidades de crescimento para sua clínica
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
