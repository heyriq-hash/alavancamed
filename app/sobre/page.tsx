import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Sobre a <span className="text-blue-600">AlavancaMed</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A primeira agência de marketing voltada exclusivamente para médicos e dentistas que querem sair dos
            convênios.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nossa Missão</h2>
          <p className="text-lg text-slate-700 text-center max-w-2xl mx-auto">
            Transformar consultórios em negócios lucrativos e previsíveis através de estratégias de marketing validadas.
            Não vendemos curtidas. Vendemos pacientes particulares.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">O Que Fazemos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tráfego Pago Qualificado</h3>
                <p className="text-slate-600 text-sm">
                  Criamos campanhas no Google Ads focadas em quem já está procurando pelo seu procedimento. Não perdemos
                  dinheiro com curiosos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Gestão de Redes Sociais</h3>
                <p className="text-slate-600 text-sm">
                  Planejamento estratégico, roteirização e edição profissional de conteúdo para Instagram, YouTube e
                  TikTok.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sites de Alta Conversão</h3>
                <p className="text-slate-600 text-sm">
                  Landing pages profissionais que transformam visitantes em agendamentos. Design focado em psicologia da
                  conversão.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Consultoria Estratégica</h3>
                <p className="text-slate-600 text-sm">
                  Ajudamos você a estruturar sua oferta, precificação e posicionamento para atrair apenas pacientes de
                  alto valor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Para Quem Trabalhamos</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">🩺</div>
              <h3 className="font-bold mb-2">Cirurgiões Plásticos</h3>
              <p className="text-blue-100 text-sm">Rinoplastia, Lipo, Silicone, Abdominoplastia</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">🦷</div>
              <h3 className="font-bold mb-2">Dentistas</h3>
              <p className="text-blue-100 text-sm">Implantes, Lentes de Contato, Harmonização</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">💉</div>
              <h3 className="font-bold mb-2">Dermatologistas</h3>
              <p className="text-blue-100 text-sm">Botox, Preenchimento, Procedimentos Estéticos</p>
            </div>
          </div>
        </div>

        {/* Why Different */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Por Que Somos Diferentes</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Não fazemos "gestão genérica"</h4>
                <p className="text-sm text-slate-600">
                  Somos especialistas em saúde estética. Conhecemos a jornada do paciente, as objeções, os gatilhos
                  mentais específicos do nicho.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">ROI é a única métrica que importa</h4>
                <p className="text-sm text-slate-600">
                  Não te enchemos com "alcance" e "impressões". Te mostramos quantos pacientes fecharam e quanto lucro
                  você teve.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Tecnologia própria</h4>
                <p className="text-sm text-slate-600">
                  Criamos ferramentas exclusivas como o AgendaMed (sistema de agendamento) para você não precisar
                  contratar 5 softwares diferentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
