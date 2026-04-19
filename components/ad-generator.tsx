"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, LayoutTemplate, ImageIcon } from "lucide-react"

export function AdGenerator() {
  const [headline, setHeadline] = useState("Pare de perder pacientes")
  const [subheadline, setSubheadline] = useState("Sua clínica merece estar no topo do Google hoje mesmo.")
  const [cta, setCta] = useState("Saiba Mais")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const downloadRef = useRef<HTMLDivElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDownload = (id: string, filename: string) => {
    const svgElement = document.getElementById(id)
    if (!svgElement) return

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svgElement)

    // Add namespaces if missing
    const finalSvg = svgString.startsWith('<svg xmlns="')
      ? svgString
      : svgString.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ')

    const blob = new Blob([finalSvg], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = Number.parseInt(svgElement.getAttribute("width") || "1080")
      canvas.height = Number.parseInt(svgElement.getAttribute("height") || "1080")
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL("image/png")

      const link = document.createElement("a")
      link.href = pngUrl
      link.download = `${filename}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Controls */}
      <div className="space-y-6 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b pb-4">
          <LayoutTemplate className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Editor de Conteúdo</h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image-upload">Imagem do Post (Opcional)</Label>
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-dashed border-slate-300 bg-slate-50">
                {uploadedImage ? (
                  <img src={uploadedImage || "/placeholder.svg"} alt="Preview" className="h-full w-full object-cover" />
                ) : (
                  <ImageIcon className="h-8 w-8 text-slate-300" />
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture" className="sr-only">
                  Upload
                </Label>
                <Input id="picture" type="file" accept="image/*" onChange={handleImageUpload} />
                <p className="text-xs text-slate-500">Recomendado: Fotos da clínica ou atendimento.</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline">Título (Headline)</Label>
            <Input id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} maxLength={40} />
            <p className="text-xs text-slate-500">Curto e impactante. Max 40 caracteres.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subheadline">Subtítulo</Label>
            <Textarea
              id="subheadline"
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              maxLength={80}
            />
            <p className="text-xs text-slate-500">Explique o benefício. Max 80 caracteres.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cta">Botão (Call to Action)</Label>
            <Input id="cta" value={cta} onChange={(e) => setCta(e.target.value)} />
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
          <strong>Dica de Copy:</strong> Use palavras como "Agenda Lotada", "Pacientes Particulares", "Autoridade" e
          "Google".
        </div>
      </div>

      {/* Previews */}
      <div className="space-y-6">
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feed">Post Quadrado (Feed)</TabsTrigger>
            <TabsTrigger value="story">Post Vertical (Story)</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-4 mt-4">
            <div className="flex flex-col items-center gap-4">
              {/* SVG Template 1: Feed */}
              <div className="overflow-hidden rounded-lg border shadow-lg">
                <svg id="post-feed" width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  {/* Background */}
                  <rect width="500" height="500" fill="#0F172A" />

                  {/* Uploaded Image Background (if exists) */}
                  {uploadedImage && (
                    <>
                      <defs>
                        <clipPath id="feed-image-clip">
                          <rect width="500" height="250" />
                        </clipPath>
                        <linearGradient id="feed-overlay" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0F172A" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#0F172A" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <image
                        href={uploadedImage}
                        width="500"
                        height="500"
                        preserveAspectRatio="xMidYMid slice"
                        opacity="0.6"
                      />
                      <rect width="500" height="500" fill="url(#feed-overlay)" />
                    </>
                  )}

                  {/* Abstract Shapes (only if no image) */}
                  {!uploadedImage && (
                    <>
                      <circle cx="450" cy="50" r="100" fill="#1E293B" opacity="0.5" />
                      <circle cx="50" cy="450" r="150" fill="#2563EB" opacity="0.1" />
                    </>
                  )}

                  {/* Content */}
                  <text
                    x="40"
                    y="180"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    fontSize="42"
                    fill="#FFFFFF"
                    style={{ whiteSpace: "pre" }}
                  >
                    {headline.split(" ").slice(0, 3).join(" ")}
                  </text>
                  <text
                    x="40"
                    y="230"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    fontSize="42"
                    fill="#60A5FA"
                    style={{ whiteSpace: "pre" }}
                  >
                    {headline.split(" ").slice(3).join(" ")}
                  </text>

                  {/* Divider */}
                  <line x1="40" y1="260" x2="100" y2="260" stroke="#22C55E" strokeWidth="4" />

                  {/* Subheadline - Wrapped manually for SVG simplicity */}
                  <foreignObject x="40" y="290" width="420" height="100">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{ color: "#94A3B8", fontSize: "24px", fontFamily: "sans-serif", lineHeight: "1.4" }}
                    >
                      {subheadline}
                    </div>
                  </foreignObject>

                  {/* Button Mockup */}
                  <rect x="40" y="400" width="200" height="50" rx="8" fill="#2563EB" />
                  <text
                    x="140"
                    y="433"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    fontSize="20"
                    fill="#FFFFFF"
                    textAnchor="middle"
                  >
                    {cta}
                  </text>

                  {/* Logo Mark */}
                  <text x="450" y="480" fontFamily="sans-serif" fontSize="14" fill="#475569" textAnchor="end">
                    AlavancaMed
                  </text>
                </svg>
              </div>

              <Button onClick={() => handleDownload("post-feed", "post-instagram-feed")} className="w-full max-w-xs">
                <Download className="mr-2 h-4 w-4" />
                Baixar PNG (Feed)
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="story" className="space-y-4 mt-4">
            <div className="flex flex-col items-center gap-4">
              {/* SVG Template 2: Story */}
              <div className="overflow-hidden rounded-lg border shadow-lg">
                <svg id="post-story" width="360" height="640" viewBox="0 0 360 640" xmlns="http://www.w3.org/2000/svg">
                  {/* Background */}
                  <rect width="360" height="640" fill="#FFFFFF" />

                  {/* Uploaded Image or Placeholder */}
                  {uploadedImage ? (
                    <image
                      href={uploadedImage}
                      x="0"
                      y="0"
                      width="360"
                      height="320"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  ) : (
                    <>
                      <rect width="360" height="640" fill="url(#grad1)" opacity="0.05" />
                      <rect x="20" y="20" width="320" height="280" rx="12" fill="#F1F5F9" />
                      <path d="M150 130 L180 160 L210 130" stroke="#CBD5E1" strokeWidth="4" fill="none" />
                      <text x="180" y="180" fontFamily="sans-serif" fontSize="14" fill="#94A3B8" textAnchor="middle">
                        Sua Imagem Aqui
                      </text>
                    </>
                  )}

                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#2563EB", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#22C55E", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>

                  {/* Content */}
                  <text x="30" y="350" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill="#0F172A">
                    {headline.split(" ").slice(0, 2).join(" ")}
                  </text>
                  <text x="30" y="390" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill="#2563EB">
                    {headline.split(" ").slice(2).join(" ")}
                  </text>

                  <foreignObject x="30" y="420" width="300" height="120">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{ color: "#475569", fontSize: "20px", fontFamily: "sans-serif", lineHeight: "1.5" }}
                    >
                      {subheadline}
                    </div>
                  </foreignObject>

                  {/* CTA Button */}
                  <rect x="30" y="540" width="300" height="60" rx="30" fill="#22C55E" />
                  <text
                    x="180"
                    y="578"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    fontSize="22"
                    fill="#FFFFFF"
                    textAnchor="middle"
                  >
                    {cta}
                  </text>
                </svg>
              </div>

              <Button onClick={() => handleDownload("post-story", "post-instagram-story")} className="w-full max-w-xs">
                <Download className="mr-2 h-4 w-4" />
                Baixar PNG (Story)
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
