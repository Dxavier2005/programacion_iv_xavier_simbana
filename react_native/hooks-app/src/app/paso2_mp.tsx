
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'

export function Paso2MP() {
  const [latencia, setLatencia] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoPing>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [paquetesPerdidos, setPaquetesPerdidos] = useState<number>(0)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el seguimiento está detenido

    const intervalo = setInterval(() => {
      setEstado('pinging')

      // Simula el seguimiento de estudiantes: número aleatorio entre 10 y 200
      // con un 15 % de probabilidad de inasistencia
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setLatencia(null)
          setEstado('timeout')
          setPaquetesPerdidos(paquetes => paquetes + 1)
        } else {
          const ms = Math.floor(Math.random() * 190) + 10
          setLatencia(ms)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    // ← función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoPing, string> = {
    pinging:  '#795548',
    ok:       '#2e7d32',
    timeout:  '#c62828',
    inactivo: '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Control de Asistencia — Catequesis</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado == 'pinging' ? 'VERIFICANDO' : estado == 'ok' ? 'ASISTENCIA REGISTRADA' : estado == 'timeout' ? 'INASISTENCIA' : 'INACTIVO'}
        </Text>
        <Text style={styles.latencia}>
          {latencia !== null ? `${latencia} estudiantes` : '— estudiantes'}
        </Text>
        <Text style={styles.latencia}>
          {estado == 'timeout' ? `${(paquetesPerdidos / ciclos * 100).toFixed(1) + '%'} de inasistencias` : '— % de inasistencias'}
        </Text>
        <Text style={styles.ciclos}>Registros realizados: {ciclos}</Text>
        <Text style={styles.detalle}>Cursos de Sacramentos · Iglesia Católica</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener seguimiento' : 'Iniciar seguimiento'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#893006',
  },
  latencia: {
    fontSize: 10,
    fontWeight: '600',
    color: '#09e3a5',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonIniciar: {
    backgroundColor: '#795548',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#795548',
    fontSize: 14,
  },
})
