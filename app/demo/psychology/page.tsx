import { DemoNav } from "@/components/demo-nav"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users, ArrowRight, CheckCircle, Quote } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import Link from "next/link"

export default function PsychologyDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-purple-50/30 to-emerald-50/20 font-sans text-slate-800">
      <ScrollToTop />
      <DemoNav />
      <WhatsAppFloat />

      {/* Hero Section - Acolhedor e Empático */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/psychology-hero.jpg" 
            alt="Psicologia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-purple-50/85 to-emerald-50/90" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full text-purple-800 font-medium mb-4">
              🌿 Psicologia Clínica e Desenvolvimento Humano
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
              Você não precisa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-amber-700 to-emerald-700">
                carregar tudo sozinha
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Um espaço seguro e acolhedor para você se reconectar com suas emoções, 
              ressignificar experiências e construir uma vida com mais leveza e propósito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Gostei%20do%20modelo%20de%20Psicologia%20e%20quero%20um%20site%20igual."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white h-14 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all w-full">
                  🌿 Quero um Site Assim
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="h-14 px-10 rounded-full text-lg border-2 border-purple-200 hover:bg-purple-50 w-full sm:w-auto"
              >
                Agendar Primeira Sessão
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">CRP 06/12345</div>
                <div className="text-sm text-slate-500">Registro Profissional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">10+ anos</div>
                <div className="text-sm text-slate-500">de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-slate-500">Vidas Transformadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é a terapia */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              A terapia é para você que sente...
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Não importa qual seja sua dor, há um caminho possível de acolhimento e transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { emoji: "😰", text: "Ansiedade que paralisa e tira sua paz" },
              { emoji: "😢", text: "Tristeza profunda sem explicação aparente" },
              { emoji: "💔", text: "Dificuldade para superar términos ou perdas" },
              { emoji: "😔", text: "Falta de propósito e sentido na vida" },
              { emoji: "😣", text: "Dificuldade nos relacionamentos" },
              { emoji: "😰", text: "Sobrecarga emocional e burnout" },
            ].map((item, index) => (
              <Card key={index} className="border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-4xl">{item.emoji}</div>
                  <p className="text-slate-700 font-medium pt-2">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Abordagens Terapêuticas */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Como funciona o processo terapêutico
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Trabalho com abordagens baseadas em evidências científicas, sempre respeitando sua individualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Terapia Cognitivo-Comportamental</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Identificamos e transformamos padrões de pensamento que geram sofrimento, desenvolvendo 
                  estratégias práticas para ansiedade, depressão e comportamentos que te limitam.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Técnicas para controle da ansiedade</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Reestruturação de crenças limitantes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Resolução de problemas práticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Psicoterapia de Apoio</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Um espaço seguro para processar emoções difíceis, perdas, transições de vida e momentos 
                  de crise, com acolhimento genuíno e sem julgamentos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Acolhimento em momentos de crise</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Elaboração de perdas e lutos</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Fortalecimento emocional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Desenvolvimento Pessoal</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Autoconhecimento profundo, gestão emocional e desenvolvimento de habilidades para 
                  relacionamentos saudáveis e realização profissional e pessoal.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Autoconhecimento e autoestima</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Habilidades de comunicação</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Propósito e realização pessoal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Transformações reais de quem confiou no processo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Cheguei sem esperança, carregando uma ansiedade que não me deixava viver. Hoje consigo respirar, sentir e viver de verdade. Obrigada por não desistir de mim.",
                name: "Ana Paula, 34 anos",
                emoji: "🌸"
              },
              {
                text: "Depois de anos evitando terapia, finalmente encontrei um espaço onde posso ser eu mesma sem medo de julgamento. Cada sessão é um passo mais perto de quem eu quero ser.",
                name: "Mariana, 28 anos",
                emoji: "💜"
              },
              {
                text: "Perdi minha mãe e achei que nunca ia superar. A terapia me ajudou a processar a dor, honrar as memórias e seguir em frente com amor no coração.",
                name: "Juliana, 41 anos",
                emoji: "🦋"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-purple-300 mb-4" />
                  <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.emoji}</div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Como começar sua jornada terapêutica
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Um processo simples e acolhedor, pensado para você se sentir segura desde o primeiro contato.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "1", title: "Entre em contato", desc: "Via WhatsApp ou formulário, sem compromisso" },
              { number: "2", title: "Primeira conversa", desc: "Sessão de acolhimento para nos conhecermos" },
              { number: "3", title: "Plano terapêutico", desc: "Definimos juntas objetivos e frequência" },
              { number: "4", title: "Transformação", desc: "Início da sua jornada de autoconhecimento" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Você merece se sentir bem. <br />
              Você merece viver com leveza.
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Dar o primeiro passo é um ato de coragem e amor próprio. Estou aqui para caminhar com você.
            </p>
            <div className="pt-8">
              <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6">Agende sua primeira sessão</h3>
                  <ContactForm 
                    title="" 
                    description="Preencha os dados abaixo e entrarei em contato em até 24 horas para agendarmos."
                  />
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-purple-200 pt-8">
              ✨ Atendimento presencial e online • Sigilo garantido • CRP 06/12345
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
