import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Target, Video, TrendingUp, Users, Zap, Instagram, Play } from "lucide-react"

export default function LancamentoPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteHeader />

      <div className="container mx-auto p-4 md:p-8 space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <p className="text-green-400 font-semibold mb-2">PLANO DE GUERRA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lançamento AlavancaMed</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O plano completo para dominar o Instagram, fechar contratos e escalar sua agência de marketing médico.
          </p>
        </div>

        <Tabs defaultValue="grid" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-slate-800">
            <TabsTrigger value="grid">Grid Vitrine</TabsTrigger>
            <TabsTrigger value="nicho">Nicho Inicial</TabsTrigger>
            <TabsTrigger value="copys">Copys Virais</TabsTrigger>
            <TabsTrigger value="anuncios">Anúncios</TabsTrigger>
            <TabsTrigger value="entrega">Entrega Social</TabsTrigger>
          </TabsList>

          {/* TAB 1: GRID VITRINE */}
          <TabsContent value="grid" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Instagram className="h-6 w-6 text-pink-500" />
                  Quantos Posts Antes de Anunciar?
                </CardTitle>
                <CardDescription className="text-slate-400">
                  A resposta dos 10 CEOs das maiores agências do mundo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-lg">
                  <h3 className="text-3xl font-bold mb-2">9 Posts. Nem mais, nem menos.</h3>
                  <p className="text-white/90">
                    Você precisa de um "Grid Vitrine" - 9 posts que provam que você é real, profissional e sabe o que
                    faz. O médico vai entrar no seu perfil para te julgar. Se tiver 3 posts feios, ele foge. Se tiver 9
                    posts profissionais com a identidade visual da AlavancaMed, ele confia.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-white mt-8 mb-4">Os 9 Posts Obrigatórios:</h4>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Post 1 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="text-blue-400 font-bold mb-2">Post 1 - MANIFESTO</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Reels (vídeo)</p>
                    <p className="text-xs text-slate-400">
                      O vídeo principal com a copy "Médico ou Influencer?" que você já tem. Esse é o vídeo que vai rodar
                      como anúncio.
                    </p>
                  </div>

                  {/* Post 2 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="text-green-400 font-bold mb-2">Post 2 - PROVA</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Carrossel</p>
                    <p className="text-xs text-slate-400">
                      Título: "A Matemática do Lucro" Mostre os números: investimento vs retorno. Use prints da sua
                      Calculadora funcionando.
                    </p>
                  </div>

                  {/* Post 3 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="text-purple-400 font-bold mb-2">Post 3 - AUTORIDADE</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Imagem estática</p>
                    <p className="text-xs text-slate-400">
                      Título: "Especialistas em Médicos e Dentistas" Imagem clean com a logo e uma frase de
                      posicionamento.
                    </p>
                  </div>

                  {/* Post 4 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="text-yellow-400 font-bold mb-2">Post 4 - DOR</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Reels (vídeo)</p>
                    <p className="text-xs text-slate-400">
                      Vídeo curto tocando na dor: "Sua agenda tem buracos?" Stock footage de consultório vazio + sua
                      narração.
                    </p>
                  </div>

                  {/* Post 5 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-pink-500">
                    <div className="text-pink-400 font-bold mb-2">Post 5 - FERRAMENTA</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Reels (gravação de tela)</p>
                    <p className="text-xs text-slate-400">
                      Grave você usando a Calculadora de Faturamento. Mostre os números subindo. "Veja quanto você deixa
                      na mesa."
                    </p>
                  </div>

                  {/* Post 6 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="text-red-400 font-bold mb-2">Post 6 - RESULTADO</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Imagem (Print de Chat)</p>
                    <p className="text-xs text-slate-400">
                      Use o Gerador de Chat do seu /marketing para criar: "Doutor, a agenda de amanhã lotou!"
                    </p>
                  </div>

                  {/* Post 7 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-cyan-500">
                    <div className="text-cyan-400 font-bold mb-2">Post 7 - MÉTODO</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Carrossel</p>
                    <p className="text-xs text-slate-400">
                      "Os 3 Pilares do Marketing Médico que Funciona" 1. Site que converte 2. Google Ads 3. Funil de
                      agendamento
                    </p>
                  </div>

                  {/* Post 8 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                    <div className="text-orange-400 font-bold mb-2">Post 8 - BASTIDORES</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Reels (vídeo)</p>
                    <p className="text-xs text-slate-400">
                      Você trabalhando: computador, gráficos, análise. Mostra que você é real e profissional.
                    </p>
                  </div>

                  {/* Post 9 */}
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-emerald-500">
                    <div className="text-emerald-400 font-bold mb-2">Post 9 - CTA</div>
                    <p className="text-sm text-slate-300 mb-2">Formato: Imagem estática</p>
                    <p className="text-xs text-slate-400">
                      "Pronto para lotar sua agenda?" Call-to-action direto para o link na bio.
                    </p>
                  </div>
                </div>

                <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-green-400 mb-2">Regra de Ouro:</h4>
                  <p className="text-slate-300">
                    <strong>3 Reels + 3 Carrosséis + 3 Imagens Estáticas = Grid Perfeito.</strong>
                    <br />
                    Isso mostra variedade e profissionalismo. Depois disso, você pode começar a anunciar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: NICHO INICIAL */}
          <TabsContent value="nicho" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Target className="h-6 w-6 text-red-500" />
                  Por Qual Nicho Começar?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Comece por CIRURGIÃO PLÁSTICO.</h3>
                  <p className="text-white/90">
                    Não teste os 3 ao mesmo tempo. Você vai gastar 3x mais verba e ter resultados diluídos. Domine um
                    nicho, crie case, depois expanda.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-white mt-8 mb-4">Por que Cirurgião Plástico Primeiro?</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Ticket Médio Altíssimo</h5>
                        <p className="text-sm text-slate-400">
                          Uma Rinoplastia = R$ 15.000 a R$ 30.000. O médico paga seu fee com 1 cirurgia fechada.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Dor Clara e Urgente</h5>
                        <p className="text-sm text-slate-400">
                          Eles ODEIAM fazer conteúdo. Odeiam dançar. Odeiam virar influencer. Sua mensagem ressoa
                          imediatamente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Intenção de Busca Forte</h5>
                        <p className="text-sm text-slate-400">
                          "Preço Silicone SP" tem milhares de buscas/mês. Paciente já quer operar, só precisa achar o
                          médico.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Ego Alto = Venda Fácil</h5>
                        <p className="text-sm text-slate-400">
                          Cirurgiões plásticos têm ego. Quando você mostra que o concorrente está aparecendo no Google e
                          ele não, dói.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Case Poderoso</h5>
                        <p className="text-sm text-slate-400">
                          "Ajudamos cirurgião plástico a faturar R$ 150k/mês com Google Ads" é muito mais sexy que
                          "ajudamos dentista".
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-white">Seu Site Já Tem Demo</h5>
                        <p className="text-sm text-slate-400">
                          Você já tem a página de exemplo de Cirurgia Plástica pronta. É só mostrar e fechar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700 p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-white mb-4">Ordem de Expansão (Depois de 3 Clientes):</h4>
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <div className="bg-blue-600 px-6 py-3 rounded-lg text-center">
                      <div className="font-bold">1. Cirurgião Plástico</div>
                      <div className="text-xs opacity-80">Mês 1-2</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-purple-600 px-6 py-3 rounded-lg text-center">
                      <div className="font-bold">2. Dentista (Implante)</div>
                      <div className="text-xs opacity-80">Mês 3-4</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-pink-600 px-6 py-3 rounded-lg text-center">
                      <div className="font-bold">3. Dermatologista</div>
                      <div className="text-xs opacity-80">Mês 5+</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: COPYS VIRAIS */}
          <TabsContent value="copys" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Video className="h-6 w-6 text-purple-500" />
                  Copys de Vídeos Virais
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Scripts prontos para gravar. Use stock footage do Envato Elements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* VIRAL 1 - MANIFESTO */}
                <div className="border border-red-500 rounded-lg overflow-hidden">
                  <div className="bg-red-600 p-4">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Vídeo 1: O MANIFESTO (Principal - Para Anúncio)
                    </h3>
                    <p className="text-sm opacity-90">
                      Duração: 45-60 segundos | Stock: Médico no consultório + Pessoa dançando
                    </p>
                  </div>
                  <div className="bg-slate-900 p-6">
                    <p className="font-mono text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                      {`[CENA: Médico olhando o celular frustrado]

