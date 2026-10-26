import { Pressable, StyleSheet, Text, View } from 'react-native'

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  titulo: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '700',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icono: {
    fontWeight: '700',
  },
  textoBadge: {
    fontWeight: '700',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  infoIzq: {
    flex: 1,
  },
  nombreCurso: {
    fontSize: 16,
    fontWeight: '600',
  },
  catequistaTexto: {
    marginTop: 4,
    color: '#757575',
  },
  infoDer: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  inscritos: {
    marginBottom: 4,
    color: '#757575',
    fontSize: 12,
  },
})

// ─── Paso 3 — Props opcionales ───────────────────────────────────────


type EstadoCurso = 'abierto' | 'pendiente' | 'cerrado' | 'cancelado' | 'suspendido'

interface BadgeEstadoProps {
  estado: EstadoCurso
  tamaño?: number          
  mostrarIcono?: boolean   
}


const COLOR_ESTADO: Record<EstadoCurso, { fondo: string; texto: string }> = {
  abierto:    { fondo: '#e8f5e9', texto: '#2e7d32' },
  pendiente:  { fondo: '#fff8e1', texto: '#f57f17' },
  cerrado:    { fondo: '#f5f5f5', texto: '#616161' },
  cancelado:  { fondo: '#fce4ec', texto: '#c62828' },
  suspendido: { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoCurso, string> = {
  abierto:    '●',
  pendiente:  '◐',
  cerrado:    '○',
  cancelado:  '✕',
  suspendido: '⏸',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaCursoProps {
  nombre: string
  catequista: string
  estado: EstadoCurso
  inscritos?: number       // catequizandos — opcional
  onPress?: () => void    
}

function FilaCurso({ nombre, catequista, estado, inscritos, onPress }: FilaCursoProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreCurso}>{nombre}</Text>
        <Text style={estilos3.catequistaTexto}>{catequista}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {inscritos !== undefined && (
          <Text style={estilos3.inscritos}>{inscritos} inscritos</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado de los cursos</Text>
      <FilaCurso nombre="Grupo A" catequista="Rosa Andrade"  estado="abierto"    inscritos={25} onPress={() => console.log('Seleccionado Grupo A')} />
      <FilaCurso nombre="Grupo B" catequista="Pedro Salazar" estado="abierto"    inscritos={18} />
      <FilaCurso nombre="Grupo C" catequista="María Torres"  estado="pendiente"  inscritos={30} />
      <FilaCurso nombre="Grupo D" catequista="Luis Mendoza" estado="cerrado" />
    </View>
  )
}