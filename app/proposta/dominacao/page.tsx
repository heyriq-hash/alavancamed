import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Crown, Target, Rocket, Users, TrendingUp, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DominacaoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
            O Pacote Mais Completo
          </div>
          <div className="flex justify-center mb-4">
            <Crown className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Dominação <span className="text-purple-600">Total</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            O sistema completo para médicos que querem ser referência absoluta em sua região e ter agenda lotada com
            fila de espera.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tudo o Que Você Precisa em Um Só Lugar</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tráfego Pago</h3>
                <p className="text-purple-200 text-sm">Google Ads + Meta Ads gerenciados por especialistas</p>
              </div>
              <div>
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Autoridade</h3>
                <p className="text-purple-200 text-sm">Gestão completa de Instagram, YouTube e TikTok</p>
              </div>
              <div>
                <Rocket className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tecnologia</h3>
                <p className="text-purple-200 text-sm">AgendaMed Pro + CRM + Automações de WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Está Incluído</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  Aceleração Digital Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Site de Alta Conversão (Vitalício)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Gestão de Google Ads (Fundo de Funil)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Landing Pages para Procedimentos Específicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Script de Vendas + Treinamento de Equipe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Autoridade Social Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Calendário Editorial Mensal (12+ posts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Roteirização + Captação + Edição Profissional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Gestão de Instagram, YouTube e TikTok</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Stories Estratégicos Diários</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  Tecnologia e Automação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AgendaMed Pro (Sistema de Agendamento Online)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">CRM Simplificado para Gestão de Leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automação de Lembretes no WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Integração com Calendário Google</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-yellow-600 flex items-center justify-center">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  Bônus Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Consultoria Mensal (1h com especialista)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Relatórios Detalhados de Performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suporte Prioritário via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Acesso Vitalício às Atualizações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Investimento Dominação Total</h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-purple-200 line-through text-2xl">R$ 9.000</span>
              <div className="text-6xl font-bold">
                R$ 5.500<span className="text-3xl">/mês</span>
              </div>
            </div>
            <p className="text-purple-200 mb-8">Contrato de 6 meses para garantir a dominação completa da sua região</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold mb-1">Setup Inicial</div>
                <div className="text-purple-200 text-sm">R$ 3.500 única vez (site + configurações + treinamento)</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold mb-1">Mensalidade</div>
                <div className="text-purple-200 text-sm">R$ 5.500/mês (tráfego + social + tech + consultoria)</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold mb-1">ROI Estimado</div>
                <div className="text-purple-200 text-sm">5-10x o investimento em faturamento mensal</div>
              </div>
            </div>

            <a
              href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20pacote%20Domina%C3%A7%C3%A3o%20Total%20e%20agendar%20uma%20reuni%C3%A3o%20estrat%C3%A9gica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full md:w-auto bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg h-16 px-12"
              >
                Agendar Reunião Estratégica <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-purple-200 text-sm mt-4">*Apenas 2 vagas disponíveis por mês para garantir qualidade</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Para Quem é o Dominação Total?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-400">É para você se:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Quer ser a referência número 1 da sua região</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tem estrutura para receber 30+ pacientes novos/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Quer previsibilidade total de agenda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Está pronto para investir em crescimento</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-red-400">Não é para você se:</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm">Quer resultados sem investir em anúncios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm">Não tem tempo para gravar 2-3 horas/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm">Quer algo milagroso em 30 dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">✕</span>
                  <span className="text-sm">Prefere fazer tudo sozinho</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