DR, SEJA SINCERO:

Você estudou 10 anos pra ser médico... ou pra virar influencer?

[CENA: Pessoa dançando no TikTok]

Enquanto você perde tempo editando Reels e tentando viralizar...

[CENA: Pessoa digitando no Google "cirurgião plástico perto de mim"]

Tem paciente PRONTO pra pagar R$ 15.000 numa cirurgia...
Pesquisando AGORA no Google.

E adivinha? Ele não tá procurando dancinha.
Ele tá procurando RESULTADO.

[CENA: Consultório vazio vs Consultório lotado]

A pergunta é: ele vai achar VOCÊ ou o seu concorrente?

Nós da AlavancaMed não vendemos curtida.
Nós colocamos paciente particular na sua cadeira.

A matemática é simples.
A decisão é sua.

[CENA: Tela do site com a calculadora]

Link na bio. Simule seu faturamento em 30 segundos.`}
                    </p>
                  </div>
                </div>

                {/* VIRAL 2 - A CONTA */}
                <div className="border border-green-500 rounded-lg overflow-hidden">
                  <div className="bg-green-600 p-4">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Vídeo 2: A CONTA (Lógica Matemática)
                    </h3>
                    <p className="text-sm opacity-90">Duração: 30-40 segundos | Stock: Gráficos subindo + Dinheiro</p>
                  </div>
                  <div className="bg-slate-900 p-6">
                    <p className="font-mono text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                      {`[CENA: Números aparecendo na tela]

