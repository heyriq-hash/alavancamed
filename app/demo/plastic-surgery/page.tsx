import { DemoNav } from "@/components/demo-nav"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Check, Star, ShieldCheck, Clock } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PlasticSurgeryDemo() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      <DemoNav />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative min-h-[600px] h-auto py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-plastic-surgery-clinic-woman-smiling.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block bg-rose-100 text-rose-800 px-4 py-1 rounded-full text-sm font-medium tracking-wide uppercase">
              Excelência em Cirurgia Plástica
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-slate-900">
              Realce sua beleza natural com <span className="text-rose-500 italic">segurança</span> e sofisticação.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Especialista em Rinoplastia Estruturada e Lipo HD. Transformando vidas através da autoestima com técnicas
              minimamente invasivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Gostei%20do%20modelo%20de%20Cirurgia%20Pl%C3%A1stica%20e%20quero%20um%20site%20igual."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-rose-500 hover:bg-rose-600 text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-rose-200 w-full sm:w-auto"
                >
                  Quero Um Site Assim
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-200 text-rose-700 hover:bg-rose-50 h-14 px-8 text-lg rounded-full bg-transparent"
              >
                Ver Antes e Depois
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority/Trust */}
      <section className="py-16 bg-rose-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">Membro da SBCP</h3>
              <p className="text-sm text-slate-500">Segurança certificada</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">15+ Anos de Experiência</h3>
              <p className="text-sm text-slate-500">Milhares de cirurgias realizadas</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">Recuperação Rápida</h3>
              <p className="text-sm text-slate-500">Protocolos modernos de pós-op</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm text-rose-500">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">Hospital Premium</h3>
              <p className="text-sm text-slate-500">Estrutura de ponta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Procedimentos em Destaque</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Combinamos arte e ciência para entregar resultados harmônicos que respeitam suas características únicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rinoplastia",
                desc: "Harmonia facial com preservação da função respiratória.",
                img: "/rinoplastia-procedure.jpg",
              },
              {
                title: "Mamoplastia",
                desc: "Aumento, redução ou lifting com cicatrizes reduzidas.",
                img: "/silicone-implants-procedure.jpg",
              },
              {
                title: "Lipo HD",
                desc: "Definição atlética e contorno corporal de alta precisão.",
                img: "/lipo-hd-procedure.jpg",
              },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Saiba mais sobre {item.title}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif">O primeiro passo para a sua melhor versão.</h2>
            <p className="text-slate-300 text-lg">
              Agende uma avaliação personalizada com o Dr. [Nome]. Analisaremos seu caso com exclusividade e definiremos
              o melhor plano de tratamento.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-400" />
                <span>Atendimento particular e exclusivo</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-400" />
                <span>Simulação de resultados 3D</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-400" />
                <span>Equipe multidisciplinar de apoio</span>
              </li>
            </ul>
          </div>
          <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
            <ContactForm
              title="Agende sua Avaliação"
              description="Deixe seus dados e nossa concierge entrará em contato."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
