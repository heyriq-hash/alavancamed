import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Video, Calendar, Edit } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SocialProposalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
            Proposta Autoridade Social
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Pare de Improvisar <br />
            <span className="text-purple-600">Nas Redes Sociais</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Gestão completa de Instagram, YouTube e TikTok com estratégia focada em converter seguidores em pacientes
            pagantes.
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <h3 className="font-bold text-lg mb-2 text-red-900">O Problema que Você Está Vivendo:</h3>
          <ul className="space-y-2 text-red-800">
            <li>Você posta quando dá tempo (ou seja, quase nunca)</li>
            <li>Não sabe o que postar além de antes/depois</li>
            <li>Tem vergonha da qualidade dos vídeos</li>
            <li>Engajamento baixo, agenda continua vazia</li>
            <li>Concorrentes com menos experiência estão na sua frente</li>
          </ul>
        </div>

        {/* What We Do */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>1. Planejamento Estratégico</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p className="mb-4">
                Criamos um calendário editorial mensal com temas, datas importantes e gatilhos mentais para cada post.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Calendário em Notion/Google Sheets
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> 12 posts programados/mês
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Stories estratégicos
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                <Edit className="h-6 w-6 text-pink-600" />
              </div>
              <CardTitle>2. Roteirização Profissional</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p className="mb-4">
                Escrevemos o roteiro completo de cada Reel. Você só precisa gravar (com seu celular) e nos enviar.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Hook + Roteiro + CTA
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Copys persuasivas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Hashtags segmentadas
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>3. Edição e Publicação</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p className="mb-4">
                Editamos com qualidade de agência: cortes dinâmicos, legendas, trilha sonora e efeitos visuais.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Edição profissional
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Postagem nos horários ideais
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> Gestão de Instagram, YouTube, TikTok
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How It Works in Practice */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Como Funciona na Prática:</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Reunião de Alinhamento (1x/mês)</h4>
                  <p className="text-slate-600 text-sm">
                    Definimos juntos os temas, procedimentos em destaque e campanhas especiais do mês.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Você Grava os Vídeos</h4>
                  <p className="text-slate-600 text-sm">
                    Seguindo nossos roteiros prontos. Tempo total: 2-3 horas/mês. Pode ser tudo no mesmo dia.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Nós Fazemos o Resto</h4>
                  <p className="text-slate-600 text-sm">
                    Edição, legendas, música, postagem e gestão de comentários. Você só acompanha os resultados.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-sm">Posts/Reels por mês</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-sm">Plataformas gerenciadas</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-sm">Entrega de edições</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm">Focado em conversão</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-purple-600 rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Investimento</h2>
            <div className="text-6xl font-bold mb-2">
              R$ 2.500<span className="text-2xl">/mês</span>
            </div>
            <p className="text-purple-200 mb-8">Contrato mínimo de 3 meses para garantir resultados</p>

            <a
              href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Autoridade%20Social%20e%20gostaria%20de%20agendar%20uma%20conversa."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full md:w-auto bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg h-14 px-12"
              >
                Quero Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