Vou te mostrar uma conta que vai doer.

Uma Rinoplastia: R$ 20.000
Custo do Google Ads por mês: R$ 2.000
Pacientes que fecham: 3 a 5

[CENA: Calculadora mostrando os números]

Investimento: R$ 2.000
Retorno: R$ 60.000 a R$ 100.000

Isso é 30x de retorno.

[CENA: Médico atendendo paciente feliz]

Enquanto isso, você tá gastando R$ 0 em anúncio...
E perdendo R$ 60.000 por mês pra quem anuncia.

A matemática não mente.
E o Google não espera.

Clica no link. Faz sua simulação.
Descobre quanto você tá deixando na mesa.`}
                    </p>
                  </div>
                </div>

                {/* VIRAL 3 - O CONCORRENTE */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden">
                  <div className="bg-yellow-600 p-4 text-slate-900">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Vídeo 3: O CONCORRENTE (Medo de Perder)
                    </h3>
                    <p className="text-sm opacity-90">Duração: 25-35 segundos | Stock: Dois consultórios lado a lado</p>
                  </div>
                  <div className="bg-slate-900 p-6">
                    <p className="font-mono text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                      {`[CENA: Tela do Google mostrando resultados de busca]

Pesquisa comigo aqui:
"Cirurgião Plástico + [Sua Cidade]"

[CENA: Zoom nos primeiros resultados]

Tá vendo esses 3 primeiros resultados?
São anúncios.

Sabe o que isso significa?

[CENA: Split screen - consultório cheio vs vazio]

Enquanto você tá postando stories...
Esses médicos estão ROUBANDO seus pacientes.

Pacientes que já queriam operar.
Pacientes que já tinham o dinheiro.
Pacientes que eram PRA SER SEUS.

