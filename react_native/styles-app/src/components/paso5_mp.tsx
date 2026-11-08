// app/index.tsx — añade Paso5 y los helpers de tema
import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import {
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native'

// ── Paleta centralizada ─────────────────────────────────────────────
const PALETA = {
  claro: {
    fondo:      '#fff7ed',
    superficie: '#ffffff',
    texto:      '#1c1917',
    textoSutil: '#78716c',
    primario:   '#ea580c',
    peligro:    '#c62828',
    borde:      '#fed7aa',
    exito:      '#2e7d32',
    alerta:     '#e65100',
  },
  oscuro: {
    fondo:      '#1c1917',
    superficie: '#292524',
    texto:      '#f5f5f4',
    textoSutil: '#a8a29e',
    primario:   '#fb923c',
    peligro:    '#ff7b72',
    borde:      '#44403c',
    exito:      '#3fb950',
    alerta:     '#f0883e',
  },
} as const

type ColoresTema = typeof PALETA.claro | typeof PALETA.oscuro

// ── Context para tema manual (anula la preferencia del sistema) ─────
type ContextoTema = {
  colores: ColoresTema
  temaForzado: 'claro' | 'oscuro' | null
  alternarTema: () => void
}

const TemaContext = createContext<ContextoTema | null>(null)

function ProveedorTema({ children }: { children: React.ReactNode }) {
  const esquemaSistema = useColorScheme()
  const [temaForzado, setTemaForzado] = useState<'claro' | 'oscuro' | null>(null)

  const temaActivo = temaForzado ?? (esquemaSistema === 'dark' ? 'oscuro' : 'claro')
  const colores = PALETA[temaActivo]

  const alternarTema = useCallback(() => {
    setTemaForzado((prev) => {
      if (prev === null) return temaActivo === 'claro' ? 'oscuro' : 'claro'
      return prev === 'claro' ? 'oscuro' : 'claro'
    })
  }, [temaActivo])

  return (
    <TemaContext.Provider value={{ colores, temaForzado, alternarTema }}>
      {children}
    </TemaContext.Provider>
  )
}

function useTema(): ContextoTema {
  const ctx = useContext(TemaContext)
  if (!ctx) throw new Error('useTema debe usarse dentro de ProveedorTema')
  return ctx
}

// ── Componente principal del Paso 5 ─────────────────────────────────
export function Paso5() {
  return (
    <ProveedorTema>
      <PantallaCursoTema />
    </ProveedorTema>
  )
}

function PantallaCursoTema() {
  const { colores, temaForzado, alternarTema } = useTema()
  const esquemaSistema = useColorScheme()

  const catequizandos = [
    { id: '1', nombre: 'María Fernanda', sacramento: 'Primera Comunión · Grupo A', estado: 'inscrito' as const },
    { id: '2', nombre: 'Juan Pablo',     sacramento: 'Confirmación · Grupo B',     estado: 'en_proceso' as const },
    { id: '3', nombre: 'Ana Lucía',      sacramento: 'Bautismo · Grupo C',         estado: 'graduado'   as const },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colores.fondo }}
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      {/* Cabecera con botón de cambio de tema */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colores.texto }}>
          Catequizandos del curso
        </Text>
        <Pressable
          onPress={alternarTema}
          style={{
            backgroundColor: colores.primario,
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 999,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 13, fontWeight: '600' }}>
            {temaForzado === null
              ? `Sistema (${esquemaSistema ?? 'desconocido'})`
              : temaForzado === 'claro' ? 'Claro' : 'Oscuro'}
          </Text>
        </Pressable>
      </View>

      {/* Tarjetas de catequizandos con colores del tema */}
      {catequizandos.map((c) => {
        const colorEstado =
          c.estado === 'inscrito'   ? colores.exito  :
          c.estado === 'en_proceso' ? colores.alerta :
          colores.textoSutil

        return (
          <View
            key={c.id}
            style={{
              backgroundColor: colores.superficie,
              borderRadius: 10,
              padding: 14,
              borderWidth: 1,
              borderColor: colores.borde,
              gap: 4,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: colores.texto }}>
                {c.nombre}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colorEstado }}>
                {c.estado.replace('_', ' ').toUpperCase()}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: colores.textoSutil }}>{c.sacramento}</Text>
          </View>
        )
      })}

      {/* Mini paleta activa */}
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {(Object.entries(colores) as [string, string][]).map(([clave, valor]) => (
          <View key={clave} style={{ alignItems: 'center', gap: 2 }}>
            <View style={{
              width: 36, height: 36, borderRadius: 18,
              backgroundColor: valor,
              borderWidth: 1, borderColor: colores.borde,
            }} />
            <Text style={{ fontSize: 9, color: colores.textoSutil }}>{clave}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}