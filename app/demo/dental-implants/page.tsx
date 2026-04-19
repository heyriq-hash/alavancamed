import { DemoNav } from "@/components/demo-nav"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Star, Shield, Zap } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DentalImplantsDemo() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <ScrollToTop />
      <DemoNav />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <Star className="h-4 w-4 fill-blue-700" />
              Referência em Implantes
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Transforme seu sorriso com <span className="text-blue-600">Lentes de Contato</span> e Implantes.
            </h1>
            <p className="text-lg text-slate-600">
              Especialistas em Lentes de Contato Dental, Protocolo Carga Imediata e Estética Avançada. Seu novo sorriso
              em até 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Gostei%20do%20modelo%20de%20Implantes%20e%20quero%20um%20site%20igual."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg w-full sm:w-auto">
                  Quero Um Site Assim
                </Button>
              </a>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent">
                Ver Depoimentos
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl opacity-50" />
            <img
              src="/happy-senior-patient-smiling-dental-clinic.jpg"
              alt="Paciente Sorrindo"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Garantia Vitalícia</p>
                <p className="text-xs text-slate-500">Nos implantes premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a nossa clínica?</h2>
            <p className="text-slate-500">Unimos tecnologia digital e atendimento humanizado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Lentes de Contato</h3>
              <p className="text-slate-600">Sorriso de artista. Facetas de porcelana ultrafinas para cor e formato.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Protocolo Carga Imediata</h3>
              <p className="text-slate-600">
                Troque sua dentadura por dentes fixos em 24h. Conforto e segurança para mastigar.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
              <Star className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Implantes Premium</h3>
              <p className="text-slate-600">Tecnologia suíça com garantia vitalícia e integração óssea acelerada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Before After */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mais de 2.000 sorrisos transformados</h2>
              <p className="text-blue-100 text-lg mb-8">
                "Coloquei as lentes de contato e me sinto outra pessoa. O resultado ficou super natural, exatamente como
                eu queria."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-400" />
                <div>
                  <p className="font-bold">Fernanda L.</p>
                  <p className="text-sm text-blue-200">Paciente de Lentes de Contato</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/dental-lenses-before-after.jpg" alt="Antes e Depois Lentes" className="rounded-lg w-full" />
              <div className="p-4 text-center">
                <p className="text-slate-900 font-bold">Resultado Real - Lentes de Porcelana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Agende sua Avaliação Panorâmica</h2>
          <p className="text-slate-600 mb-12">
            Inclui raio-x digital, escaneamento 3D e planejamento do seu novo sorriso.
          </p>
          <ContactForm
            title="Garantir Minha Vaga"
            description="Vagas limitadas para avaliação com condição especial."
          />
        </div>
      </section>
    </div>
  )
}