[CENA: Pessoa clicando no anúncio]

Todo clique que vai pra eles... é dinheiro saindo do seu bolso.

A pergunta não é SE você deve anunciar.
É quantos pacientes você vai perder até começar.

Link na bio.`}
                    </p>
                  </div>
                </div>

                {/* VIRAL 4 - SEGMENTADO PLÁSTICA */}
                <div className="border border-blue-500 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 p-4">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Vídeo 4: CIRURGIÃO PLÁSTICO (Nicho Específico)
                    </h3>
                    <p className="text-sm opacity-90">
                      Duração: 40-50 segundos | Stock: Cirurgia + Resultados de procedimentos
                    </p>
                  </div>
                  <div className="bg-slate-900 p-6">
                    <p className="font-mono text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                      {`[CENA: Mãos de cirurgião com luvas]

Doutor, uma pergunta séria:

A prótese de silicone que você coloca...
Depende da sua dancinha no TikTok pra ficar boa?

[Pausa]

Não, né?

[CENA: Pessoa gravando dancinha]

Então por que você tá gastando 2 horas por dia editando vídeo...
E ZERO horas atraindo quem quer operar de verdade?

[CENA: Mulher pesquisando no celular "prótese de silicone preço"]

Agora mesmo tem mulher pesquisando:
"Rinoplastia valor"
"Lipo HD preço"
"Silicone natural"

[CENA: Consultório moderno de cirurgião]

Ela não quer ver você dançando.
Ela quer ver RESULTADO. E AGENDAR.

Nós colocamos você na frente dela.
Sem dancinha. Sem palhaçada.

Só estratégia que converte em cirurgia.

