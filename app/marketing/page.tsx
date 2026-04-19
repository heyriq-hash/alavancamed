import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdGenerator } from "@/components/ad-generator"
import { ChatGenerator } from "@/components/chat-generator"

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Marketing Kit</h1>
            <p className="mt-4 text-lg text-slate-600">
              Crie anúncios e posts para o Instagram em segundos usando sua identidade visual.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Gerador de Posts (Feed & Stories)
              </h2>
              <AdGenerator />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Gerador de Prova Social (WhatsApp Fake)
              </h2>
              <p className="text-slate-600 mb-6">
                Crie prints de conversas simulando resultados para usar nos seus anúncios e stories. Mostre agenda cheia
                e faturamento alto.
              </p>
              <ChatGenerator />
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
