"use client"
import { ArrowLeft, Download, Target, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PropostaAriciaPage() {
  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          
          main {
            margin: 0 !important;
            padding: 20px !important;
            max-width: 100% !important;
          }
          
          .page-break {
            page-break-before: always;
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          
          .avoid-break {
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 no-print">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-teal-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            <button
              onClick={handleDownloadPDF}
              className="hidden sm:flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar PDF
            </button>
          </div>
        </header>

        <div className="sm:hidden fixed bottom-4 right-4 z-50 no-print">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center px-4 py-3 bg-teal-600 text-white rounded-full shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar PDF
          </button>
        </div>

        <main className="max-w-4xl mx-auto">
          {/* PÁGINA 1 */}
          <div className="avoid-break bg-white p-8 mb-8 text-center border-b-4 border-gray-300">
            <img src="/images/alavancamed-logo-light.png" alt="AlavancaMed" className="h-10 mx-auto mb-4" />
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4">
              Proposta Exclusiva
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Proposta Estratégica de Crescimento Digital</h1>
            <p className="text-lg text-gray-600 mb-8">Estruturação, autoridade e escala no digital</p>
            <div className="flex justify-center gap-16 pt-6 border-t border-gray-200">
              <div className="text-left">
                <p className="text-gray-500 text-xs mb-1 font-bold">CONTRATADA</p>
                <p className="font-bold text-gray-900">AlavancaMed</p>
                <p className="text-sm text-gray-600">São Paulo - SP | (11) 98360-8509</p>
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-xs mb-1 font-bold">CONTRATANTE</p>
                <p className="font-bold text-teal-600">Dra. Arícia Cunha</p>
                <p className="text-sm text-gray-600">Dermatologia Estética</p>
              </div>
            </div>
          </div>

          <div className="avoid-break bg-white p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. CONTEXTO E VISÃO</h2>
            <p className="text-sm text-gray-700 mb-3">
              O objetivo é transformar a presença digital da Dra. Arícia em um <strong>ecossistema profissional</strong>{" "}
              que gere:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-teal-50 p-3 rounded text-sm">✓ Pacientes para a clínica</div>
              <div className="bg-teal-50 p-3 rounded text-sm">✓ Vendas de serviços online</div>
              <div className="bg-teal-50 p-3 rounded text-sm">✓ Formação de turmas para cursos</div>
              <div className="bg-teal-50 p-3 rounded text-sm">✓ Previsibilidade de crescimento</div>
            </div>
          </div>

          <div className="avoid-break bg-white p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">2. OS 3 PILARES DO CRESCIMENTO</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Base</h3>
                <p className="text-xs text-gray-600">Site profissional como centro do negócio</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Captação</h3>
                <p className="text-xs text-gray-600">Páginas específicas para cada serviço</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">Aceleração</h3>
                <p className="text-xs text-gray-600">Conteúdo e anúncios para resultados</p>
              </div>
            </div>
          </div>

          {/* PÁGINA 2 */}
          <div className="page-break avoid-break bg-white p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">3. O QUE SERÁ CONSTRUÍDO</h2>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r">
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  • <strong>Site institucional</strong> - Página inicial profissional
                </li>
                <li>
                  • <strong>3 páginas de procedimentos</strong> - Botox, preenchimento, harmonização
                </li>
                <li>
                  • <strong>Skin Coaching Online</strong> - Com sistema de pagamento
                </li>
                <li>
                  • <strong>Curso Digital</strong> - Checkout automatizado
                </li>
                <li>
                  • <strong>Curso Presencial</strong> - Sistema de captação e formação de turmas
                </li>
              </ul>
            </div>
          </div>

          <div className="avoid-break bg-white p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">4. ESTRUTURA E TECNOLOGIA</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs">
                <p className="font-bold text-gray-900">📋 Organização</p>
                <p className="text-gray-600">Cada serviço com página estratégica</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs">
                <p className="font-bold text-gray-900">💳 Pagamentos</p>
                <p className="text-gray-600">Sistema seguro integrado</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs">
                <p className="font-bold text-gray-900">📊 Rastreamento</p>
                <p className="text-gray-600">Ferramentas integradas</p>
              </div>
            </div>
          </div>

          {/* PÁGINA 3 */}
          <div className="page-break avoid-break bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">5. PLANOS DE INVESTIMENTO</h2>

            <div className="space-y-4">
              {/* Plano 1 */}
              <div className="border border-gray-300 rounded p-4 avoid-break">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900">Plano 1 — Base Digital Fundacional</h3>
                  <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs">Único</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">R$ 1.000</p>
                <p className="text-xs text-gray-600">Site institucional + Google Meu Negócio + Estratégia</p>
              </div>

              {/* Plano 2 */}
              <div className="border-2 border-teal-600 rounded p-4 bg-teal-50 avoid-break">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900">Plano 2 — Implementação Estratégica</h3>
                  <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs">RECOMENDADO</span>
                </div>
                <p className="text-2xl font-bold text-teal-600 mb-2">R$ 3.500</p>
                <p className="text-xs text-gray-700 mb-2">
                  Tudo do Plano 1 + Site completo com 6 páginas estratégicas + Skin Coaching + Curso Digital + Curso
                  Presencial + Integração de pagamentos + Ferramentas de rastreamento + Documento estratégico completo
                </p>
              </div>

              {/* Plano 3 */}
              <div className="border-2 border-purple-600 rounded p-4 bg-purple-50 avoid-break">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900">Plano 3 — Gestão & Crescimento</h3>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">PREMIUM</span>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">
                  R$ 2.700/mês | Mínimo: 3 meses | Trimestral: <span className="text-purple-600">R$ 7.500</span> (de R$
                  8.100)
                </p>
                <p className="text-xs text-gray-700">
                  Tudo do Plano 2 + Gestão estratégica + Planejamento de conteúdo + Acompanhamento + Ajustes + Suporte +
                  Relatórios
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900 avoid-break">
              <strong>Sobre anúncios:</strong> O investimento em anúncios é opcional, mas é o que acelera resultados e
              reduz tempo de crescimento.
            </div>

            <div className="mt-4 text-center p-3 bg-gray-50 rounded text-xs text-gray-700 avoid-break">
              <strong>Este não é um projeto de redes sociais.</strong> É a construção de uma empresa digital sólida com
              estrutura profissional e parceria estratégica.
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8 py-4 border-t border-gray-300">
            <p>AlavancaMed — Agência de Marketing Digital Especializada em Saúde</p>
            <p>São Paulo - SP | (11) 98360-8509</p>
          </div>
        </main>
      </div>
    </>
  )
}
