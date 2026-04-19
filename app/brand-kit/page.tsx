import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, TrendingUp } from "lucide-react"
import Link from "next/link"
import { BrandDownloads } from "@/components/brand-downloads"

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <Activity className="h-6 w-6 text-blue-600" />
                <TrendingUp className="h-4 w-4 text-green-500 -ml-1" />
              </div>
              <span>AlavancaMed</span>
            </Link>
            <span className="text-slate-300 mx-2">|</span>
            <span className="text-slate-500 font-normal text-sm">Brand Kit & Social Media</span>
          </div>
          <Link href="/">
            <Button variant="ghost">Voltar ao Site</Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-10 space-y-16">
        {/* Section 1: Logo & Identity */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Identidade Visual</h2>
            <BrandDownloads />
          </div>
          <p className="text-slate-600 max-w-2xl">
            Estes são os elementos oficiais da marca AlavancaMed. Use-os para manter a consistência em todas as
            comunicações.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo Light Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-500">Logo Principal (Fundo Claro)</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-40 bg-white rounded-md border border-slate-100">
                <div className="flex items-center gap-3 transform scale-150">
                  <div className="flex items-center">
                    <Activity className="h-8 w-8 text-blue-600" />
                    <TrendingUp className="h-5 w-5 text-green-500 -ml-1.5" />
                  </div>
                  <span className="font-bold text-2xl text-slate-900">AlavancaMed</span>
                </div>
              </CardContent>
            </Card>

            {/* Logo Dark Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-500">Logo Negativo (Fundo Escuro)</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-40 bg-slate-900 rounded-md">
                <div className="flex items-center gap-3 transform scale-150">
                  <div className="flex items-center">
                    <Activity className="h-8 w-8 text-blue-400" />
                    <TrendingUp className="h-5 w-5 text-green-400 -ml-1.5" />
                  </div>
                  <span className="font-bold text-2xl text-white">AlavancaMed</span>
                </div>
              </CardContent>
            </Card>

            {/* Icon Only */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-500">Ícone (Favicon / Perfil)</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-40 bg-slate-50 rounded-md border border-slate-100">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center transform scale-125">
                    <Activity className="h-10 w-10 text-blue-600" />
                    <TrendingUp className="h-6 w-6 text-green-500 -ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-500">Paleta de Cores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-600 shadow-sm"></div>
                  <div>
                    <p className="font-bold text-slate-900">Medical Blue</p>
                    <p className="text-sm text-slate-500">#2563EB (Confiança, Saúde)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-green-500 shadow-sm"></div>
                  <div>
                    <p className="font-bold text-slate-900">Growth Green</p>
                    <p className="text-sm text-slate-500">#22C55E (Crescimento, Lucro)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-900 shadow-sm"></div>
                  <div>
                    <p className="font-bold text-slate-900">Professional Dark</p>
                    <p className="text-sm text-slate-500">#0F172A (Autoridade, Texto)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Social Media Posts */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Posts para Instagram</h2>
            <p className="text-sm text-slate-500">Tire print ou use como inspiração para o Canva</p>
          </div>
          <p className="text-slate-600 max-w-2xl">
            Comece seu Instagram com estes 3 posts estratégicos para gerar autoridade imediata.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Post 1: Dor/Problema */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Post 1: A Verdade Dolorosa</h3>
              <div className="aspect-square bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

                <div className="flex items-center gap-2 z-10">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <span className="text-white font-bold text-sm">AlavancaMed</span>
                </div>

                <div className="z-10 space-y-4">
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    Por que seu <span className="text-blue-500">concorrente</span> cobra o dobro e tem a agenda cheia?
                  </h2>
                  <div className="h-1 w-20 bg-green-500 rounded-full"></div>
                </div>

                <div className="z-10">
                  <p className="text-slate-400 text-sm">Arrasta pro lado ➔</p>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-md text-xs text-slate-600 font-mono">
                <strong>Legenda:</strong> Não é sorte. É posicionamento. Enquanto você depende de convênio, ele investe
                em tráfego qualificado. Quer saber como virar esse jogo? Link na bio. #marketingmedico #gestaodeclinicas
              </div>
            </div>

            {/* Post 2: Prova Social/Autoridade */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Post 2: Resultado Real</h3>
              <div className="aspect-square bg-white border border-slate-200 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-green-500"></div>

                <div className="space-y-2 mb-6">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Case de Sucesso
                  </span>
                </div>

                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">+R$ 45.000</h2>
                <p className="text-slate-500 font-medium mb-6">de faturamento extra em 30 dias</p>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 w-full text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Dr. Ricardo M.</p>
                      <p className="text-[10px] text-slate-500">Cirurgião Plástico</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "Nunca imaginei que o Google pudesse trazer pacientes tão qualificados. O ROI foi absurdo."
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-md text-xs text-slate-600 font-mono">
                <strong>Legenda:</strong> O Dr. Ricardo parou de reclamar da crise e começou a agir. Implementamos o
                Protocolo AlavancaMed e esse foi o resultado do primeiro mês. Sua clínica é a próxima? 🚀
              </div>
            </div>

            {/* Post 3: Oferta Irresistível */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Post 3: Convite/Oferta</h3>
              <div className="aspect-square bg-blue-600 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Consultoria Gratuita de <br />
                    <span className="text-green-400">Crescimento</span>
                  </h2>
                  <p className="text-blue-100 text-sm mb-6">
                    Vou analisar seu site e te mostrar onde você está perdendo dinheiro.
                  </p>
                  <div className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full text-sm shadow-lg">
                    Comente "EU QUERO"
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-md text-xs text-slate-600 font-mono">
                <strong>Legenda:</strong> Estou abrindo 3 vagas para uma análise gratuita da presença digital da sua
                clínica. Sem compromisso. Quer saber se seu site está jogando dinheiro fora? Comente EU QUERO. 👇
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Story Templates */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Stories para Engajamento</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="aspect-[9/16] bg-slate-900 rounded-lg p-6 flex flex-col justify-center relative overflow-hidden border border-slate-800">
              <h3 className="text-white font-bold text-xl text-center mb-8">O que mais te impede de crescer hoje?</h3>
              <div className="bg-white rounded-lg p-4 h-32 flex items-center justify-center text-slate-400 text-sm">
                [Caixinha de Perguntas]
              </div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                <div className="flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <span className="text-white font-bold text-xs">AlavancaMed</span>
                </div>
              </div>
            </div>

            <div className="aspect-[9/16] bg-white rounded-lg p-6 flex flex-col justify-between relative overflow-hidden border border-slate-200">
              <div className="space-y-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">Enquete</span>
                <h3 className="text-slate-900 font-bold text-xl">Quantos pacientes particulares você atendeu hoje?</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded text-center text-blue-800 font-medium text-sm">
                  Nenhum 😢
                </div>
                <div className="bg-blue-50 border border-blue-100 p-3 rounded text-center text-blue-800 font-medium text-sm">
                  1 a 3
                </div>
                <div className="bg-green-50 border border-green-100 p-3 rounded text-center text-green-800 font-medium text-sm">
                  Agenda Cheia! 🚀
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
