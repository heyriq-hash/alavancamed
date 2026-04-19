import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Importação dinâmica do react-pdf
    const { Document, Page, Text, View, StyleSheet, pdf, Font } = await import("@react-pdf/renderer")
    const { createElement } = await import("react")

    // Estilos premium
    const styles = StyleSheet.create({
      page: {
        backgroundColor: "#FFFFFF",
        padding: 50,
        fontFamily: "Helvetica",
      },
      cover: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      },
      coverTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#0F766E",
        textAlign: "center",
        marginBottom: 20,
      },
      coverSubtitle: {
        fontSize: 18,
        color: "#6B7280",
        textAlign: "center",
        marginBottom: 40,
      },
      coverName: {
        fontSize: 24,
        color: "#14B8A6",
        fontWeight: "bold",
        marginTop: 60,
      },
      section: {
        marginBottom: 30,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0F766E",
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#14B8A6",
        paddingBottom: 8,
      },
      text: {
        fontSize: 11,
        color: "#374151",
        lineHeight: 1.6,
        marginBottom: 10,
      },
      bullet: {
        fontSize: 11,
        color: "#374151",
        lineHeight: 1.8,
        marginLeft: 20,
        marginBottom: 6,
      },
      highlight: {
        backgroundColor: "#F0FDFA",
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: "#14B8A6",
        marginVertical: 15,
      },
      highlightText: {
        fontSize: 11,
        color: "#0F766E",
        lineHeight: 1.6,
      },
      planBox: {
        backgroundColor: "#F9FAFB",
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        marginBottom: 20,
      },
      planTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0F766E",
        marginBottom: 10,
      },
      planPrice: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#14B8A6",
        marginBottom: 10,
      },
      planDetail: {
        fontSize: 10,
        color: "#6B7280",
        lineHeight: 1.6,
        marginBottom: 5,
      },
      footer: {
        position: "absolute",
        bottom: 30,
        left: 50,
        right: 50,
        textAlign: "center",
        fontSize: 9,
        color: "#9CA3AF",
      },
    })

    // Componente PDF
    const PropostaDoc = createElement(
      Document,
      {},
      // Página 1 - Capa
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.cover },
          createElement(Text, { style: styles.coverTitle }, "Proposta Estratégica de"),
          createElement(Text, { style: styles.coverTitle }, "Crescimento Digital"),
          createElement(
            Text,
            { style: styles.coverSubtitle },
            "Construção de autoridade, pacientes e escala no digital",
          ),
          createElement(Text, { style: styles.coverName }, "Dra. Arícia Cunha"),
        ),
      ),

      // Página 2 - Visão Geral
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "1. Visão Geral"),
          createElement(
            Text,
            { style: styles.text },
            "O objetivo deste projeto é transformar a presença digital da Dra. Arícia em um ecossistema profissional completo que gere resultados consistentes e escaláveis.",
          ),
          createElement(
            View,
            { style: styles.highlight },
            createElement(Text, { style: styles.highlightText }, "✓ Pacientes para a clínica"),
            createElement(Text, { style: styles.highlightText }, "✓ Vendas de serviços online (skin coaching)"),
            createElement(Text, { style: styles.highlightText }, "✓ Formação de turmas para cursos"),
            createElement(Text, { style: styles.highlightText }, "✓ Previsibilidade de crescimento"),
          ),
          createElement(
            Text,
            { style: styles.text },
            'Este não é um projeto de "postagens em redes sociais". É a construção de uma empresa digital estruturada em torno do seu nome e expertise.',
          ),
        ),
      ),

      // Página 3 - Os 3 Pilares
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "2. Os 3 Pilares do Projeto"),

          createElement(
            View,
            { style: { marginBottom: 20 } },
            createElement(
              Text,
              { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 8 } },
              "Pilar 1: Base",
            ),
            createElement(
              Text,
              { style: styles.text },
              "Site profissional como centro do negócio. É aqui que os pacientes conhecem seus serviços, entendem sua autoridade e tomam decisão de compra.",
            ),
          ),

          createElement(
            View,
            { style: { marginBottom: 20 } },
            createElement(
              Text,
              { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 8 } },
              "Pilar 2: Captação",
            ),
            createElement(
              Text,
              { style: styles.text },
              "Páginas específicas para cada serviço e curso, otimizadas para conversão. Cada procedimento, curso ou serviço tem sua própria página de vendas.",
            ),
          ),

          createElement(
            View,
            { style: { marginBottom: 20 } },
            createElement(
              Text,
              { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 8 } },
              "Pilar 3: Aceleração",
            ),
            createElement(
              Text,
              { style: styles.text },
              "Conteúdo estratégico e anúncios direcionados para acelerar resultados e reduzir o tempo de crescimento.",
            ),
          ),
        ),
      ),

      // Página 4 - O que será construído
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "3. O que será construído"),

          createElement(
            Text,
            { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 12, marginTop: 10 } },
            "Site Institucional Completo",
          ),
          createElement(Text, { style: styles.bullet }, "• Página inicial profissional"),
          createElement(Text, { style: styles.bullet }, "• 3 páginas para procedimentos estéticos"),
          createElement(
            Text,
            { style: styles.bullet },
            "• 1 página para skin coaching online (com pagamento integrado)",
          ),
          createElement(Text, { style: styles.bullet }, "• 1 página para curso digital (com checkout automatizado)"),
          createElement(Text, { style: styles.bullet }, "• 1 página para curso presencial (formação de turmas)"),

          createElement(
            Text,
            { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 12, marginTop: 20 } },
            "Estrutura de Produtos Digitais",
          ),
          createElement(Text, { style: styles.bullet }, "• Sistema de pagamentos online integrado"),
          createElement(Text, { style: styles.bullet }, "• Checkout profissional para cursos e serviços"),
          createElement(Text, { style: styles.bullet }, "• Área de inscrição para formação de turmas"),

          createElement(
            Text,
            { style: { fontSize: 14, fontWeight: "bold", color: "#0F766E", marginBottom: 12, marginTop: 20 } },
            "Conteúdo e Posicionamento",
          ),
          createElement(Text, { style: styles.bullet }, "• Textos profissionais para todas as páginas"),
          createElement(Text, { style: styles.bullet }, "• Posicionamento estratégico claro"),
          createElement(Text, { style: styles.bullet }, "• Chamadas para ação otimizadas"),
        ),
      ),

      // Página 5 - Tecnologia
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "4. Tecnologia e Estrutura"),

          createElement(
            Text,
            { style: styles.text },
            "Todo o projeto será construído com tecnologia moderna e preparado para crescimento futuro.",
          ),

          createElement(
            View,
            { style: { marginTop: 20 } },
            createElement(
              Text,
              { style: { fontSize: 12, fontWeight: "bold", color: "#374151", marginBottom: 10 } },
              "O que isso significa na prática:",
            ),
            createElement(
              Text,
              { style: styles.bullet },
              "• Instalação de ferramentas de rastreamento - você saberá exatamente quantas pessoas visitam cada página",
            ),
            createElement(
              Text,
              { style: styles.bullet },
              "• Organização de dados dos visitantes - quem se interessou por cada serviço ficará registrado",
            ),
            createElement(
              Text,
              { style: styles.bullet },
              "• Base pronta para anúncios - quando quiser acelerar, basta ligar os anúncios",
            ),
            createElement(
              Text,
              { style: styles.bullet },
              "• Estrutura escalável - o site cresce junto com seu negócio",
            ),
          ),
        ),
      ),

      // Página 6 - Planos de Investimento
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "5. Planos de Investimento"),

          createElement(
            View,
            { style: styles.planBox },
            createElement(Text, { style: styles.planTitle }, "Plano 1 - Base Estratégica"),
            createElement(Text, { style: styles.planPrice }, "R$ 1.000"),
            createElement(Text, { style: { fontSize: 10, color: "#6B7280", marginBottom: 15 } }, "Pagamento único"),

            createElement(
              Text,
              { style: { fontSize: 11, fontWeight: "bold", color: "#374151", marginBottom: 8 } },
              "Inclui:",
            ),
            createElement(Text, { style: styles.planDetail }, "✓ Página inicial institucional"),
            createElement(Text, { style: styles.planDetail }, "✓ Identidade visual digital definida"),
            createElement(Text, { style: styles.planDetail }, "✓ Estrutura básica de posicionamento"),
          ),

          createElement(
            View,
            { style: styles.planBox },
            createElement(Text, { style: styles.planTitle }, "Plano 2 - Implementação Estratégica"),
            createElement(Text, { style: styles.planPrice }, "R$ 3.500"),
            createElement(Text, { style: { fontSize: 10, color: "#6B7280", marginBottom: 15 } }, "Pagamento único"),

            createElement(
              Text,
              { style: { fontSize: 11, fontWeight: "bold", color: "#374151", marginBottom: 8 } },
              "Inclui:",
            ),
            createElement(Text, { style: styles.planDetail }, "✓ Tudo do Plano 1"),
            createElement(Text, { style: styles.planDetail }, "✓ Site profissional completo com todas as páginas"),
            createElement(Text, { style: styles.planDetail }, "✓ 3 páginas de procedimentos estéticos"),
            createElement(Text, { style: styles.planDetail }, "✓ Página de skin coaching online (com checkout)"),
            createElement(Text, { style: styles.planDetail }, "✓ Página de curso digital (com pagamento)"),
            createElement(Text, { style: styles.planDetail }, "✓ Página de curso presencial (inscrições)"),
            createElement(Text, { style: styles.planDetail }, "✓ Documento estratégico de uso"),
          ),

          createElement(
            View,
            { style: styles.planBox },
            createElement(Text, { style: styles.planTitle }, "Plano 3 - Gestão e Crescimento"),
            createElement(Text, { style: styles.planPrice }, "R$ 2.700/mês"),
            createElement(
              Text,
              { style: { fontSize: 10, color: "#6B7280", marginBottom: 5 } },
              "Valor padrão trimestral: R$ 8.100",
            ),
            createElement(
              Text,
              { style: { fontSize: 12, fontWeight: "bold", color: "#14B8A6", marginBottom: 15 } },
              "Valor promocional trimestral: R$ 7.500",
            ),

            createElement(
              Text,
              { style: { fontSize: 11, fontWeight: "bold", color: "#374151", marginBottom: 8 } },
              "Inclui:",
            ),
            createElement(Text, { style: styles.planDetail }, "✓ Tudo do Plano 2"),
            createElement(Text, { style: styles.planDetail }, "✓ Gestão estratégica contínua"),
            createElement(Text, { style: styles.planDetail }, "✓ Planejamento de conteúdo mensal"),
            createElement(Text, { style: styles.planDetail }, "✓ Acompanhamento de resultados"),
            createElement(Text, { style: styles.planDetail }, "✓ Ajustes e otimizações constantes"),
            createElement(Text, { style: styles.planDetail }, "✓ Suporte prioritário"),
          ),
        ),
      ),

      // Página 7 - Anúncios
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "6. Sobre Anúncios"),

          createElement(
            View,
            { style: styles.highlight },
            createElement(
              Text,
              { style: styles.highlightText },
              "O investimento em anúncios é opcional, mas é o que acelera resultados e reduz o tempo de crescimento.",
            ),
          ),

          createElement(
            Text,
            { style: styles.text },
            "Sem anúncios, o crescimento acontece de forma orgânica através de conteúdo e indicações. É um caminho possível, mas mais lento.",
          ),

          createElement(
            Text,
            { style: styles.text },
            "Com anúncios, você coloca seu trabalho na frente de pessoas que já estão procurando pelos seus serviços. Os resultados chegam mais rápido e de forma mais previsível.",
          ),

          createElement(
            Text,
            { style: { fontSize: 11, fontWeight: "bold", color: "#0F766E", marginTop: 20, marginBottom: 10 } },
            "Investimento recomendado em anúncios:",
          ),
          createElement(Text, { style: styles.bullet }, "Inicial: R$ 30/dia (R$ 900/mês) para testar"),
          createElement(Text, { style: styles.bullet }, "Crescimento: R$ 50-100/dia após validação"),

          createElement(
            Text,
            { style: { fontSize: 10, color: "#6B7280", marginTop: 15, fontStyle: "italic" } },
            "* Este valor é pago diretamente para Google/Meta, não está incluído nos planos",
          ),
        ),
      ),

      // Página 8 - Resultados Esperados
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: styles.section },
          createElement(Text, { style: styles.sectionTitle }, "7. Resultados Esperados em 3 Meses"),

          createElement(
            View,
            { style: { marginTop: 15 } },
            createElement(
              Text,
              { style: { fontSize: 12, fontWeight: "bold", color: "#0F766E", marginBottom: 12 } },
              "Com o Plano 1 (Base Estratégica):",
            ),
            createElement(Text, { style: styles.bullet }, "✓ Estrutura profissional completa no ar"),
            createElement(Text, { style: styles.bullet }, "✓ Clareza total de posicionamento"),
            createElement(Text, { style: styles.bullet }, "✓ Capacidade de vender serviços e cursos online"),
            createElement(Text, { style: styles.bullet }, "✓ Base sólida para crescimento orgânico"),
          ),

          createElement(
            View,
            { style: { marginTop: 25 } },
            createElement(
              Text,
              { style: { fontSize: 12, fontWeight: "bold", color: "#0F766E", marginBottom: 12 } },
              "Com o Plano 2 (Implementação Estratégica):",
            ),
            createElement(Text, { style: styles.bullet }, "✓ Tudo do Plano 1"),
            createElement(Text, { style: styles.bullet }, "✓ Crescimento consistente do perfil e autoridade"),
            createElement(Text, { style: styles.bullet }, "✓ Entrada regular de pacientes e alunos"),
            createElement(Text, { style: styles.bullet }, "✓ Estratégia sendo otimizada constantemente"),
            createElement(Text, { style: styles.bullet }, "✓ Base pronta para escalar com anúncios"),
          ),

          createElement(
            View,
            { style: { marginTop: 25 } },
            createElement(
              Text,
              { style: { fontSize: 12, fontWeight: "bold", color: "#0F766E", marginBottom: 12 } },
              "Com o Plano 3 (Gestão e Crescimento):",
            ),
            createElement(Text, { style: styles.bullet }, "✓ Tudo do Plano 2"),
            createElement(Text, { style: styles.bullet }, "✓ Gestão contínua e otimização constante"),
            createElement(Text, { style: styles.bullet }, "✓ Escalabilidade total com anúncios"),
          ),

          createElement(
            View,
            { style: { ...styles.highlight, marginTop: 25 } },
            createElement(
              Text,
              { style: { ...styles.highlightText, fontWeight: "bold", fontSize: 12 } },
              "Importante: Os resultados variam de acordo com o mercado, execução e investimento em anúncios.",
            ),
          ),
        ),
      ),

      // Página 9 - Encerramento
      createElement(
        Page,
        { size: "A4", style: styles.page },
        createElement(
          View,
          { style: { ...styles.section, height: "100%", justifyContent: "center" } },
          createElement(
            Text,
            { style: { ...styles.sectionTitle, textAlign: "center", fontSize: 24, marginBottom: 30 } },
            "Próximos Passos",
          ),

          createElement(
            Text,
            { style: { ...styles.text, textAlign: "center", fontSize: 12, lineHeight: 2 } },
            "Este projeto é a construção de uma empresa digital estruturada em torno do seu nome e expertise.",
          ),

          createElement(
            Text,
            { style: { ...styles.text, textAlign: "center", fontSize: 12, lineHeight: 2, marginTop: 20 } },
            "Não é apenas um site. É um ecossistema completo que trabalha para você 24 horas por dia, posicionando sua autoridade, educando pacientes e gerando oportunidades de negócio.",
          ),

          createElement(
            View,
            { style: { ...styles.highlight, marginTop: 40 } },
            createElement(
              Text,
              { style: { ...styles.highlightText, textAlign: "center", fontWeight: "bold", fontSize: 13 } },
              "Sua presença digital será tão profissional quanto sua clínica.",
            ),
          ),

          createElement(
            Text,
            { style: { ...styles.text, textAlign: "center", fontSize: 11, marginTop: 50, color: "#6B7280" } },
            "Para iniciar o projeto ou esclarecer dúvidas,",
          ),
          createElement(
            Text,
            { style: { ...styles.text, textAlign: "center", fontSize: 12, fontWeight: "bold", color: "#14B8A6" } },
            "entre em contato através do WhatsApp.",
          ),
        ),
      ),
    )

    // Gerar PDF
    const pdfBuffer = await pdf(PropostaDoc).toBuffer()

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Proposta-Estrategica-Dra-Aricia-Cunha.pdf"',
      },
    })
  } catch (error) {
    console.error("Erro ao gerar PDF:", error)
    return NextResponse.json({ error: "Erro ao gerar PDF" }, { status: 500 })
  }
}
