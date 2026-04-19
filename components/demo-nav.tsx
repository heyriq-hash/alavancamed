import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Stethoscope, Smile, Sparkles, FileText } from "lucide-react"

export function DemoNav() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline-text">Voltar para Agência</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm text-muted-foreground hidden sm:inline-block">Navegue pelos Demos:</span>
        </div>
        <nav className="flex items-center gap-2">
          <Link href="/proposal">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800 bg-transparent"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline-block font-semibold">Proposta Comercial</span>
            </Button>
          </Link>
          <Link href="/demo/plastic-surgery">
            <Button variant="ghost" size="sm" className="gap-2">
              <Stethoscope className="h-4 w-4 text-rose-500" />
              <span className="hidden sm:inline-block">Cirurgia Plástica</span>
            </Button>
          </Link>
          <Link href="/demo/dental-implants">
            <Button variant="ghost" size="sm" className="gap-2">
              <Smile className="h-4 w-4 text-blue-500" />
              <span className="hidden sm:inline-block">Implantes</span>
            </Button>
          </Link>
          <Link href="/demo/dermatology">
            <Button variant="ghost" size="sm" className="gap-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="hidden sm:inline-block">Dermatologia</span>
            </Button>
          </Link>
          <Link href="/calculadorainteligente">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800 bg-transparent"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline-block font-semibold">Calculadora Inteligente</span>
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  )
}
