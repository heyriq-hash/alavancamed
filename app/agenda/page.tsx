"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, Phone, Mail, Check, X, Plus, LogOut } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

// Mock data structure for appointments
interface Appointment {
  id: string
  patientName: string
  patientPhone: string
  patientEmail: string
  procedure: string
  date: Date
  time: string
  status: "pending" | "confirmed" | "cancelled"
  notes?: string
}

export default function AgendaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [clinicCode, setClinicCode] = useState("")
  const [secretaryName, setSecretaryName] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      patientName: "Maria Silva",
      patientPhone: "(11) 98765-4321",
      patientEmail: "maria@email.com",
      procedure: "Consulta Harmonização Facial",
      date: new Date(),
      time: "14:00",
      status: "confirmed",
      notes: "Primeira consulta",
    },
    {
      id: "2",
      patientName: "João Santos",
      patientPhone: "(11) 91234-5678",
      patientEmail: "joao@email.com",
      procedure: "Botox",
      date: new Date(),
      time: "15:30",
      status: "pending",
    },
  ])

  // Form states for new appointment
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    procedure: "",
    time: "",
    notes: "",
  })

  const handleLogin = () => {
    if (clinicCode && secretaryName) {
      setIsLoggedIn(true)
    }
  }

  const handleAddAppointment = () => {
    if (newAppointment.patientName && newAppointment.patientPhone && selectedDate && newAppointment.time) {
      const appointment: Appointment = {
        id: Date.now().toString(),
        patientName: newAppointment.patientName,
        patientPhone: newAppointment.patientPhone,
        patientEmail: newAppointment.patientEmail,
        procedure: newAppointment.procedure,
        date: selectedDate,
        time: newAppointment.time,
        status: "pending",
        notes: newAppointment.notes,
      }
      setAppointments([...appointments, appointment])
      setNewAppointment({
        patientName: "",
        patientPhone: "",
        patientEmail: "",
        procedure: "",
        time: "",
        notes: "",
      })
    }
  }

  const updateAppointmentStatus = (id: string, status: "confirmed" | "cancelled") => {
    setAppointments(appointments.map((apt) => (apt.id === id ? { ...apt, status } : apt)))
  }

  const todayAppointments = appointments.filter(
    (apt) => apt.date.toDateString() === (selectedDate || new Date()).toDateString() && apt.status !== "cancelled",
  )

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">AgendaMed Pro</CardTitle>
            <CardDescription>Sistema de Agendamento AlavancaMed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="clinicCode">Código da Clínica</Label>
              <Input
                id="clinicCode"
                placeholder="Ex: CLINIC2025"
                value={clinicCode}
                onChange={(e) => setClinicCode(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secretaryName">Seu Nome</Label>
              <Input
                id="secretaryName"
                placeholder="Digite seu nome"
                value={secretaryName}
                onChange={(e) => setSecretaryName(e.target.value)}
              />
            </div>
            <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
              Entrar no Sistema
            </Button>
            <p className="text-xs text-center text-slate-500">
              Não tem acesso? Entre em contato com o administrador da clínica.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">AgendaMed Pro</h1>
            <p className="text-slate-600">Bem-vinda, {secretaryName}</p>
          </div>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>

        <Tabs defaultValue="calendar" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calendar">Calendário</TabsTrigger>
            <TabsTrigger value="new">Novo Agendamento</TabsTrigger>
            <TabsTrigger value="list">Todos os Agendamentos</TabsTrigger>
          </TabsList>

          {/* Calendar View */}
          <TabsContent value="calendar" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Selecione a Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Agendamentos do Dia
                  </CardTitle>
                  <CardDescription>
                    {selectedDate?.toLocaleDateString("pt-BR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayAppointments.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">Nenhum agendamento para este dia</p>
                  ) : (
                    todayAppointments.map((apt) => (
                      <div key={apt.id} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold text-slate-900">{apt.patientName}</p>
                            <p className="text-sm text-slate-600">{apt.procedure}</p>
                            <p className="text-sm text-slate-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {apt.time}
                            </p>
                          </div>
                          <Badge variant={apt.status === "confirmed" ? "default" : "secondary"}>
                            {apt.status === "confirmed" ? "Confirmado" : "Pendente"}
                          </Badge>
                        </div>
                        {apt.status === "pending" && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => updateAppointmentStatus(apt.id, "confirmed")}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Confirmar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 bg-transparent"
                              onClick={() => updateAppointmentStatus(apt.id, "cancelled")}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Cancelar
                            </Button>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Appointment Form */}
          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Novo Agendamento
                </CardTitle>
                <CardDescription>Preencha os dados do paciente para criar um novo agendamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientName">
                      Nome do Paciente <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="patientName"
                      placeholder="Nome completo"
                      value={newAppointment.patientName}
                      onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patientPhone">
                      Telefone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="patientPhone"
                      placeholder="(11) 99999-9999"
                      value={newAppointment.patientPhone}
                      onChange={(e) => setNewAppointment({ ...newAppointment, patientPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientEmail">E-mail</Label>
                    <Input
                      id="patientEmail"
                      type="email"
                      placeholder="email@exemplo.com"
                      value={newAppointment.patientEmail}
                      onChange={(e) => setNewAppointment({ ...newAppointment, patientEmail: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="procedure">Procedimento</Label>
                    <Select
                      value={newAppointment.procedure}
                      onValueChange={(value) => setNewAppointment({ ...newAppointment, procedure: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o procedimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta Inicial</SelectItem>
                        <SelectItem value="botox">Botox</SelectItem>
                        <SelectItem value="preenchimento">Preenchimento</SelectItem>
                        <SelectItem value="harmonizacao">Harmonização Facial</SelectItem>
                        <SelectItem value="limpeza">Limpeza de Pele</SelectItem>
                        <SelectItem value="peeling">Peeling</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Data <span className="text-red-500">*</span>
                    </Label>
                    <div className="border rounded-md p-3">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">
                      Horário <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={newAppointment.time}
                      onValueChange={(value) => setNewAppointment({ ...newAppointment, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">08:00</SelectItem>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Informações adicionais sobre o paciente ou procedimento"
                    value={newAppointment.notes}
                    onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                  />
                </div>

                <Button onClick={handleAddAppointment} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Agendamento
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Appointments List */}
          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Todos os Agendamentos</CardTitle>
                <CardDescription>Visualize e gerencie todos os agendamentos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <p className="font-semibold text-slate-900">{apt.patientName}</p>
                          <Badge
                            variant={
                              apt.status === "confirmed"
                                ? "default"
                                : apt.status === "cancelled"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {apt.status === "confirmed"
                              ? "Confirmado"
                              : apt.status === "cancelled"
                                ? "Cancelado"
                                : "Pendente"}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {apt.patientPhone}
                          </div>
                          {apt.patientEmail && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {apt.patientEmail}
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-3 w-3" />
                            {apt.date.toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            {apt.time}
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">
                          <strong>Procedimento:</strong> {apt.procedure}
                        </p>
                        {apt.notes && (
                          <p className="text-sm text-slate-500">
                            <strong>Obs:</strong> {apt.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    {apt.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => updateAppointmentStatus(apt.id, "confirmed")}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Confirmar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => updateAppointmentStatus(apt.id, "cancelled")}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
