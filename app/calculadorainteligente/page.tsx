import { DemoNav } from "@/components/demo-nav"
import { RoiCalculator } from "@/components/roi-calculator"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DemoNav />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Análise Gratuita e Personalizada
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Calculadora de <br />
            <span className="text-blue-600">Faturamento Médico</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubra quanto sua clínica pode faturar mensalmente com uma estratégia digital bem estruturada.
          </p>
        </div>

        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simule Seu Potencial de Lucro</h2>
            <p className="text-lg text-slate-600">
              Insira os valores da sua clínica e veja o impacto real que uma estratégia digital pode ter no seu
              faturamento.
            </p>
          </div>
          <RoiCalculator />
        </div>

        <div className="mb-20 text-center">
          <a
            href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20na%20calculadora%20e%20gostaria%20de%20conversar%20sobre%20como%20a%20AlavancaMed%20pode%20me%20ajudar."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-2xl mx-auto"
          >
            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base sm:text-xl px-6 sm:px-12 py-6 sm:py-8 h-auto rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
              <span className="text-balance">Consultoria Gratuita - Fale Conosco</span>
            </Button>
          </a>
          <p className="text-slate-600 mt-4 text-xs sm:text-sm px-4">
            Atendemos cirurgiões plásticos, biomédicos, clínicas de estética, médicos e dentistas que buscam pacientes
            particulares.
          </p>
        </div>
      </main>
    </div>
  )
}
