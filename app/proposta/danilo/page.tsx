"use client"
import { ArrowLeft, Download, Target, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PropostaDaniloPage() {
  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page-1, .page-2 {
            page-break-after: always;
            min-height: 100vh;
          }
          .page-2 {
            page-break-before: always;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 no-print">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-teal-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar PDF
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* PÁGINA 1 */}
          <div className="page-1">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-lg p-12 mb-6 text-center">
              <h1 className="text-4xl font-bold mb-3">Proposta de Estruturação Digital Estratégica</h1>
              <p className="text-xl mb-8 text-teal-100">
                Organização, posicionamento e crescimento previsível no digital
              </p>

              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-3xl font-bold">Dr. Danilo Almeida</p>
                <p className="text-teal-100 mt-1">Odontologia Estética</p>
              </div>
            </div>

            {/* Contexto e Visão */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  1
                </span>
                CONTEXTO E VISÃO
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O objetivo é transformar sua presença digital em um{" "}
                <strong className="text-teal-600">ecossistema profissional organizado</strong> que gere:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">✓ Pacientes para a clínica</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">✓ Consultoria e mentoria especializada</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">✓ Posicionamento de autoridade</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">✓ Crescimento previsível</p>
                </div>
              </div>
            </div>

            {/* Os 3 Pilares */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  2
                </span>
                OS 3 PILARES DO CRESCIMENTO
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Base</h3>
                  <p className="text-sm text-gray-600">Site profissional como centro do negócio</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Captação</h3>
                  <p className="text-sm text-gray-600">Páginas específicas para cada serviço e mentoria</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Aceleração</h3>
                  <p className="text-sm text-gray-600">Rastreamento e base para crescimento futuro</p>
                </div>
              </div>
            </div>

            {/* O que será construído */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  3
                </span>
                O QUE SERÁ CONSTRUÍDO
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4 py-2">
                  <p className="font-bold text-gray-900 mb-1">Site Institucional Profissional</p>
                  <p className="text-sm text-gray-600">Base sólida com linguagem clara, posicionamento definido</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4 py-2">
                  <p className="font-bold text-gray-900 mb-1">3 Páginas para Procedimentos Estéticos</p>
                  <p className="text-sm text-gray-600">
                    Implantes dentários • Harmonização facial • Botox e preenchimento
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4 py-2">
                  <p className="font-bold text-gray-900 mb-1">Página de Mentoria Premium</p>
                  <p className="text-sm text-gray-600">
                    Posicionamento exclusivo + filtro de qualificação + 3 vagas limitadas
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4 py-2">
                  <p className="font-bold text-gray-900 mb-1">Tecnologia e Estrutura</p>
                  <p className="text-sm text-gray-600">
                    Rastreamento (pixels Google/Meta) + Organização de dados + Base pronta para crescimento
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PÁGINA 2 */}
          <div className="page-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  4
                </span>
                PLANOS DE INVESTIMENTO
              </h2>

              <div className="space-y-6">
                {/* Plano 1 - Base */}
                <div className="border-2 border-gray-300 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Plano 1 — Base Digital Fundacional</h3>
                    <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Pagamento único
                    </span>
                  </div>

                  <p className="text-3xl font-bold text-gray-900 mb-4">R$ 1.000</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700 flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Site institucional profissional (estrutura simples)</span>
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Organização do Google Meu Negócio</span>
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Documento estratégico com direcionamento claro de posicionamento e próximos passos</span>
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800 mb-2">
                      <strong>⚠️ Importante:</strong> Este plano organiza a base, mas não executa a estratégia completa e
                      não gera escala.
                    </p>
                    <p className="text-sm text-amber-700">
                      <strong>👉 Ideal para:</strong> quem quer clareza antes de investir mais.
                    </p>
                  </div>
                </div>

                {/* Plano 2 - Implementação RECOMENDADO */}
                <div className="border-4 border-teal-600 rounded-lg p-6 bg-teal-50/30 relative">
                  <div className="absolute -top-3 right-6 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    RECOMENDADO
                  </div>

                  <div className="flex items-center justify-between mb-3 mt-2">
                    <h3 className="text-xl font-bold text-gray-900">Plano 2 — Implementação Estratégica Completa</h3>
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Pagamento único
                    </span>
                  </div>

                  <p className="text-3xl font-bold text-teal-600 mb-4">R$ 2.800</p>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="font-bold text-gray-900 mb-3">Inclui:</p>
                    <div className="space-y-2">
                      <p className="text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">✓</span>
                        <span>
                          <strong>Site profissional estruturado para conversão</strong>
                        </span>
                      </p>
                      <p className="text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">✓</span>
                        <span>
                          <strong>Páginas específicas para:</strong> Implantes dentários • Harmonização facial • Botox e
                          preenchimento
                        </span>
                      </p>
                      <p className="text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">✓</span>
                        <span>
                          <strong>Estruturação da mentoria</strong> (página + filtro + posicionamento)
                        </span>
                      </p>
                      <p className="text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">✓</span>
                        <span>
                          <strong>Integrações técnicas</strong> (rastreamento e base de dados)
                        </span>
                      </p>
                      <p className="text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">✓</span>
                        <span>
                          <strong>Documento estratégico completo</strong> de uso da estrutura
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-teal-600 text-white rounded-lg p-4">
                    <p className="font-semibold text-center">
                      Este plano corrige exatamente os erros que normalmente geram frustração com marketing digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagem final */}
              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-700 leading-relaxed">
                  Este não é um projeto de "posts e anúncios". É construção de empresa digital estruturada, com
                  autoridade, qualificação e estratégia de longo prazo.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center py-6 border-t border-gray-200">
              <p className="text-gray-600 font-medium">Elaborado por Henrique — Estratégia Digital</p>
              <p className="text-gray-500 text-sm mt-1">(11) 98360-8509</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
