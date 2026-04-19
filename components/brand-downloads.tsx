"use client"

import { Button } from "@/components/ui/button"
import { Download, FileImage } from "lucide-react"

export function BrandDownloads() {
  const getSvgContent = (type: "light" | "dark") => {
    const isLight = type === "light"
    const textColor = isLight ? "#0F172A" : "#FFFFFF"
    const activityColor = isLight ? "#2563EB" : "#60A5FA"
    const trendingColor = isLight ? "#22C55E" : "#4ADE80"

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="350" height="80" viewBox="0 0 350 80">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&amp;display=swap');
        </style>
        <g transform="translate(20, 20)">
          <!-- Activity Icon (Scale 1.5 = 36px) -->
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="${activityColor}" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(1.5)"/>
          
          <!-- TrendingUp Icon (Scale 1.0 = 24px, positioned to overlap slightly) -->
          <g transform="translate(30, 6) scale(1.0)">
             <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="${trendingColor}" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
             <path d="M17 6h6v6" stroke="${trendingColor}" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>
          
          <!-- Text (Positioned after icons) -->
          <text x="60" y="32" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontWeight="bold" fontSize="32" fill="${textColor}">AlavancaMed</text>
        </g>
      </svg>
    `
  }

  const getSquareSvgContent = () => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&amp;display=swap');
        </style>
        <!-- Background -->
        <rect width="500" height="500" fill="#0F172A"/>
        
        <g transform="translate(0, 0)">
          <!-- Text Alavanca -->
          <text x="250" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="64" fill="#FFFFFF">Alavanca</text>
          
          <!-- Text Med -->
          <text x="250" y="250" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="64" fill="#FFFFFF">Med</text>
          
          <!-- Icons Centered Below -->
          <g transform="translate(200, 290) scale(4)">
            <!-- Activity Icon -->
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <!-- TrendingUp Icon -->
            <g transform="translate(4, -4)">
               <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
               <path d="M17 6h6v6" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
          </g>
        </g>
      </svg>
    `
  }

  const downloadSvg = (type: "light" | "dark") => {
    const svgContent = getSvgContent(type)
    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `alavancamed-logo-${type}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const downloadSquarePng = () => {
    const svgContent = getSquareSvgContent()
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    // Set canvas size (High Res for Instagram)
    canvas.width = 1080
    canvas.height = 1080

    const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1080, 1080)
        const pngUrl = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = pngUrl
        link.download = `alavancamed-instagram.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    }
    img.src = url
  }

  const downloadPng = (type: "light" | "dark") => {
    const svgContent = getSvgContent(type)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    // Set canvas size
    canvas.width = 1050 // 3x resolution
    canvas.height = 240

    const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      if (ctx) {
        if (type === "dark") {
          ctx.fillStyle = "#0F172A" // Slate 900 background for dark logo
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        ctx.drawImage(img, 0, 0, 1050, 240)
        const pngUrl = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = pngUrl
        link.download = `alavancamed-logo-${type}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    }
    img.src = url
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => downloadSvg("light")} variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> SVG Claro (Vetor)
        </Button>
        <Button onClick={() => downloadPng("light")} variant="outline" className="gap-2">
          <FileImage className="h-4 w-4" /> PNG Claro (Imagem)
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => downloadSvg("dark")}
          variant="outline"
          className="gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:text-white border-slate-900"
        >
          <Download className="h-4 w-4" /> SVG Escuro (Vetor)
        </Button>
        <Button
          onClick={() => downloadPng("dark")}
          variant="outline"
          className="gap-2 bg-slate-900 text-white hover:bg-slate-800 hover:text-white border-slate-900"
        >
          <FileImage className="h-4 w-4" /> PNG Escuro (Imagem)
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 pt-4 border-t">
        <Button onClick={downloadSquarePng} className="gap-2 bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto">
          <FileImage className="h-4 w-4" /> Baixar Logo Instagram (Quadrado)
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-2">
        * O logo escuro tem texto branco. Se abrir no navegador (fundo branco), o texto vai sumir. Use o arquivo baixado
        em fundos escuros.
      </p>
    </div>
  )
}
