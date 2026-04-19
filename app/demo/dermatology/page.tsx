import { DemoNav } from "@/components/demo-nav"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Sparkles, Droplets, Sun, ArrowRight } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DermatologyDemo() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-800">
      <ScrollToTop />
      <DemoNav />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          {/* Fixed hero image source */}
          <img
            src="/flawless-skin-woman-skincare-aesthetic-clinic.jpg"
            alt="Pele Perfeita"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F0] via-[#F5F3F0]/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-800">
              Harmonização Facial <br />
              <span className="font-serif italic text-purple-900">com naturalidade.</span>
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Protocolos exclusivos de Botox, Preenchimento e Laser para rejuvenescer sem perder sua essência.
            </p>
            <a
              href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Gostei%20do%20modelo%20de%20Dermatologia%20e%20quero%20um%20site%20igual."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-900 hover:bg-purple-800 text-white h-14 px-10 rounded-none text-lg tracking-wide w-full sm:w-auto">
                QUERO UM SITE ASSIM
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-lg">
              <h2 className="text-4xl font-light mb-4 text-slate-900">Tratamentos Exclusivos</h2>
              <p className="text-slate-500 font-light text-lg">
                Tecnologia de ponta aliada ao olhar clínico apurado para resultados que realçam sua beleza sem exageros.
              </p>
            </div>
            <Button variant="link" className="text-purple-900 text-lg">
              Ver todos os tratamentos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 border border-slate-100 hover:border-purple-200 transition-colors">
              <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-900">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-slate-900">Botox & Preenchimento</h3>
              <p className="text-slate-500 font-light mb-6">
                Suavize rugas e restaure o volume dos lábios e malar com ácido hialurônico premium.
              </p>
              <a
                href="#"
                className="text-sm font-bold tracking-widest uppercase text-purple-900 border-b border-purple-900 pb-1"
              >
                Saiba Mais
              </a>
            </div>
            <div className="group bg-white p-8 border border-slate-100 hover:border-purple-200 transition-colors">
              <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-900">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-slate-900">Harmonização Facial</h3>
              <p className="text-slate-500 font-light mb-6">
                Equilíbrio perfeito entre queixo, mandíbula e nariz para um perfil marcante e elegante.
              </p>
              <a
                href="#"
                className="text-sm font-bold tracking-widest uppercase text-purple-900 border-b border-purple-900 pb-1"
              >
                Saiba Mais
              </a>
            </div>
            <div className="group bg-white p-8 border border-slate-100 hover:border-purple-200 transition-colors">
              <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-900">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-slate-900">Laser para Rugas</h3>
              <p className="text-slate-500 font-light mb-6">
                Tecnologia ablativa e não ablativa para renovação celular profunda e pele de porcelana.
              </p>
              <a
                href="#"
                className="text-sm font-bold tracking-widest uppercase text-purple-900 border-b border-purple-900 pb-1"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-24 bg-purple-900 text-white text-center">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif italic">
            "A beleza começa no momento em que você decide ser você mesma."
          </h2>
          <p className="text-purple-200 text-lg font-light">Coco Chanel</p>
          <div className="pt-8">
            <div className="bg-white p-8 rounded-sm max-w-md mx-auto text-slate-900">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Agende sua visita</h3>
              <ContactForm title="" description="Nossa equipe entrará em contato para confirmar o melhor horário." />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
