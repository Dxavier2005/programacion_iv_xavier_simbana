// app/index.tsx — añade la función Paso3
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Catequizando = {
  id: string
  nombre: string
  sacramento: string
  estado: 'inscrito' | 'en_proceso' | 'graduado'
  asistencia: number
}

const CATEQUIZANDOS: Catequizando[] = [
  { id: '1', nombre: 'María Fernanda', sacramento: 'Primera Comunión', estado: 'inscrito',   asistencia: 82 },
  { id: '2', nombre: 'Juan Pablo',     sacramento: 'Confirmación',     estado: 'inscrito',   asistencia: 45 },
  { id: '3', nombre: 'Ana Lucía',      sacramento: 'Bautismo',         estado: 'en_proceso', asistencia: 91 },
  { id: '4', nombre: 'Luis Paredes',   sacramento: 'Primera Comunión', estado: 'inscrito',   asistencia: 55 },
  { id: '5', nombre: 'Sofía Ramos',    sacramento: 'Confirmación',     estado: 'graduado',   asistencia: 30 },
  { id: '6', nombre: 'Carlos Mena',    sacramento: 'Bautismo',         estado: 'inscrito',   asistencia: 88 },
  { id: '7', nombre: 'Elena Cruz',     sacramento: 'Matrimonio',       estado: 'inscrito',   asistencia: 70 },
  { id: '8', nombre: 'Daniel Pozo',    sacramento: 'Primera Comunión', estado: 'en_proceso', asistencia: 50 },
]

const COLOR_ESTADO: Record<Catequizando['estado'], string> = {
  inscrito:   '#2e7d32',
  en_proceso: '#e65100',
  graduado:   '#78716c',
}

export function Paso3() {
  const { width } = useWindowDimensions()

  // Grid responsivo: 2 columnas en teléfono (< 600dp), 4 en tablet (≥ 600dp)
  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff7ed' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Catequizandos · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {CATEQUIZANDOS.map((c) => (
          <TarjetaCatequizando
            key={c.id}
            catequizando={c}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaCatequizando({
  catequizando,
  ancho,
}: {
  catequizando: Catequizando
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[catequizando.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      {/* Indicador de estado */}
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreCatequizando} numberOfLines={1}>
        {catequizando.nombre}
      </Text>
      <Text style={estilosPaso3.sacramento}>{catequizando.sacramento}</Text>

      {/* Barra de asistencia */}
      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${catequizando.asistencia}%`,
              backgroundColor: catequizando.asistencia > 80 ? '#c2410c' : '#ea580c',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.asistencia}>Asistencia: {catequizando.asistencia}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#78716c',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreCatequizando: { fontSize: 13, fontWeight: '700', color: '#1c1917' },
  sacramento:         { fontSize: 11, color: '#78716c' },
  barraFondo: {
    height: 6,
    backgroundColor: '#fed7aa',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  asistencia:   { fontSize: 11, color: '#78716c' },
})