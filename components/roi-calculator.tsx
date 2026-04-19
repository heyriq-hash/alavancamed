"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

export function RoiCalculator() {
  const [ticketMedio, setTicketMedio] = useState<number | "">(3000)
  const [investimentoAds, setInvestimentoAds] = useState<number | "">(2000)
  const [custoPorLead, setCustoPorLead] = useState<number | "">(30)
  const [taxaConversao, setTaxaConversao] = useState<number | "">(10) // %

  const ticket = ticketMedio === "" ? 0 : ticketMedio
  const invest = investimentoAds === "" ? 0 : investimentoAds
  const cpl = custoPorLead === "" ? 0 : custoPorLead
  const conv = taxaConversao === "" ? 0 : taxaConversao

  const leadsGerados = cpl > 0 ? Math.floor(invest / cpl) : 0
  const vendasEstimadas = Math.floor(leadsGerados * (conv / 100))
  const faturamentoEstimado = vendasEstimadas * ticket
  const lucroBruto = faturamentoEstimado - invest
  const roi = invest > 0 ? ((lucroBruto / invest) * 100).toFixed(0) : 0

  return (
    <Card className="w-full border-2 border-primary/10 shadow-xl">
      <CardHeader className="bg-muted/30 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-primary">Simulador de Lucro Real</CardTitle>
            <CardDescription>Mostre ao cliente quanto ele pode ganhar</CardDescription>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-1">
            ROI: {roi}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8 p-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Valor Médio do Procedimento (Ticket Médio)</Label>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                value={ticketMedio}
                onChange={(e) => setTicketMedio(e.target.value === "" ? "" : Number(e.target.value))}
                className="font-bold text-lg"
                placeholder="0"
              />
            </div>
            <p className="text-xs text-muted-foreground">Ex: Implante (R$ 3.000), Silicone (R$ 15.000)</p>
          </div>

          <div className="space-y-2">
            <Label>Investimento Mensal em Anúncios (Google/Meta)</Label>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                value={investimentoAds}
                onChange={(e) => setInvestimentoAds(e.target.value === "" ? "" : Number(e.target.value))}
                className="font-bold text-lg"
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Custo por Lead Estimado (R$)</Label>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                value={custoPorLead}
                onChange={(e) => setCustoPorLead(e.target.value === "" ? "" : Number(e.target.value))}
                className="font-bold text-lg"
                placeholder="30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Taxa de Conversão (%)</Label>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                value={taxaConversao}
                onChange={(e) => setTaxaConversao(e.target.value === "" ? "" : Number(e.target.value))}
                className="font-bold text-lg"
                placeholder="10"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 rounded-xl bg-slate-900 p-6 text-slate-50">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Potencial de Leads</span>
            </div>
            <div className="text-4xl font-bold">
              {leadsGerados} <span className="text-lg font-normal text-slate-400">pessoas interessadas</span>
            </div>
          </div>

          <div className="h-px bg-slate-800" />

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Novos Pacientes</span>
            </div>
            <div className="text-4xl font-bold text-green-400">
              {vendasEstimadas} <span className="text-lg font-normal text-slate-400">agendamentos</span>
            </div>
          </div>

          <div className="h-px bg-slate-800" />

          <div className="space-y-1">
            <div className="text-sm font-medium uppercase tracking-wider text-slate-400">
              Faturamento Extra Estimado
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 break-words">
              {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(faturamentoEstimado)}
            </div>
            <div className="text-sm text-slate-400">
              Lucro sobre anúncios:{" "}
              {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(lucroBruto)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
