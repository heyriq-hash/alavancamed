"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function PropostaFabiana() {
  return (
    <>
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 6mm 8mm; }
          body { margin: 0 !important; padding: 0 !important; print-color-adjust: exact; -webkit-print-color-adjust: exact; background: white !important; }
          .no-print { display: none !important; }
          .print-page { page-break-after: always; break-after: page; min-height: 277mm; max-height: 277mm; overflow: hidden; box-sizing: border-box; }
          .print-page:last-child { page-break-after: auto; break-after: auto; }
          .print-card { break-inside: avoid; page-break-inside: avoid; }
          /* Ultra compact */
          h1 { font-size: 18pt !important; margin: 0 0 4pt 0 !important; line-height: 1.2 !important; }
          h2 { font-size: 10pt !important; margin: 0 0 3pt 0 !important; line-height: 1.2 !important; }
          p, li, span { font-size: 7.5pt !important; line-height: 1.2 !important; margin: 1pt 0 !important; }
          .capa-name { font-size: 12pt !important; }
          .price-big { font-size: 20pt !important; }
          /* Card padding */
          .c-pad { padding: 6pt !important; }
          .c-gap { margin-bottom: 4pt !important; }
          .g-gap { gap: 2pt !important; }
          /* Page container */
          .pg-wrap { padding: 6pt 10pt !important; }
          /* Smaller badges */
          .badge-sm { padding: 2pt 6pt !important; }
          .grid-2 { gap: 2pt !important; }
          .capa-box { padding: 6pt 12pt !important; margin-bottom: 6pt !important; }
          .gradient-box { padding: 8pt !important; margin-bottom: 4pt !important; }
        }
      `}</style>

      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition font-semibold"
        >
          Baixar PDF
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

        {/* ===== PAGINA 1: Capa + Seções 1, 2, 3 ===== */}
        <div className="print-page max-w-4xl mx-auto px-6 pt-8 pb-4 pg-wrap">

          {/* CAPA */}
          <div className="text-center mb-8 c-gap">
            <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase mb-2">
              AlavancaMed &bull; Estrutura Digital para Profissionais da Saúde
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Proposta de Estruturação Digital Profissional
            </h1>
            <p className="text-gray-500 mb-4">Regularização e Implementação de Site</p>
            <div className="inline-block bg-purple-100 rounded-2xl px-8 py-3 capa-box">
              <p className="font-bold text-purple-800 text-xl capa-name">Dra. Fabiana Soares Noritomi</p>
              <p className="text-purple-600 text-sm">13 de fevereiro de 2026</p>
            </div>
          </div>

          {/* 1 - APRESENTAÇÃO */}
          <Card className="mb-6 border-l-4 border-purple-500 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-purple-800 mb-3">{"1️⃣"} Apresentação</h2>
              <p className="text-gray-700 leading-relaxed mb-2">Dra. Fabiana,</p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Conforme conversado anteriormente com nossa equipe, realizamos uma análise técnica do seu perfil
                profissional no Google e identificamos uma <strong>inconsistência estrutural</strong> na sua conta.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Atualmente, o perfil não possui um site institucional com domínio próprio vinculado e validado. Essa
                ausência faz com que o perfil fique estruturalmente incompleto, o que pode representar{" "}
                <strong>risco de perda gradual de visibilidade</strong> nas buscas locais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nosso objetivo é corrigir essa inconsistência, organizar tecnicamente sua presença digital e
                restabelecer a consistência estrutural da conta.
              </p>
            </CardContent>
          </Card>

          {/* 2 - DIAGNÓSTICO */}
          <Card className="mb-6 border-l-4 border-pink-500 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-pink-800 mb-3">{"2️⃣"} Diagnóstico Identificado</h2>
              <p className="text-gray-700 mb-2">Após análise técnica do seu perfil, identificamos:</p>
              <ul className="space-y-1.5 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-pink-500 font-bold">{"•"}</span><span>Perfil ativo no Google</span></li>
                <li className="flex items-start gap-2"><span className="text-pink-500 font-bold">{"•"}</span><span>Ausência de site profissional com domínio próprio validado</span></li>
                <li className="flex items-start gap-2"><span className="text-pink-500 font-bold">{"•"}</span><span>Estrutura digital incompleta perante critérios atuais</span></li>
                <li className="flex items-start gap-2"><span className="text-pink-500 font-bold">{"•"}</span><span>Risco de redução de consistência e priorização nas buscas</span></li>
              </ul>
              <div className="mt-3 bg-pink-50 rounded-lg p-3 border border-pink-200">
                <p className="text-pink-700 text-sm">
                  {"⚠️"} Embora o perfil esteja ativo, a ausência dessa estrutura pode impactar a autoridade digital e a estabilidade da visibilidade orgânica.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 3 - DOMÍNIO */}
          <Card className="border-l-4 border-blue-500 shadow-lg print-card">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-blue-800 mb-3">{"3️⃣ 🔐"} Disponibilidade de Domínio</h2>
              <div className="bg-blue-50 rounded-lg p-3 mb-3 text-center border border-blue-200">
                <p className="font-bold text-blue-900">psicologafabinoritomi.com.br</p>
                <p className="text-blue-600 text-sm mt-1">{"✅"} Disponível no momento da análise</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                A recomendação é realizar o registro juntamente com a implementação para garantir a utilização do nome profissional e evitar que terceiros registrem. O domínio será vinculado ao site institucional e integrado corretamente ao Perfil da Empresa no Google.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* ===== PAGINA 2: Seções 4, 5, 6, 7 ===== */}
        <div className="print-page max-w-4xl mx-auto px-6 pt-8 pb-4 pg-wrap">

          {/* 4 - OBJETIVO */}
          <Card className="mb-6 border-l-4 border-purple-500 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-purple-800 mb-3">{"4️⃣"} Objetivo da Implementação</h2>
              <p className="text-gray-700 mb-3">A proposta tem como finalidade:</p>
              <div className="space-y-1.5 g-gap">
                {[
                  "Registrar o domínio profissional exclusivo",
                  "Desenvolver site institucional personalizado",
                  "Realizar integração e validação junto ao Google",
                  "Corrigir a inconsistência estrutural identificada",
                  "Criar base sólida para estabilidade e fortalecimento digital",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2 border border-purple-100 badge-sm">
                    <span className="text-purple-600 font-bold">{"✔"}</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 5 - ESTRUTURA DO SITE */}
          <Card className="mb-6 border-l-4 border-green-500 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-green-800 mb-3">{"5️⃣"} Estrutura do Site</h2>
              <p className="text-gray-700 mb-3 text-sm">
                Site desenvolvido com foco institucional, alinhado à atuação profissional e às diretrizes éticas da Psicologia:
              </p>
              <div className="grid grid-cols-2 gap-2 grid-2">
                {[
                  { icon: "📄", text: "Página Inicial Institucional" },
                  { icon: "👩‍⚕️", text: "Apresentação Profissional" },
                  { icon: "🧠", text: "Áreas de Atuação" },
                  { icon: "📞", text: "Informações de Contato" },
                  { icon: "💬", text: "Botão direto WhatsApp" },
                  { icon: "📍", text: "Integração Google Maps" },
                  { icon: "📱", text: "Responsivo (celular e desktop)" },
                  { icon: "🌐", text: "psicologafabinoritomi.com.br" },
                ].map((item, i) => (
                  <div key={i} className="bg-green-50 rounded-lg px-3 py-2 text-center border border-green-100 badge-sm">
                    <p className="text-sm font-medium text-gray-800">{item.icon} {item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 6 - RESULTADOS ESPERADOS */}
          <Card className="mb-6 border-l-4 border-orange-500 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-orange-800 mb-3">{"6️⃣"} Resultados Esperados</h2>
              <ul className="space-y-1.5 text-gray-700">
                {[
                  "Recuperar consistência estrutural perante a plataforma",
                  "Transmitir maior autoridade e profissionalismo",
                  "Gerar mais confiança para novos pacientes",
                  "Possuir presença digital própria (independente de redes sociais)",
                  "Reduzir o risco de perda gradual de visibilidade",
                  "Construir base sólida para captação recorrente de pacientes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-orange-500">{"✦"}</span><span className="text-sm">{item}</span></li>
                ))}
              </ul>
              <div className="mt-2 bg-orange-50 rounded-lg p-2 border border-orange-200">
                <p className="text-orange-700 text-xs">
                  <strong>Importante:</strong> a implementação estabelece a estrutura necessária para crescimento orgânico, sem promessas de volume imediato de pacientes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 7 - PRAZO */}
          <Card className="border-l-4 border-indigo-500 shadow-lg print-card">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-indigo-800 mb-3">{"7️⃣"} Prazo de Implementação</h2>
              <div className="bg-indigo-50 rounded-lg p-4 text-center border border-indigo-200">
                <p className="text-2xl font-bold text-indigo-800">{"⏱️"} 5 a 7 dias úteis</p>
                <p className="text-indigo-600 text-sm mt-1">após aprovação e envio das informações necessárias</p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* ===== PAGINA 3: Seções 8, 9, 10 ===== */}
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-10 pg-wrap">

          {/* 8 - INVESTIMENTO */}
          <Card className="mb-6 border-2 border-purple-300 shadow-xl print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-purple-800 mb-3">{"8️⃣"} Investimento</h2>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center text-white mb-4 gradient-box">
                <p className="text-purple-200 text-sm mb-1">Implementação completa</p>
                <p className="text-4xl font-bold mb-1 price-big">R$ 970,00</p>
                <p className="text-purple-200">ou 12x de R$ 97,00</p>
              </div>
              <p className="font-semibold text-gray-800 mb-2">{"✅"} Incluso:</p>
              <div className="grid grid-cols-2 gap-2 grid-2">
                {[
                  "Registro do domínio (1 ano)",
                  "Desenvolvimento do site institucional",
                  "Configuração técnica e hospedagem",
                  "Integração e validação no Google",
                  "Entrega pronta para utilização",
                  "Orientação estratégica inicial",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500 font-bold">{"✔"}</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 9 - SOBRE */}
          <Card className="mb-6 border-l-4 border-gray-400 shadow-lg print-card c-gap">
            <CardContent className="p-6 c-pad">
              <h2 className="text-lg font-bold text-gray-800 mb-3">{"9️⃣"} Sobre a AlavancaMed</h2>
              <p className="text-gray-700 leading-relaxed mb-2 text-sm">
                A AlavancaMed é especializada em estruturação digital para profissionais da saúde, com foco em
                organização, autoridade e alinhamento às diretrizes atuais do Google.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2 text-sm">
                Nosso trabalho não se limita à criação de sites, mas à organização técnica da presença digital profissional.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Responsável técnico:</strong> Henrique Rodrigues
              </p>
            </CardContent>
          </Card>

          {/* 10 - PRÓXIMO PASSO */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center text-white shadow-xl print-card gradient-box">
            <h2 className="text-lg font-bold mb-3">{"🔟"} Próximo Passo</h2>
            <p className="text-purple-100 mb-4 text-sm">
              Para esclarecer brevemente os pontos técnicos e alinhar qualquer dúvida antes da implementação, sugerimos
              uma conversa rápida de 10 minutos para alinhamento final.
            </p>
            <a
              href="https://wa.me/5511983608509?text=Ol%C3%A1%20Henrique%2C%20recebi%20a%20proposta%20e%20gostaria%20de%20conversar"
              target="_blank"
              rel="noopener noreferrer"
              className="no-print inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition shadow-md"
            >
              {"💬"} Falar com Henrique via WhatsApp
            </a>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            Elaborado por Henrique Rodrigues &mdash; Estratégia Digital | AlavancaMed
          </p>

        </div>

      </div>
    </>
  )
}
