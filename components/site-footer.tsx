"use client"

import Link from "next/link"
import { Activity, TrendingUp } from "lucide-react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "CliqueWhatsApp")
  }
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-12 text-slate-600">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
              <div className="flex items-center">
                <Activity className="h-6 w-6 text-blue-600" />
                <TrendingUp className="h-4 w-4 text-green-500 -ml-1" />
              </div>
              <span>AlavancaMed</span>
            </div>
            <p className="text-sm">
              Transformando consultórios em negócios de alta performance através de tecnologia e design.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos" className="hover:text-blue-600">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="hover:text-blue-600">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/#demos" className="hover:text-blue-600">
                  Exemplos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculadorainteligente" className="hover:text-blue-600">
                  Calculadora de Faturamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5511945455842?text=Ol%C3%A1!%20Vi%20o%20site%20da%20AlavancaMed%20e%20gostaria%20de%20falar%20sobre%20meu%20consult%C3%B3rio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                  onClick={trackWhatsAppClick}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@alavancamed.com.br" className="hover:text-blue-600">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AlavancaMed. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
