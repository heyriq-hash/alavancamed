"use client"

import { Button } from "@/components/ui/button"
import { Printer, CheckCircle, Gift, Percent } from "lucide-react"

export default function ContratoClinicaZomer() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      {/* Botões de Ação - Não aparecem na impressão */}
      <div className="fixed top-4 right-4 flex gap-2 print:hidden z-50">
        <Button onClick={handlePrint} className="bg-[#0d4a3a] hover:bg-[#0a3d30]">
          <Printer className="w-4 h-4 mr-2" />
          Imprimir / Salvar PDF
        </Button>
      </div>

      {/* Documento do Contrato */}
      <div className="max-w-4xl mx-auto py-8 px-4 print:py-0 print:px-0">
        <div className="bg-white shadow-lg print:shadow-none p-8 md:p-12">
          <header className="flex items-center justify-between border-b-2 border-[#1e3a5f] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="8" fill="#1e3a5f" />
                <path
                  d="M15 35 L22 28 L28 32 L38 20 L45 20"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M40 20 L45 20 L45 25"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M12 42 L16 42 L18 38 L22 46 L26 36 L30 44 L32 42 L36 42"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <div>
                <h1 className="text-2xl font-bold text-[#1e3a5f]">AlavancaMed</h1>
                <p className="text-sm text-slate-500">Marketing de Alta Performance para Médicos</p>
              </div>
            </div>
            <div className="text-right text-sm text-slate-500">
              <p>contato@alavancamed.com.br</p>
              <p>www.alavancamed.com.br</p>
              <p>WhatsApp: (11) 94545-5842</p>
            </div>
          </header>

          {/* Título do Contrato */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">PROPOSTA COMERCIAL</h2>
            <p className="text-slate-600">Contrato de Prestação de Serviços de Marketing Digital</p>
            <div className="inline-block mt-4 px-4 py-2 bg-[#22c55e]/10 text-[#0d4a3a] rounded-full text-sm font-semibold">
              Proposta Exclusiva - Válida até 30/11/2025
            </div>
          </div>

          {/* Dados das Partes */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 border-b pb-2">1. PARTES CONTRATANTES</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold text-[#1e3a5f] mb-2">CONTRATADA:</p>
                <p className="font-bold">AlavancaMed</p>
                <p className="text-sm text-slate-600">Agência de Marketing Digital Especializada em Saúde</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold text-[#1e3a5f] mb-2">CONTRATANTES:</p>
                <p className="font-bold">Dr. Eduardo Espindola Zomer Alves</p>
                <p className="text-sm text-slate-600">CRM: 178554</p>
                <div className="border-t border-slate-200 mt-2 pt-2">
                  <p className="font-bold">Dra. Ana Clara Back de Luca</p>
                  <p className="text-sm text-slate-600">CRM: 211668</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pacote Dr. Eduardo */}
          <section className="mb-8 print:break-before-page">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 border-b pb-2">2. SERVIÇOS CONTRATADOS</h3>

            {/* Card Dr. Eduardo */}
            <div className="border-2 border-[#1e3a5f] rounded-xl overflow-hidden mb-6 print:break-inside-avoid">
              <div className="bg-[#1e3a5f] text-white p-4">
                <h4 className="text-xl font-bold">PACOTE DR. EDUARDO ESPINDOLA ZOMER ALVES</h4>
                <p className="text-blue-200">Gestão de Redes Sociais + Filmmaker Profissional</p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-[#1e3a5f] mb-3">Serviços Inclusos:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Gestão completa de Instagram, YouTube e TikTok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Calendário editorial mensal estratégico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Roteirização de conteúdos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Captação profissional em vídeo (Filmmaker)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Edição profissional com legendas e efeitos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Postagem e gerenciamento das publicações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Relatório mensal de desempenho</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#1e3a5f] mb-3">Investimento:</h5>

                    <div className="mb-3 p-2 bg-red-50 rounded border border-red-200">
                      <p className="text-sm text-slate-500">Valor Mensal:</p>
                      <p className="text-xl text-red-400 line-through">R$ 5.100,00/mês</p>
                      <p className="text-xs text-slate-400">Total sem desconto: R$ 15.300,00</p>
                    </div>

                    <div className="mb-4 p-3 bg-[#22c55e]/10 rounded-lg border border-[#22c55e]/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Percent className="w-5 h-5 text-[#22c55e]" />
                        <p className="text-sm font-semibold text-[#0d4a3a]">VALOR TRIMESTRAL</p>
                      </div>
                      <p className="text-3xl font-bold text-[#0d4a3a]">R$ 12.300,00</p>
                      <p className="text-sm text-[#0d4a3a]">ou R$ 4.100,00/mês</p>
                      <p className="text-xs text-[#22c55e] font-semibold mt-1">Economia de R$ 3.000,00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#22c55e] p-2 rounded-full">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">BÔNUS EXCLUSIVO</p>
                      <p className="text-blue-200">
                        3 meses de Aceleração Digital (Tráfego Pago) <strong className="text-[#22c55e]">GRÁTIS</strong>
                      </p>
                      <p className="text-sm text-blue-300">Valor real: R$ 10.500,00 - Incluso nesta proposta!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Dra. Ana Clara */}
            <div className="border-2 border-[#1e3a5f] rounded-xl overflow-hidden print:break-inside-avoid print:break-before-page">
              <div className="bg-[#1e3a5f] text-white p-4">
                <h4 className="text-xl font-bold">PACOTE DRA. ANA CLARA BACK DE LUCA</h4>
                <p className="text-blue-200">Gestão de Redes Sociais + Filmmaker + Tráfego Pago</p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-[#1e3a5f] mb-3">Serviços Inclusos:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Gestão completa de Instagram, YouTube e TikTok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Calendário editorial mensal estratégico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Roteirização de conteúdos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Captação profissional em vídeo (Filmmaker)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Edição profissional com legendas e efeitos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Postagem e gerenciamento das publicações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">Tráfego Pago (Google Ads + Meta Ads)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">Landing Page de Alta Conversão</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                        <span>Relatório mensal de desempenho completo</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#1e3a5f] mb-3">Investimento:</h5>

                    <div className="mb-3 p-2 bg-red-50 rounded border border-red-200">
                      <p className="text-sm text-slate-500">Valores Mensais:</p>
                      <p className="text-lg text-red-400 line-through">Gestão + Filmmaker: R$ 5.100,00</p>
                      <p className="text-lg text-red-400 line-through">Tráfego Pago: R$ 3.500,00</p>
                      <p className="text-sm text-slate-400 mt-1">Total sem desconto: R$ 25.800,00</p>
                    </div>

                    <div className="p-3 bg-[#22c55e]/10 rounded-lg border border-[#22c55e]/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Percent className="w-5 h-5 text-[#22c55e]" />
                        <p className="text-sm font-semibold text-[#0d4a3a]">VALOR TRIMESTRAL</p>
                      </div>
                      <p className="text-3xl font-bold text-[#0d4a3a]">R$ 20.700,00</p>
                      <p className="text-sm text-[#0d4a3a]">ou R$ 6.900,00/mês</p>
                      <div className="mt-2 pt-2 border-t border-[#22c55e]/30">
                        <p className="text-xs text-[#22c55e] font-semibold">Desconto Gestão + Filmmaker: R$ 3.000,00</p>
                        <p className="text-xs text-[#22c55e] font-semibold">Desconto Tráfego: R$ 2.100,00</p>
                        <p className="text-sm text-[#0d4a3a] font-bold mt-1">Economia total: R$ 5.100,00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resumo Financeiro */}
          <section className="mb-10 print:break-inside-avoid">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 border-b pb-2">3. RESUMO FINANCEIRO</h3>

            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d4a3a] text-white p-6 rounded-xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-[#22c55e] font-semibold mb-1">INVESTIMENTO TOTAL TRIMESTRAL</p>
                  <p className="text-5xl font-bold">R$ 33.000,00</p>
                  <p className="text-blue-200 mt-1">ou 3x de R$ 11.000,00</p>
                </div>
                <div className="bg-[#22c55e] text-[#0d4a3a] p-4 rounded-xl text-center">
                  <p className="text-sm font-semibold">ECONOMIA TOTAL</p>
                  <p className="text-3xl font-bold">R$ 18.600,00</p>
                  <p className="text-xs mt-1">Incluindo bônus Tráfego Dr. Eduardo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Termos e Condições */}
          <section className="mb-10 print:break-inside-avoid">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 border-b pb-2">4. TERMOS E CONDIÇÕES</h3>

            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>4.1. Vigência:</strong> Este contrato tem duração de 3 (três) meses, iniciando na data de
                assinatura.
              </p>
              <p>
                <strong>4.2. Pagamento:</strong> O pagamento poderá ser realizado à vista (R$ 33.000,00) ou em 3
                parcelas mensais de R$ 11.000,00, com vencimento todo dia 10 de cada mês.
              </p>
              <p>
                <strong>4.3. Bônus Dr. Eduardo:</strong> O serviço de Aceleração Digital (Tráfego Pago) será prestado
                gratuitamente durante a vigência deste contrato. Após o período, será apresentada proposta para
                continuidade.
              </p>
              <p>
                <strong>4.4. Investimento em Mídia:</strong> Os valores de investimento em mídia (anúncios) não estão
                inclusos nesta proposta e serão definidos em conjunto com os contratantes.
              </p>
              <p>
                <strong>4.5. Captação de Imagens:</strong> As sessões de filmagem serão agendadas previamente, com no
                mínimo 48h de antecedência.
              </p>
              <p>
                <strong>4.6. Aprovação de Conteúdo:</strong> Todo conteúdo será enviado para aprovação antes da
                publicação, com prazo de 24h para feedback.
              </p>
            </div>
          </section>

          {/* Seção de Assinaturas */}
          <section className="mb-8 print:break-inside-avoid">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-6 border-b pb-2">5. ASSINATURAS</h3>

            <p className="text-sm text-slate-600 mb-8">
              As partes declaram ter lido e concordado com todos os termos desta proposta comercial, que passa a ter
              validade de contrato após a assinatura de ambas as partes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="border-b-2 border-slate-300 pb-2 mb-2 h-20 flex items-end justify-center">
                  <img
                    src="/images/assinatura-20-281-29.png"
                    alt="Assinatura Henrique Rodrigues"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="font-semibold">AlavancaMed</p>
                <p className="text-sm text-slate-500">Henrique Rodrigues - Representante Legal</p>
              </div>

              <div className="text-center">
                <div className="border-b-2 border-slate-300 pb-2 mb-2 h-16"></div>
                <p className="font-semibold">Dr. Eduardo Espindola Zomer Alves</p>
                <p className="text-sm text-slate-500">CRM: 178554</p>
              </div>

              <div className="text-center md:col-start-2">
                <div className="border-b-2 border-slate-300 pb-2 mb-2 h-16"></div>
                <p className="font-semibold">Dra. Ana Clara Back de Luca</p>
                <p className="text-sm text-slate-500">CRM: 211668</p>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-slate-500">
              <p>São Paulo, _____ de _______________ de 2025</p>
            </div>
          </section>

          {/* Rodapé */}
          <footer className="border-t pt-6 mt-10 text-center text-sm text-slate-500">
            <p className="font-semibold text-[#1e3a5f]">AlavancaMed - Marketing de Alta Performance para Médicos</p>
            <p>www.alavancamed.com.br | contato@alavancamed.com.br | WhatsApp: (11) 94545-5842</p>
          </footer>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:break-before-page {
            break-before: page;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
          @page {
            margin: 1cm;
            size: A4;
          }
        }
      `}</style>
    </div>
  )
}
