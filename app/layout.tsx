import type React from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

import Script from "next/script"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "AlavancaMed | Estruturação Digital para Profissionais da Saúde",
  description:
    "Transforme seu consultório em uma máquina de atrair pacientes particulares. Estruturação digital estratégica para médicos, dentistas e psicólogos. Pare de depender de convênios e indicações.",
  keywords: [
    "estruturação digital saúde",
    "site para médicos",
    "site para dentistas",
    "site para psicólogos",
    "google meu negócio médicos",
    "marketing digital saúde",
    "captação pacientes particulares",
    "presença digital médicos",
    "site profissional saúde",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "AlavancaMed | Estruturação Digital para Profissionais da Saúde",
    description:
      "Pare de depender de convênios. Implementamos um sistema previsível que coloca pacientes qualificados na sua cadeira todos os dias.",
    type: "website",
    locale: "pt_BR",
    siteName: "AlavancaMed",
    url: "https://alavancamed.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlavancaMed | Estruturação Digital para Profissionais da Saúde",
    description: "Transforme seu consultório em uma máquina de atrair pacientes particulares.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.dev",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AlavancaMed",
  url: "https://alavancamed.com.br",
  logo: "https://alavancamed.com.br/icon.svg",
  description:
    "Estruturação digital estratégica para profissionais da saúde. Especialistas em criar presença digital que atrai pacientes particulares.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-94545-5842",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["pt-BR"],
  },
  sameAs: ["https://www.instagram.com/estrategista.henrique/"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="facebook-domain-verification" content="8abwndrkz1bc9h4xudw5hpllxq9tlh" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '927831829986992');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=927831829986992&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
