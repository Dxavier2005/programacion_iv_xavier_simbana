// app/index.tsx — agrega al archivo existente
import { StyleSheet, Text, View } from 'react-native'
import { ReactNode } from 'react'

// ─── Paso 2 — children y composición ────────────────────────────────

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

export function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle del curso</Text>

      <Card titulo="Grupo A" subtitulo="Curso de Primera Comunión">
        <FilaInfo etiqueta="Catequista" valor="Rosa Andrade" />
        <FilaInfo etiqueta="Aula" valor="7 (Planta baja)" />
        <FilaInfo etiqueta="Horario" valor="Sábados 09:00" />
        <FilaInfo etiqueta="Inscritos" valor="25 catequizandos · 92%" />
        <FilaInfo etiqueta="Cuotas" valor="$120 · $85 recaudados" />
      </Card>

      <Card titulo="Asistencia">
        <FilaInfo etiqueta="Clases dictadas" valor="12 de 16" />
        <FilaInfo etiqueta="Asistencia mínima" valor="75% requerido" />
        <FilaInfo etiqueta="Última clase" valor="hace 3 días" />
      </Card>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardCabecera: {
    padding: 16,
    backgroundColor: '#2563eb',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    marginTop: 4,
    fontSize: 14,
    color: '#dbeafe',
  },
  cardCuerpo: {
    padding: 16,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  etiqueta: {
    fontSize: 14,
    color: '#6b7280',
  },
  valor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'right',
    flexShrink: 1,
    marginLeft: 12,
  },
})