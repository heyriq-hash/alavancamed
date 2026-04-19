import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Zap, Globe, Instagram, Target } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Nossos Serviços
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            3 Formas de Escalar <br />
            <span className="text-blue-600">Seu Consultório</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Escolha o serviço ideal para o seu momento. Todos são focados em trazer pacientes particulares, não likes.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Service 1: Aceleração Digital */}
          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Aceleração Digital</CardTitle>
              <p className="text-slate-500 text-sm mt-2">Para quem precisa de presença online profissional</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">R$ 3.500</div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Site de Alta Conversão (Vitalício)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Google Ads Setup + 1º Mês Grátis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Integração WhatsApp Business</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Script de Vendas para Secretária</span>
                </li>
              </ul>

              <div className="pt-4 border-t">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Ideal para:</strong> Médicos que querem sair dos convênios e escalar com tráfego pago.
                </p>
                <Link href="/calculadorainteligente">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Ver Proposta Completa <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Service 2: Autoridade Social */}
          <Card className="border-2 border-purple-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              NOVO
            </div>
            <CardHeader>
              <div className="h-14 w-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Instagram className="h-7 w-7 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Autoridade Social</CardTitle>
              <p className="text-slate-500 text-sm mt-2">Para quem quer dominar Instagram, YouTube e TikTok</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                R$ 2.500<span className="text-lg text-slate-500">/mês</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Calendário Editorial Mensal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Roteirização de Posts e Reels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Edição Profissional (até 12 posts/mês)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Gestão de Instagram, YouTube e TikTok</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Relatório Mensal de Engajamento</span>
                </li>
              </ul>

              <div className="pt-4 border-t">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Ideal para:</strong> Médicos que querem autoridade e reconhecimento como referência no nicho.
                </p>
                <Link href="/proposta/social">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Ver Proposta Completa <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Service 3: Dominação Total */}
          <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Dominação Total</CardTitle>
              <p className="text-slate-500 text-sm mt-2">Google + Redes Sociais + Consultoria</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                R$ 5.500<span className="text-lg text-slate-500">/mês</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Tudo do Aceleração Digital</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Tudo do Autoridade Social</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Consultoria Estratégica Mensal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Prioridade no Suporte</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Acesso ao AgendaMed Pro</span>
                </li>
              </ul>

              <div className="pt-4 border-t">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Ideal para:</strong> Médicos que querem dominar seu mercado local e ter agenda sempre cheia.
                </p>
                <Link href="/proposta/dominacao">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Ver Proposta Completa <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" /> Posso contratar apenas um serviço?
              </h4>
              <p className="text-slate-600">
                Sim! Cada serviço funciona de forma independente. Muitos clientes começam com Aceleração Digital e
                depois adicionam Autoridade Social.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" /> Vocês gravam os vídeos para mim?
              </h4>
              <p className="text-slate-600">
                Não. Você grava seguindo nossos roteiros (com seu celular mesmo). Nós cuidamos da edição, legendas,
                thumbnails e publicação estratégica.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" /> Qual serviço traz mais pacientes?
              </h4>
              <p className="text-slate-600">
                <strong>Aceleração Digital (Google Ads)</strong> traz resultados mais rápidos.{" "}
                <strong>Autoridade Social</strong> cria reconhecimento de marca a longo prazo. O ideal é ter ambos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
