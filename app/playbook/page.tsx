import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, TrendingUp, CalendarIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <div className="container mx-auto p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Playbook AlavancaMed</h1>
          <p className="text-slate-600">O manual completo para fechar contratos e entregar resultados</p>
        </div>

        <Tabs defaultValue="prospecting" className="space-y-4">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="prospecting">Prospecção</TabsTrigger>
            <TabsTrigger value="scripts">Scripts de Vídeo</TabsTrigger>
            <TabsTrigger value="sales">Vendas</TabsTrigger>
            <TabsTrigger value="delivery">Entrega</TabsTrigger>
            <TabsTrigger value="tools">Ferramentas</TabsTrigger>
            <TabsTrigger value="agendamed">AgendaMed SaaS</TabsTrigger>
            <TabsTrigger value="whatsapp-automation">Automação WhatsApp</TabsTrigger>
          </TabsList>

          <TabsContent value="prospecting" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scripts de Prospecção Completos</CardTitle>
                <CardDescription>
                  Do primeiro contato ao fechamento do contrato. Use estes scripts para captar suas clínicas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* ETAPA 1 */}
                <div className="space-y-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <h3 className="font-bold text-lg">Etapa 1: Mensagem Fria (Primeiro Contato)</h3>
                    <p className="text-sm opacity-90">Para enviar via WhatsApp ou Direct do Instagram</p>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-md space-y-3">
                    <p className="font-mono text-sm text-slate-800 whitespace-pre-line">
                      {`Olá Dr(a). [Nome], tudo bem?

Estava fazendo uma pesquisa aqui na região e notei que sua clínica não aparece nas primeiras posições do Google para quem busca [Procedimento Lucrativo, ex: "Implante Dentário" / "Harmonização Facial"].

Criei uma simulação rápida de quanto faturamento o senhor(a) pode estar deixando na mesa por conta disso.

Posso te enviar o link? É uma calculadora simples que mostra o potencial exato do seu consultório.`}
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <p className="text-sm text-green-900">
                      <strong>O que acontece:</strong> Quando ele responder "Sim" ou demonstrar interesse, envie o link:{" "}
                      <code className="bg-white px-2 py-1 rounded">alavancamed.com.br</code>
                    </p>
                  </div>
                </div>

                <hr className="border-slate-300" />

                {/* ETAPA 2 */}
                <div className="space-y-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <h3 className="font-bold text-lg">Etapa 2: Follow-Up (Se Ele Viu o Site)</h3>
                    <p className="text-sm opacity-90">24 horas depois de enviar o link</p>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-md space-y-3">
                    <p className="font-mono text-sm text-slate-800 whitespace-pre-line">
                      {`Dr(a). [Nome], conseguiu dar uma olhada na simulação?

Fiz uma análise rápida da sua presença digital e separei 3 pontos que estão te fazendo perder paciente particular neste momento:

1. Seu consultório não aparece para quem busca [Procedimento] no Google.
2. Não tem página de captura (quem te acha não consegue agendar fácil).
3. A concorrência está anunciando e você não.

Posso te mostrar em 15 minutos como resolver isso e começar a lotar sua agenda com particular ainda este mês.

Tem um horário hoje ou amanhã para uma call rápida?`}
                    </p>
                  </div>
                </div>

                <hr className="border-slate-300" />

                {/* ETAPA 3 */}
                <div className="space-y-4">
                  <div className="bg-purple-600 text-white p-3 rounded-lg">
                    <h3 className="font-bold text-lg">Etapa 3: Na Call (Apresentação da Solução)</h3>
                    <p className="text-sm opacity-90">Roteiro para a reunião/videochamada</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                      <h4 className="font-bold text-blue-900 mb-2">Abertura (2 min)</h4>
                      <p className="text-sm text-slate-700">
                        "Dr(a)., obrigado pelo tempo. Vou ser direto: na AlavancaMed, nós não fazemos 'gestão de redes
                        sociais'. Nós montamos uma máquina de captação de pacientes particulares. Nosso trabalho é fazer
                        você parar de depender de convênio e indicação."
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                      <h4 className="font-bold text-green-900 mb-2">Diagnóstico (3 min)</h4>
                      <p className="text-sm text-slate-700 mb-2">Faça estas perguntas:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                        <li>Quantos pacientes particulares o senhor atende por mês?</li>
                        <li>Quantos gostaria de atender?</li>
                        <li>Qual o procedimento que mais dá lucro? (ticket médio)</li>
                        <li>O senhor já tentou anunciar? Como foi?</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                      <h4 className="font-bold text-purple-900 mb-2">Solução (5 min)</h4>
                      <p className="text-sm text-slate-700 mb-3">
                        "Perfeito. Aqui está o que vamos fazer para o senhor:"
                      </p>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <strong className="text-purple-600">1.</strong>
                          <span>
                            <strong>Landing Page de Alta Conversão:</strong> Um site específico para [Procedimento
                            Lucrativo]. Design profissional que converte visitante em agendamento.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <strong className="text-purple-600">2.</strong>
                          <span>
                            <strong>Google Ads:</strong> Anúncios para quem já está procurando pelo procedimento. Ex:
                            "Implante Dentário + sua cidade".
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <strong className="text-purple-600">3.</strong>
                          <span>
                            <strong>AgendaMed (Bônus):</strong> Sistema exclusivo para sua secretária organizar os
                            agendamentos. Não precisa mais anotar em papel.
                          </span>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                      <h4 className="font-bold text-yellow-900 mb-2">Investimento (2 min)</h4>
                      <p className="text-sm text-slate-700 mb-3">"O investimento é dividido em duas partes:"</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>
                          <strong>Setup Inicial:</strong> R$ 1.997 (único) - Criação do site, configuração dos anúncios
                          e treinamento da secretária.
                        </li>
                        <li>
                          <strong>Gestão Mensal:</strong> R$ 2.997/mês - Gerenciamento dos anúncios, otimizações e
                          relatórios.
                        </li>
                        <li>
                          <strong>Verba de Anúncios:</strong> R$ 1.500 a R$ 3.000/mês (vai direto para o Google/Meta,
                          não é nosso).
                        </li>
                      </ul>
                      <p className="text-sm text-slate-700 mt-3">
                        <strong>Total Primeiro Mês:</strong> R$ 4.994 + Verba de Anúncios.
                      </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-600 p-4">
                      <h4 className="font-bold text-red-900 mb-2">Fechamento (3 min)</h4>
                      <p className="text-sm text-slate-700 mb-3">
                        "Dr(a)., se você fechar 2 procedimentos de [Valor Alto, ex: R$ 10.000] a mais por mês, o
                        investimento já se pagou e ainda sobra R$ 15.000 de lucro líquido."
                      </p>
                      <p className="text-sm text-slate-700 mb-3">
                        "A questão não é 'se vai funcionar'. A questão é: quanto tempo você vai deixar dinheiro na mesa
                        esperando?"
                      </p>
                      <p className="text-sm text-slate-700 font-bold">
                        "Posso começar na segunda-feira. O que o senhor(a) acha?"
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-300" />

                {/* TRATAMENTO DE OBJEÇÕES */}
                <div className="space-y-4">
                  <div className="bg-slate-900 text-white p-3 rounded-lg">
                    <h3 className="font-bold text-lg">Respostas para Objeções Comuns</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-300 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">"Tá caro"</h4>
                      <p className="text-sm text-slate-700">
                        "Entendo. Mas vamos fazer a conta: se você fechar 1 cirurgia de R$ 12.000 a mais por mês, em 3
                        meses você já lucrou R$ 36.000. O investimento é de R$ 5.000 no primeiro mês. Ou seja, você vai
                        multiplicar por 7. Isso não é custo, é investimento com retorno garantido."
                      </p>
                    </div>

                    <div className="border border-slate-300 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">"Já tentei e não funcionou"</h4>
                      <p className="text-sm text-slate-700">
                        "Exatamente por isso estou aqui. O erro das agências comuns é anunciar para todo mundo e esperar
                        resultado. Nós focamos apenas em quem já está procurando o procedimento (Google Ads). É
                        diferente de tentar 'convencer' alguém no Instagram."
                      </p>
                    </div>

                    <div className="border border-slate-300 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">"Preciso pensar"</h4>
                      <p className="text-sm text-slate-700">
                        "Claro, faz todo sentido. Só deixa eu te fazer uma pergunta: qual parte você precisa pensar? Se
                        é o investimento, a gente pode parcelar. Se é dúvida sobre os resultados, posso te mostrar casos
                        de outros médicos que já fecharam. O que te deixa mais inseguro?"
                      </p>
                    </div>

                    <div className="border border-slate-300 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">"Não tenho tempo para isso"</h4>
                      <p className="text-sm text-slate-700">
                        "Justamente. O senhor não vai ter trabalho nenhum. Nós criamos tudo, gerenciamos tudo. A única
                        coisa que o senhor vai fazer é atender os pacientes que nós trouxermos. Sua secretária vai usar
                        nosso sistema para agendar. Zero trabalho extra."
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-300" />

                {/* BÔNUS */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Gatilho Mental: AgendaMed como Brinde Exclusivo</h3>
                    <p className="text-sm opacity-90">Use isso para criar urgência e aumentar a percepção de valor</p>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-md">
                    <p className="font-mono text-sm text-slate-800 whitespace-pre-line">
                      {`"Ah, Dr(a)., e tem mais uma coisa que eu ia esquecendo:

Normalmente, esse sistema de agendamento (o AgendaMed) a gente cobra R$ 497/mês à parte. Mas para os primeiros 10 clientes que fecharem até o final do mês, eu vou incluir de graça por 6 meses.

Depois disso, se quiser continuar usando, aí sim entra na mensalidade. Mas nos primeiros 6 meses é cortesia.

Isso te ajuda a testar o sistema sem custo adicional e ver como ele facilita a vida da sua secretária."`}
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <p className="text-sm text-green-900">
                      <strong>Por que isso funciona:</strong> Cria urgência (apenas 10 vagas), aumenta o valor percebido
                      (algo que "custa" R$ 497/mês de graça) e facilita a decisão do cliente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SCRIPTS */}
          <TabsContent value="scripts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Abordagem no WhatsApp (Prospecção)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-100 p-4 rounded-md">
                  <p className="font-mono text-sm text-slate-800">
                    "Olá Dr(a). [Nome], tudo bem?
                    <br />
                    <br />
                    Estava fazendo uma pesquisa aqui na região e notei que sua clínica não aparece nas primeiras
                    posições para quem busca [Procedimento Caro, ex: Lente de Contato].
                    <br />
                    <br />
                    Criei uma simulação rápida de quanto faturamento o senhor(a) pode estar deixando na mesa por conta
                    disso.
                    <br />
                    <br />
                    Posso te enviar o link? É uma calculadora simples que mostra o potencial exato."
                  </p>
                </div>
                <p className="text-sm text-slate-500 italic">
                  *Quando ele responder "Sim": Envie o link da Calculadora de ROI do seu site.*
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Scripts de Vídeo (Nicho por Nicho)</h3>
            <p className="text-sm text-slate-600 mb-6">
              Copys prontas para você gravar Reels e rodar anúncios segmentados.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* PLÁSTICA */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">1. Cirurgião Plástico</CardTitle>
                  <p className="text-xs text-slate-500">Foco: Parar de fazer dancinha e focar em cirurgia.</p>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-slate-800 bg-slate-50 p-3 rounded whitespace-pre-line">
                    {`"Doutor, uma pergunta séria:
                    A prótese de silicone que você coloca... depende da sua dancinha no TikTok pra ficar boa?
                    Não, né?

                    Então por que você gasta 2 horas editando vídeo e zero horas atraindo quem quer operar DE VERDADE?

                    Enquanto você vira blogueiro, o Dr. Fulano do lado tá operando paciente particular que veio do Google.
                    
                    Quem procura "Rinoplastia Preço" não quer ver dancinha. Quer ver resultado e agendar.
                    
                    Quer voltar a ser cirurgião e deixar o marketing com quem entende?
                    Clica no link e veja a matemática do lucro."`}
                  </p>
                </CardContent>
              </Card>

              {/* BIOMÉDICO */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-700">2. Biomédico Esteta</CardTitle>
                  <p className="text-xs text-slate-500">Foco: Fugir da guerra de preços (Botox barato).</p>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-slate-800 bg-slate-50 p-3 rounded whitespace-pre-line">
                    {`"Dra, cansada de paciente que pede desconto no Botox?
                    Sabe aquela pessoa que pergunta o preço em 10 clínicas e fecha na mais barata?
                    
                    Pois é. Você tá atraindo esse público porque seu marketing tá errado.
                    
                    Quem quer Harmonização de qualidade, preenchimento labial premium... não tá procurando 'promoção'. Tá procurando especialista.
                    
                    Nós criamos um funil que filtra os curiosos e só entrega paciente que valoriza sua agulha.
                    
                    Pare de vender commodity. Comece a vender autoestima de alto padrão.
                    Saiba como no link da bio."`}
                  </p>
                </CardContent>
              </Card>

              {/* ESTETICISTA */}
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="text-pink-700">3. Esteticista</CardTitle>
                  <p className="text-xs text-slate-500">Foco: Vender protocolos caros, não limpeza de pele.</p>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-slate-800 bg-slate-50 p-3 rounded whitespace-pre-line">
                    {`"Limpeza de pele paga as contas... mas Protocolo de Gordura Localizada compra o carro do ano.
                    
                    Você tá com a agenda cheia de procedimento barato e vazia nos tratamentos high-ticket?
                    
                    O erro tá na captação. O cliente de R$ 2.000 existe na sua cidade, mas ele não vê seu Instagram de 'dicas caseiras'.
                    
                    A AlavancaMed coloca seu tratamento mais caro na tela do celular de quem pode pagar.
                    
                    Quer trocar 10 clientes de R$ 100 por 2 de R$ 2.000?
                    Vem ver como funciona."`}
                  </p>
                </CardContent>
              </Card>

              {/* DENTISTA */}
              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700">4. Dentista (Odonto)</CardTitle>
                  <p className="text-xs text-slate-500">Foco: Lentes e Implantes (High Ticket).</p>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-slate-800 bg-slate-50 p-3 rounded whitespace-pre-line">
                    {`"Dr. Sorriso.
                    Você estudou Implantodontia pra fazer clareamento de R$ 200?
                    
                    Eu sei que Protocolo e Lente de Contato dão lucro. O problema é: como achar esse paciente?
                    
                    Spoiler: Ele não tá vendo dancinha. Ele tá no Google pesquisando 'Implante carga imediata'.
                    
                    Se você não aparecer lá, você perdeu R$ 15.000 pro concorrente. Simples assim.
                    
                    Vamos lotar sua cadeira de particular e deixar o convênio pra quem tá começando?
                    Clica abaixo."`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agendamed">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                  AgendaMed Pro - Sistema de Agendamento
                </CardTitle>
                <CardDescription>
                  O SaaS que agrega valor ao seu serviço e facilita o trabalho das secretárias
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* What is it */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">O que é o AgendaMed Pro?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    É um sistema web exclusivo da AlavancaMed que você entrega para cada cliente. A secretária da
                    clínica acessa pelo navegador e consegue:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Ver todos os agendamentos em um calendário visual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Criar novos agendamentos direto pelo sistema (não precisa de papel ou Excel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Confirmar ou cancelar consultas com 1 clique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Adicionar observações sobre cada paciente</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-slate-200" />

                {/* Why it adds value */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Por que isso agrega valor?</h3>
                  <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                    <p className="text-blue-900 font-medium">
                      A maioria das agências só entrega "anúncios". Você vai entregar uma SOLUÇÃO COMPLETA:
                    </p>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">1.</span>
                        <span>
                          <strong>Tráfego Pago:</strong> Você traz os leads qualificados.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">2.</span>
                        <span>
                          <strong>Landing Page:</strong> Página de conversão profissional.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">3.</span>
                        <span>
                          <strong>AgendaMed:</strong> Sistema para a secretária organizar os pacientes.
                        </span>
                      </li>
                    </ul>
                    <p className="text-blue-900 mt-4">
                      O médico vê você como um <strong>parceiro estratégico</strong>, não só mais uma agência. Isso
                      justifica mensalidades mais altas (R$ 3.000 - R$ 5.000).
                    </p>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* How to use - Secretary perspective */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Como a Secretária Usa (Passo a Passo)</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg text-slate-900 mb-2">Passo 1: Login</h4>
                      <p className="text-slate-700 mb-3">
                        Você (AlavancaMed) cria um código único para cada clínica. Exemplo:{" "}
                        <code className="bg-slate-100 px-2 py-1 rounded text-sm">CLINICADRA2025</code>
                      </p>
                      <p className="text-slate-700">
                        A secretária acessa <strong>alavancamed.com.br/agenda</strong>, digita o código e entra no
                        sistema.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-lg text-slate-900 mb-2">Passo 2: Criar Agendamento</h4>
                      <p className="text-slate-700 mb-3">
                        Quando um paciente liga querendo agendar, ela clica em <strong>"Novo Agendamento"</strong> e
                        preenche:
                      </p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>- Nome do paciente</li>
                        <li>- Telefone</li>
                        <li>- Procedimento desejado (Ex: Botox, Harmonização)</li>
                        <li>- Data e horário</li>
                        <li>- Observações (opcional)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-lg text-slate-900 mb-2">Passo 3: Confirmar Consulta</h4>
                      <p className="text-slate-700">
                        Um dia antes da consulta, a secretária abre o sistema, vê os agendamentos do dia seguinte e liga
                        para confirmar. Depois, clica no botão <strong>"Confirmar"</strong>.
                      </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-lg text-slate-900 mb-2">Passo 4: Cancelar (se necessário)</h4>
                      <p className="text-slate-700">
                        Se o paciente desmarcar, ela clica em <strong>"Cancelar"</strong> e o horário fica livre para
                        outro paciente.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* Automation Plan */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Plano de Automação (Futuro)</h3>
                  <p className="text-slate-700">
                    Atualmente, o AgendaMed funciona manualmente (a secretária digita tudo). Mas você pode evoluir para
                    um sistema AUTOMÁTICO:
                  </p>

                  <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-xl">Fluxo Automatizado Completo</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <p>
                          <strong>Paciente clica no anúncio</strong> e cai numa Landing Page (que você criou no v0).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <p>
                          <strong>Paciente preenche formulário</strong> com Nome, Telefone e Procedimento Desejado.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </div>
                        <p>
                          <strong>n8n captura os dados</strong> automaticamente (via Webhook).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          4
                        </div>
                        <p>
                          <strong>n8n cria o agendamento</strong> direto no AgendaMed (via API).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          5
                        </div>
                        <p>
                          <strong>n8n manda mensagem automática</strong> no WhatsApp: "Olá Maria! Recebemos seu pedido
                          de consulta para Botox. A Dra. Ana entrará em contato para confirmar o horário."
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">
                          6
                        </div>
                        <p>
                          <strong>Secretária só confirma</strong> o horário pelo sistema. Não precisa digitar nada.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-yellow-900 text-sm">
                      <strong>Importante:</strong> Para implementar isso, você precisará de um banco de dados (Supabase
                      ou Neon) e integrar com n8n. Mas não se preocupe com isso agora. Venda o serviço manual primeiro,
                      gere receita, e depois invista tempo aprendendo a automação.
                    </p>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* How to sell it */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Como Vender o AgendaMed para o Cliente</h3>
                  <div className="bg-green-50 p-6 rounded-lg space-y-4">
                    <p className="text-green-900 font-medium">Script de Venda:</p>
                    <div className="bg-white p-4 rounded border border-green-200 text-slate-700 italic">
                      "Doutor, além dos anúncios e do site, eu também entrego um sistema exclusivo para sua secretária
                      organizar os agendamentos. É tipo um 'mini-CRM' super fácil de usar. Ela vai parar de perder
                      consulta anotada em papel. Tudo fica registrado no sistema, com data, horário e observações.
                      <br />
                      <br />
                      Isso já está incluso no pacote, sem custo adicional."
                    </div>
                    <p className="text-green-900 text-sm">
                      Ao posicionar o AgendaMed como um <strong>"brinde de valor"</strong>, você aumenta a percepção de
                      entrega e justifica mensalidades mais altas.
                    </p>
                  </div>
                </div>

                <hr className="border-slate-200" />

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Como Criar o Sistema para Cada Cliente</h3>
                  <p className="text-slate-700">
                    Você não usa um sistema único para todos. Cada clínica tem seu próprio link com procedimentos
                    específicos.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg space-y-4">
                    <h4 className="font-bold text-lg text-blue-900">Passo a Passo da Entrega</h4>
                    <ol className="space-y-3 text-blue-800">
                      <li className="flex items-start gap-3">
                        <span className="font-bold">1.</span>
                        <div>
                          <strong>Identifique a especialidade:</strong> Cirurgião Plástico, Dermatologista ou Dentista.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold">2.</span>
                        <div>
                          <strong>Escolha o link correto:</strong>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>
                              - Cirurgia Plástica:{" "}
                              <code className="bg-white px-2 py-1 rounded">alavancamed.com.br/agenda/plastica</code>
                            </li>
                            <li>
                              - Dermatologia:{" "}
                              <code className="bg-white px-2 py-1 rounded">alavancamed.com.br/agenda/dermato</code>
                            </li>
                            <li>
                              - Odontologia:{" "}
                              <code className="bg-white px-2 py-1 rounded">alavancamed.com.br/agenda/odonto</code>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold">3.</span>
                        <div>
                          <strong>Crie um código único:</strong> Ex:{" "}
                          <code className="bg-white px-2 py-1 rounded">DRARODRIGO2025</code> ou{" "}
                          <code className="bg-white px-2 py-1 rounded">DRACARLA2025</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold">4.</span>
                        <div>
                          <strong>Envie o acesso:</strong> Mande o link + código para a secretária por WhatsApp.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold">5.</span>
                        <div>
                          <strong>Faça um treinamento rápido:</strong> 15 minutos por videochamada mostrando como usar.
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-yellow-900 text-sm">
                      <strong>Importante:</strong> Cada especialidade tem procedimentos diferentes. Por exemplo, o
                      Dentista não precisa ver "Botox" na lista, e o Dermatologista não precisa ver "Implante Dentário".
                      Por isso criamos sistemas separados.
                    </p>
                  </div>
                </div>

                <hr className="border-slate-200" />

                {/* Quick start */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Como Começar Agora (Manual)</h3>
                  <ol className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>
                        <strong>Feche o primeiro cliente.</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>
                        <strong>Crie um código único</strong> para a clínica dele (Ex: DRARODRIGO2025).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>
                        <strong>Mande o link</strong>{" "}
                        <code className="bg-slate-100 px-2 py-1 rounded text-sm">alavancamed.com.br/agenda</code> para a
                        secretária com o código de acesso.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-600">4.</span>
                      <span>
                        <strong>Faça um treinamento rápido</strong> (15 minutos por Zoom) mostrando como usar.
                      </span>
                    </li>
                  </ol>
                  <div className="bg-slate-100 p-4 rounded-lg mt-4">
                    <p className="text-slate-700 text-sm">
                      <strong>Nota:</strong> Atualmente, os dados ficam apenas no navegador (localStorage). Para
                      produção real, você precisará conectar um banco de dados. Mas para demonstração e primeiros
                      clientes, funciona perfeitamente.
                    </p>
                  </div>
                </div>

                {/* Access button */}
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <Link href="/agenda/plastica">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Cirurgia Plástica
                    </Button>
                  </Link>
                  <Link href="/agenda/dermato">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Dermatologia
                    </Button>
                  </Link>
                  <Link href="/agenda/odonto">
                    <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Odontologia
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ESTRATÉGIA */}
          <TabsContent value="sales" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano de Guerra: Segunda-feira</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">1. Arrumar a Casa</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-blue-800">
                      <li>Postar 6 conteúdos no Feed (Grid Vitrine)</li>
                      <li>3 Posts Estáticos (Dor, Desejo, Lógica)</li>
                      <li>3 Reels/Provas Sociais (Use o Gerador)</li>
                      <li>Bio Otimizada com Link do Site</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="font-bold text-green-900 mb-2">2. Prospecção Ativa</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-green-800">
                      <li>Google Maps: Buscar "Clínica Estética"</li>
                      <li>Filtrar quem não tem site ou tem site ruim</li>
                      <li>Enviar Script da Calculadora no WhatsApp</li>
                      <li>Meta: 20 contatos por dia</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-purple-900 mb-2">3. Tráfego Pago</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-purple-800">
                      <li>Meta Ads (IG/FB) - Foco em "Direct"</li>
                      <li>Público: Interesse em Medicina/Odonto</li>
                      <li>Raio: Sua cidade + Cidades vizinhas ricas</li>
                      <li>Orçamento: R$ 30-50/dia inicial</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ADS */}
          <TabsContent value="delivery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Criativo 1: A Dor (Médico vs Influencer)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Visual Sugerido</h4>
                    <p className="text-sm text-slate-600">
                      Vídeo de um médico cansado olhando o celular ou dançando em trend (ridicularizando levemente).
                      Texto na tela: "Estudou medicina pra virar tiktoker?"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legenda (Copy)</h4>
                    <p className="font-mono text-xs text-slate-800 bg-slate-100 p-3 rounded">
                      DR, seja sincero: Você estudou anos pra ser médico… ou pra virar influencer?
                      <br />
                      <br />
                      Você não abriu um consultório pra viver de likes. Você abriu pra lucrar.
                      <br />
                      <br />
                      Enquanto você perde tempo tentando engajar, existem pacientes prontos para pagar e realizar o
                      procedimento, procurando agora no Google pelo profissional ideal.
                      <br />
                      <br />
                      Nós da AlavancaMed não vendemos curtidas. Nós levamos até seu consultório pacientes que já querem
                      o procedimento.
                      <br />
                      <br />A matemática é simples. Simule seu lucro no link da bio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Criativo 2: A Lógica (Calculadora)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Visual Sugerido</h4>
                    <p className="text-sm text-slate-600">
                      Gravação de tela do seu site, preenchendo a Calculadora de ROI. Mostre o número do "Faturamento
                      Extra" crescendo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legenda (Copy)</h4>
                    <p className="font-mono text-xs text-slate-800 bg-slate-100 p-3 rounded">
                      A matemática não mente. 🧮
                      <br />
                      <br />
                      Doutor, pare de "achar" e comece a calcular. Cada dia sem anunciar no Google é um paciente de R$
                      10.000 que vai para o seu concorrente.
                      <br />
                      <br />
                      Fizemos uma ferramenta gratuita para você simular o potencial real do seu consultório.
                      <br />
                      <br />
                      Clique no link e veja quanto dinheiro você está deixando na mesa hoje.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NOSSO FUNIL (AGÊNCIA) */}
          <TabsContent value="tools" className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle>Funil de Vendas da AlavancaMed</CardTitle>
                <p className="text-sm text-slate-600">
                  Como nós (Agência) captamos as Clínicas (Clientes). Este é o fluxo que você deve seguir para vender.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {/* ETAPA 1 */}
                  <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Atração
                    </div>
                    <h3 className="font-bold text-lg mt-2 mb-2">Tráfego Pago + Orgânico</h3>
                    <p className="text-sm text-slate-600 mb-4">Onde o médico nos encontra.</p>
                    <div className="text-left space-y-2 text-sm bg-slate-50 p-3 rounded">
                      <p>
                        <strong>1. Ads (Instagram):</strong>
                        <br />
                        "Médico ou Influencer?" jogando para o Site.
                      </p>
                      <p>
                        <strong>2. Google Maps (Ativo):</strong>
                        <br />
                        Você busca a clínica e manda o script no WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* SETA */}
                  <div className="hidden md:flex items-center justify-center text-blue-300">
                    <TrendingUp className="h-8 w-8 rotate-90 md:rotate-0" />
                  </div>

                  {/* ETAPA 2 */}
                  <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Consciência
                    </div>
                    <h3 className="font-bold text-lg mt-2 mb-2">O Site (Autoridade)</h3>
                    <p className="text-sm text-slate-600 mb-4">Onde ele entende que perde dinheiro.</p>
                    <div className="text-left space-y-2 text-sm bg-slate-50 p-3 rounded">
                      <p>
                        <strong>A Calculadora:</strong>
                        <br />
                        Ele preenche e vê o prejuízo de não anunciar.
                      </p>
                      <p>
                        <strong>A Prova:</strong>
                        <br />
                        Vê que somos especialistas (não sobrinhos).
                      </p>
                    </div>
                  </div>

                  {/* SETA */}
                  <div className="hidden md:flex items-center justify-center text-green-300">
                    <TrendingUp className="h-8 w-8 rotate-90 md:rotate-0" />
                  </div>

                  {/* ETAPA 3 */}
                  <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Conversão
                    </div>
                    <h3 className="font-bold text-lg mt-2 mb-2">WhatsApp (Fechamento)</h3>
                    <p className="text-sm text-slate-600 mb-4">Onde o contrato é assinado.</p>
                    <div className="text-left space-y-2 text-sm bg-slate-50 p-3 rounded">
                      <p>
                        <strong>Botão "Falar com Especialista":</strong>
                        <br />O lead vem quente do site.
                      </p>
                      <p>
                        <strong>Call/Reunião:</strong>
                        <br />
                        Apresenta a proposta e fecha o contrato.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ Por que mandar para o Site e não direto pro Zap?</h4>
                  <p className="text-sm text-yellow-800">
                    Para vender contrato de R$ 2.000+, você precisa de <strong>Autoridade</strong>.
                    <br />
                    Se mandar direto pro WhatsApp, parece "freelancer desesperado".
                    <br />
                    Quando passa pelo site (Calculadora), ele chega educado e respeitando sua empresa.
                    <br />
                    <strong>Exceção:</strong> Na prospecção ativa (Google Maps), você já manda direto pro Zap dele, mas
                    envia o link da Calculadora para provar seu valor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp-automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automação de Lembretes por WhatsApp</CardTitle>
                <CardDescription>
                  Como enviar mensagens automáticas 3 dias antes e no dia do agendamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <h3 className="font-bold text-blue-900 mb-2">Visão Geral</h3>
                  <p className="text-sm text-slate-700">
                    Para enviar lembretes automáticos, você precisa conectar 3 peças:{" "}
                    <strong>(1) Sistema de Agendamento</strong> (AgendaMed),{" "}
                    <strong>(2) Ferramenta de Automação</strong> (n8n ou Make), e <strong>(3) API de WhatsApp</strong>{" "}
                    (Evolution API ou oficial).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Opção 1: Começar Manual (Recomendado)</h3>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                    <h4 className="font-bold text-yellow-900 mb-2">Para os Primeiros Clientes</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Não complique no início. Use este processo manual até ter 5+ clientes fechados:
                    </p>
                    <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                      <li>A secretária agenda no AgendaMed normalmente</li>
                      <li>Todo dia às 8h da manhã, ela abre o sistema e vê os agendamentos dos próximos 3 dias</li>
                      <li>
                        Envia uma mensagem manual no WhatsApp: "Olá [Nome], confirmo sua consulta para [Procedimento] no
                        dia [Data] às [Hora]. Qualquer dúvida, estou à disposição!"
                      </li>
                      <li>
                        No dia anterior, envia outra: "Olá [Nome], amanhã às [Hora] temos sua consulta marcada. Te
                        esperamos!"
                      </li>
                    </ol>
                    <p className="text-sm text-slate-700 mt-3 font-bold">
                      Isso leva 10 minutos por dia e já reduz falta em 70%.
                    </p>
                  </div>
                </div>

                <hr className="border-slate-300" />

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Opção 2: Automação Completa (Escala)</h3>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                    <h4 className="font-bold text-green-900 mb-2">Quando Automatizar?</h4>
                    <p className="text-sm text-slate-700">
                      Quando você tiver 5+ clínicas contratadas e a secretária não conseguir mais enviar manualmente. Aí
                      sim vale o investimento em automação.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-300 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2">Ferramentas Necessárias</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">1.</span>
                          <div>
                            <strong>Banco de Dados:</strong> Supabase ou Neon (para guardar os agendamentos)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">2.</span>
                          <div>
                            <strong>Automação:</strong> n8n (grátis e open-source) ou Make (pago, mais fácil)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">3.</span>
                          <div>
                            <strong>WhatsApp API:</strong> Evolution API (grátis) ou WhatsApp Business API oficial
                            (pago)
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-slate-300 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-2">Custo Aproximado</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>
                          <strong>Supabase:</strong> Grátis até 500MB
                        </li>
                        <li>
                          <strong>n8n:</strong> Grátis (self-hosted) ou $20/mês (cloud)
                        </li>
                        <li>
                          <strong>Evolution API:</strong> Grátis (self-hosted) ou $15/mês (cloud)
                        </li>
                        <li className="pt-2 border-t border-slate-300">
                          <strong>Total:</strong> R$ 0 (fazendo você mesmo) ou ~R$ 180/mês (tudo na nuvem)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-300" />

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Passo a Passo da Automação</h3>

                  <div className="space-y-4">
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Etapa 1: Conectar AgendaMed ao Banco de Dados</h4>
                      <p className="text-sm text-slate-700 mb-2">
                        Quando a secretária agenda um paciente no AgendaMed, os dados (Nome, Telefone, Data, Hora,
                        Procedimento) são salvos automaticamente no Supabase.
                      </p>
                      <p className="text-sm text-slate-600 italic">
                        Isso exige adicionar código no AgendaMed para enviar os dados via API para o Supabase.
                      </p>
                    </div>

                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">
                        Etapa 2: Configurar n8n para Verificar Agendamentos
                      </h4>
                      <p className="text-sm text-slate-700 mb-3">
                        No n8n, você cria um "workflow" que roda automaticamente todo dia às 8h da manhã:
                      </p>
                      <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                        <li>Busca no Supabase todos os agendamentos que acontecem em 3 dias</li>
                        <li>Para cada agendamento, monta a mensagem personalizada</li>
                        <li>Envia a mensagem via Evolution API (WhatsApp)</li>
                      </ol>
                    </div>

                    <div className="bg-slate-100 p-4 rounded-lg">
                      <h4 className="font-bold text-slate-900 mb-2">Etapa 3: Configurar Evolution API (WhatsApp)</h4>
                      <p className="text-sm text-slate-700 mb-2">
                        A Evolution API permite que você envie mensagens automáticas pelo WhatsApp sem ser bloqueado.
                      </p>
                      <p className="text-sm text-slate-700 mb-2">
                        Você instala ela num servidor (pode usar Railway ou Render, ambos têm plano grátis) e conecta o
                        número da clínica escaneando um QR Code (igual WhatsApp Web).
                      </p>
                      <p className="text-sm text-slate-600 italic">
                        Uma vez conectada, o n8n consegue mandar mensagens através da API da Evolution.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-300" />

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Template das Mensagens Automáticas</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-blue-300 bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-2">Lembrete 3 Dias Antes</h4>
                      <p className="font-mono text-xs text-slate-800 whitespace-pre-line bg-white p-3 rounded">
                        {`Olá [Nome]! 👋

Confirmo sua consulta para *[Procedimento]* na *Clínica [Nome da Clínica]*.

📅 Data: [Dia/Mês]
🕐 Horário: [Hora]
📍 Endereço: [Endereço]

Qualquer dúvida, estou à disposição!

Atenciosamente,
[Nome da Secretária]`}
                      </p>
                    </div>

                    <div className="border border-green-300 bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-900 mb-2">Lembrete no Dia (Manhã)</h4>
                      <p className="font-mono text-xs text-slate-800 whitespace-pre-line bg-white p-3 rounded">
                        {`Bom dia, [Nome]! ☀️

Hoje é o grande dia! Te esperamos para *[Procedimento]* às *[Hora]*.

📍 [Endereço]
🚗 Lembre-se de chegar 10 minutos antes.

Até logo!
[Nome da Secretária]`}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-300" />

                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                  <h4 className="font-bold text-purple-900 mb-2">Alternativa Intermediária: Zapier + Planilha</h4>
                  <p className="text-sm text-slate-700 mb-3">Se você não quer mexer com código mas quer automatizar:</p>
                  <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                    <li>A secretária agenda e também anota numa Planilha do Google Sheets</li>
                    <li>Usa o Zapier para monitorar essa planilha</li>
                    <li>Quando chega 3 dias antes da data, o Zapier envia uma mensagem via WhatsApp Business API</li>
                  </ol>
                  <p className="text-sm text-slate-700 mt-3">
                    <strong>Custo:</strong> Zapier começa em $20/mês + WhatsApp Business API (~$5-10/mês).
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h4 className="font-bold text-red-900 mb-2">⚠️ Importante: Evite Bloqueios</h4>
                  <p className="text-sm text-slate-700">
                    O WhatsApp bloqueia números que enviam muitas mensagens automáticas em sequência. Por isso:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700 list-disc list-inside mt-2">
                    <li>Use números diferentes para cada clínica (não centralize tudo num número só)</li>
                    <li>Evite enviar mais de 30 mensagens por dia por número</li>
                    <li>Se possível, use a WhatsApp Business API oficial (não bloqueia, mas é mais cara)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Minha Recomendação Final</h3>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <strong>1-5 Clientes:</strong> Manual. A secretária envia no braço. Rápido e funcional.
                    </li>
                    <li>
                      <strong>5-15 Clientes:</strong> Use Zapier + Google Sheets (intermediário, sem código).
                    </li>
                    <li>
                      <strong>15+ Clientes:</strong> Invista em n8n + Supabase + Evolution API (100% automatizado).
                    </li>
                  </ol>
                  <p className="text-sm mt-4 italic">
                    Não automatize antes de ter escala. É perda de tempo e dinheiro.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <SiteFooter />
    </div>
  )
}
