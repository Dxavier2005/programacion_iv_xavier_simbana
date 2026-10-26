// app/index.tsx — agrega al archivo existente
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3'
import { Card, FilaInfo } from './paso2'
import { ModalConfirm } from './paso5'

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  cabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  cabNombre: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  cabIp: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748B',
  },
  scrollContenido: {
    padding: 20,
    paddingBottom: 32,
  },
  botonAccion: {
    minHeight: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textoBotonAccion: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
})

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en Grupo A`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <View style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Grupo A</Text>
          <Text style={estilos6.cabIp}>Rosa Andrade · Primera Comunión</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Resumen del curso" subtitulo="Última actualización: hace 3 días">
          <FilaInfo etiqueta="Inscritos" valor="25 catequizandos" />
          <FilaInfo etiqueta="Asistencia" valor="92% · 12 de 16 clases" />
          <FilaInfo etiqueta="Cuotas" valor="$85 / $120" />
        </Card>
      </ScrollView>
    </View>
  )
}