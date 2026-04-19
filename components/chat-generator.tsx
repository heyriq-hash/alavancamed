"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Trash2, Wifi, Battery, Signal } from "lucide-react"
import html2canvas from "html2canvas"

interface Message {
  id: string
  text: string
  isSender: boolean
  time: string
}

export function ChatGenerator() {
  const [contactName, setContactName] = useState("Dr. Roberto Silva")
  const [status, setStatus] = useState("online")
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Bom dia! Como está a agenda da semana?", isSender: true, time: "09:15" },
    { id: "2", text: "Lotada! Tivemos que abrir horário extra no sábado.", isSender: false, time: "09:18" },
    { id: "3", text: "Excelente! O tráfego está funcionando bem então?", isSender: true, time: "09:19" },
    { id: "4", text: "Demais. Fechei 3 cirurgias só hoje de manhã.", isSender: false, time: "09:20" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [newTime, setNewTime] = useState("09:21")
  const previewRef = useRef<HTMLDivElement>(null)

  const addMessage = (isSender: boolean) => {
    if (!newMessage) return
    setMessages([
      ...messages,
      {
        id: Math.random().toString(36).substr(2, 9),
        text: newMessage,
        isSender,
        time: newTime,
      },
    ])
    setNewMessage("")
  }

  const removeMessage = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id))
  }

  const downloadImage = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: null,
      })
      const link = document.createElement("a")
      link.download = "prova-social-whatsapp.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Configurar Conversa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Nome do Contato</Label>
              <Input value={contactName} onChange={(e) => setContactName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label>Status</Label>
              <Input value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label>Adicionar Mensagem</Label>
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite a mensagem..."
                />
                <Input type="time" className="w-24" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={() => addMessage(true)} variant="outline">
                  Eu (Verde)
                </Button>
                <Button onClick={() => addMessage(false)} variant="secondary">
                  Ele (Branco)
                </Button>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label>Mensagens Atuais</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex items-center justify-between text-sm border p-2 rounded">
                    <span className="truncate max-w-[200px]">{msg.text}</span>
                    <Button variant="ghost" size="icon" onClick={() => removeMessage(msg.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={downloadImage} className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" /> Baixar Prova Social
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center items-start bg-slate-100 p-8 rounded-xl">
        <div
          ref={previewRef}
          className="w-[375px] bg-[#E5DDD5] min-h-[600px] rounded-[30px] overflow-hidden shadow-2xl border-8 border-slate-900 relative"
        >
          {/* Status Bar */}
          <div className="bg-[#075E54] h-8 flex items-center justify-between px-4 pt-1">
            <span className="text-white text-xs font-medium">09:41</span>
            <div className="flex gap-1.5">
              <Signal className="h-3 w-3 text-white" />
              <Wifi className="h-3 w-3 text-white" />
              <Battery className="h-3 w-3 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="bg-[#075E54] px-4 py-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-slate-400 flex items-center justify-center text-white font-bold text-lg">
                {contactName.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-base leading-tight">{contactName}</div>
              <div className="text-white/80 text-xs">{status}</div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isSender ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-1.5 shadow-sm relative text-sm ${
                    msg.isSender ? "bg-[#DCF8C6] rounded-tr-none" : "bg-white rounded-tl-none"
                  }`}
                >
                  <p className="text-slate-900 leading-snug">{msg.text}</p>
                  <span className="text-[10px] text-slate-500 float-right ml-2 mt-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
