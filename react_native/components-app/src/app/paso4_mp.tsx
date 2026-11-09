// app/index.tsx — agrega al archivo existente
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const CURSOS_DEMO = [
  { id: '1',  nombre: 'Grupo A', catequista: 'Rosa Andrade',   sacramento: 'Primera Comunión', asistencia: 92, pagos: 85 },
  { id: '2',  nombre: 'Grupo B', catequista: 'Pedro Salazar',  sacramento: 'Primera Comunión', asistencia: 88, pagos: 78 },
  { id: '3',  nombre: 'Grupo C', catequista: 'María Torres',   sacramento: 'Confirmación',     asistencia: 75, pagos: 90 },
  { id: '4',  nombre: 'Grupo D', catequista: 'Luis Paredes',   sacramento: 'Confirmación',     asistencia: 80, pagos: 71 },
  { id: '5',  nombre: 'Grupo E', catequista: 'Ana Vera',       sacramento: 'Bautismo',         asistencia: 98, pagos: 100 },
  { id: '6',  nombre: 'Grupo F', catequista: 'Carlos Mena',    sacramento: 'Primera Comunión', asistencia: 60, pagos: 45 },
  { id: '7',  nombre: 'Grupo G', catequista: 'Elena Cruz',     sacramento: 'Primera Comunión', asistencia: 55, pagos: 47 },
  { id: '8',  nombre: 'Grupo H', catequista: 'Jorge Ruiz',     sacramento: 'Matrimonio',       asistencia: 97, pagos: 88 },
  { id: '9',  nombre: 'Grupo I', catequista: 'Carmen León',    sacramento: 'Bautismo',         asistencia: 94, pagos: 91 },
  { id: '10', nombre: 'Grupo J', catequista: 'Miguel Ortiz',   sacramento: 'Confirmación',     asistencia: 82, pagos: 68 },
  { id: '11', nombre: 'Grupo K', catequista: 'Sofía Ramos',    sacramento: 'Matrimonio',       asistencia: 99, pagos: 79 },
  { id: '12', nombre: 'Grupo L', catequista: 'Daniel Pozo',    sacramento: 'Primera Comunión', asistencia: 85, pagos: 83 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaCurso({ nombre, catequista, sacramento, asistencia, pagos }: typeof CURSOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoIp}>{catequista}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{sacramento}</Text>
      <BarraUso porcentaje={asistencia} etiqueta="ASIS" />
      <BarraUso porcentaje={pagos} etiqueta="PAGO" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Cursos de la parroquia</Text>
        <Text style={estilos4.headerSub}>{CURSOS_DEMO.length} cursos</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {CURSOS_DEMO.map((curso) => (
          <TarjetaCurso key={curso.id} {...curso} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
  },
  barraFondo: {
    flex: 1,
    height: 6,
    backgroundColor: '#263746',
    borderRadius: 3,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 3,
  },
  barraPct: {
    width: 34,
    fontSize: 11,
    textAlign: 'right',
    fontWeight: '700',
  },
})