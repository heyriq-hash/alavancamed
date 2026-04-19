import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  // Ignorar arquivos estáticos e API
  if (
    pathname.includes(".") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next()
  }

  // Mapeamento de subdomínios para caminhos internos
  // Ajuste "alavancamed.com.br" para o seu domínio real se mudar, ou para localhost em desenvolvimento
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(".alavancamed.com.br", "")
      : hostname.replace(".localhost:3000", "")

  // Lógica de roteamento
  if (currentHost === "plastica") {
    return NextResponse.rewrite(new URL(`/demo/plastic-surgery${pathname}`, request.url))
  }

  if (currentHost === "implantes") {
    return NextResponse.rewrite(new URL(`/demo/dental-implants${pathname}`, request.url))
  }

  if (currentHost === "dermato") {
    return NextResponse.rewrite(new URL(`/demo/dermatology${pathname}`, request.url))
  }

  if (currentHost === "proposta") {
    return NextResponse.rewrite(new URL(`/calculadorainteligente${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