Link na bio. Simule seu retorno.`}
                    </p>
                  </div>
                </div>

                {/* DICAS DE PRODUÇÃO */}
                <div className="bg-purple-900/30 border border-purple-500 p-6 rounded-lg">
                  <h4 className="font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Dicas de Produção (Envato Elements)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>
                      <h5 className="font-bold text-white mb-2">Buscar no Envato:</h5>
                      <ul className="space-y-1">
                        <li>• "doctor office" / "medical clinic"</li>
                        <li>• "surgeon hands" / "plastic surgery"</li>
                        <li>• "person using phone" / "google search"</li>
                        <li>• "money growth" / "business success"</li>
                        <li>• "empty waiting room" vs "busy clinic"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-2">Estrutura do Vídeo:</h5>
                      <ul className="space-y-1">
                        <li>• Hook nos primeiros 3 segundos (pergunta provocativa)</li>
                        <li>• Trocar cena a cada 3-5 segundos</li>
                        <li>• Texto na tela reforçando a fala</li>
                        <li>• Música tensa/épica de fundo (baixa)</li>
                        <li>• CTA claro no final (link na bio)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 4: ANÚNCIOS */}
          <TabsContent value="anuncios" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Configuração dos Anúncios (Meta Ads)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold text-red-400 mb-2">NUNCA use o botão "Impulsionar"!</h4>
                  <p className="text-slate-300">
                    O botão de impulsionar do Instagram é para ganhar likes, não clientes. Sempre use o Gerenciador de
                    Anúncios (business.facebook.com).
                  </p>
                </div>

                <h4 className="text-xl font-bold text-white mt-6 mb-4">Passo a Passo para Criar a Campanha:</h4>

                <div className="space-y-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <h5 className="font-bold text-white">Objetivo da Campanha</h5>
                    </div>
                    <p className="text-slate-300 ml-11">
                      Selecione <strong>"Leads"</strong> ou <strong>"Tráfego"</strong>. Leads se você quiser formulário
                      dentro do Facebook. Tráfego se quiser mandar para seu site (recomendado - mostra a Calculadora).
                    </p>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <h5 className="font-bold text-white">Segmentação (Público-Alvo)</h5>
                    </div>
                    <div className="text-slate-300 ml-11 space-y-2">
                      <p>
                        <strong>Localização:</strong> Brasil (ou sua cidade/estado se quiser começar local)
                      </p>
                      <p>
                        <strong>Idade:</strong> 28-55 anos
                      </p>
                      <p>
                        <strong>Interesses (adicione TODOS):</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4 text-sm">
                        <li>Cirurgia plástica</li>
                        <li>Medicina estética</li>
                        <li>Sociedade Brasileira de Cirurgia Plástica</li>
                        <li>Dermatologia</li>
                        <li>Odontologia</li>
                        <li>Empreendedorismo médico</li>
                        <li>Marketing médico</li>
                        <li>Consultório médico</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Comportamentos:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4 text-sm">
                        <li>Administradores de páginas de negócios</li>
                        <li>Proprietários de pequenas empresas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <h5 className="font-bold text-white">Orçamento</h5>
                    </div>
                    <div className="text-slate-300 ml-11">
                      <p>
                        <strong>Para começar:</strong> R$ 30-50/dia (R$ 900-1500/mês)
                      </p>
                      <p className="text-sm mt-2">
                        Com esse valor você consegue alcançar 5.000-15.000 médicos por mês. Se 1 fechar (R$ 3.500), já
                        pagou o mês inteiro.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <h5 className="font-bold text-white">Posicionamento</h5>
                    </div>
                    <p className="text-slate-300 ml-11">
                      Selecione <strong>"Posicionamentos manuais"</strong> e marque apenas:
                      <br />• Instagram Feed
                      <br />• Instagram Reels
                      <br />• Facebook Feed
                      <br />
                      <span className="text-sm text-slate-400">
                        (Desmarque Audience Network e Messenger - são lixo para B2B)
                      </span>
                    </p>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        5
                      </div>
                      <h5 className="font-bold text-white">Criativo (O Anúncio)</h5>
                    </div>
                    <p className="text-slate-300 ml-11">
                      Suba o vídeo do MANIFESTO (Vídeo 1).
                      <br />
                      <strong>Texto do Anúncio:</strong>
                    </p>
                    <div className="bg-slate-900 p-3 rounded mt-2 ml-11 text-sm font-mono">
                      Você estudou anos pra ser médico... ou pra virar influencer?
                      <br />
                      <br />
                      Enquanto você tenta viralizar, tem paciente particular pesquisando no Google e achando seu
                      concorrente.
                      <br />
                      <br />
                      Simule agora quanto você está deixando na mesa:
                      <br />👇 [LINK]
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-green-400 mb-2">Meta: Primeiro Cliente em 7-14 dias</h4>
                  <p className="text-slate-300">
                    Com R$ 50/dia de verba e os vídeos certos, você deve conseguir 5-15 leads por semana. Desses, 1-3
                    vão agendar call. E 1 deve fechar. Seu custo de aquisição ideal: R$ 500-1000 por cliente (que paga
                    R$ 3.500+).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 5: ENTREGA AUTORIDADE SOCIAL */}
          <TabsContent value="entrega" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Users className="h-6 w-6 text-pink-500" />
                  Como Entregar o Serviço "Autoridade Social"
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Passo a passo técnico para prestar o serviço de gestão de redes sociais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">O Que Você Vai Entregar por R$ 2.500/mês:</h3>
                  <ul className="space-y-1">
                    <li>• 12 posts por mês (3 por semana)</li>
                    <li>• 4 Reels editados profissionalmente</li>
                    <li>• Calendário editorial mensal</li>
                    <li>• Roteiros prontos para o médico gravar</li>
                    <li>• Legendas otimizadas com CTA</li>
                    <li>• Stories templates (o médico só preenche)</li>
                  </ul>
                </div>

                <h4 className="text-xl font-bold text-white mt-8 mb-4">Fluxo de Trabalho Semanal:</h4>

                <div className="space-y-4">
                  {/* Semana 1 do Mês */}
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-400 mb-3">Primeira Semana do Mês: PLANEJAMENTO</h5>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p>
                        <strong>Dia 1-2:</strong> Criar calendário editorial do mês inteiro
                      </p>
                      <p>
                        <strong>Dia 3:</strong> Enviar calendário para aprovação do médico
                      </p>
                      <p>
                        <strong>Dia 4-5:</strong> Escrever roteiros dos 4 Reels do mês
                      </p>
                      <p>
                        <strong>Dia 6-7:</strong> Criar designs dos posts estáticos no Canva
                      </p>
                    </div>
                  </div>

                  {/* Semanas 2-4 */}
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-bold text-green-400 mb-3">Semanas 2-4: PRODUÇÃO E POSTAGEM</h5>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p>
                        <strong>Segunda:</strong> Postar conteúdo da semana (agendar via Meta Business Suite)
                      </p>
                      <p>
                        <strong>Terça:</strong> Editar Reel que o médico gravou (CapCut ou Premiere)
                      </p>
                      <p>
                        <strong>Quarta:</strong> Postar Reel editado
                      </p>
                      <p>
                        <strong>Quinta:</strong> Criar e enviar templates de Stories
                      </p>
                      <p>
                        <strong>Sexta:</strong> Analisar métricas e ajustar estratégia
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mt-8 mb-4">Ferramentas Que Você Vai Usar:</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-bold text-white mb-2">Design e Edição</h5>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>
                        <strong>Canva Pro:</strong> R$ 45/mês - Posts e carrosséis
                      </li>
                      <li>
                        <strong>CapCut:</strong> Grátis - Edição de Reels
                      </li>
                      <li>
                        <strong>Envato Elements:</strong> R$ 80/mês - Stock footage
                      </li>
                      <li>
                        <strong>Remove.bg:</strong> Grátis - Remover fundo de fotos
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-bold text-white mb-2">Gestão e Agendamento</h5>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>
                        <strong>Meta Business Suite:</strong> Grátis - Agendar posts
                      </li>
                      <li>
                        <strong>Notion:</strong> Grátis - Calendário editorial
                      </li>
                      <li>
                        <strong>Google Drive:</strong> Grátis - Compartilhar arquivos
                      </li>
                      <li>
                        <strong>WhatsApp Business:</strong> Grátis - Comunicação com cliente
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mt-8 mb-4">Modelo de Calendário Editorial (Exemplo):</h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="bg-slate-700">
                        <th className="p-2 text-left">Semana</th>
                        <th className="p-2 text-left">Segunda</th>
                        <th className="p-2 text-left">Quarta</th>
                        <th className="p-2 text-left">Sexta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">1</td>
                        <td className="p-2">Carrossel: "5 Mitos sobre Rinoplastia"</td>
                        <td className="p-2">Reels: Antes/Depois</td>
                        <td className="p-2">Post: Depoimento paciente</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">2</td>
                        <td className="p-2">Post: Dúvida frequente</td>
                        <td className="p-2">Reels: Bastidores consultório</td>
                        <td className="p-2">Carrossel: "Como escolher seu cirurgião"</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">3</td>
                        <td className="p-2">Post: Frase motivacional</td>
                        <td className="p-2">Reels: Procedimento explicado</td>
                        <td className="p-2">Post: CTA para agendamento</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold">4</td>
                        <td className="p-2">Carrossel: "Recuperação pós-op"</td>
                        <td className="p-2">Reels: Transformação completa</td>
                        <td className="p-2">Post: Resultados do mês</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-500 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-yellow-400 mb-2">Dica de Ouro: Terceirize a Edição</h4>
                  <p className="text-slate-300">
                    Quando tiver 3+ clientes de Autoridade Social, contrate um editor freelancer.
                    <br />
                    Preço médio: R$ 30-50 por Reels editado no Workana/99Freelas.
                    <br />
                    Você cobra R$ 2.500 do cliente, paga R$ 200 pro editor = R$ 2.300 de margem.
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
