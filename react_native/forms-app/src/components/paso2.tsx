// app/index.tsx — añade debajo de styles1
import {
  StyleSheet,
  ActivityIndicator,
  View,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native'
import { useState, useCallback } from 'react'

type Servidor = {
  id: string
  nombre: string
  ip: string
  activo: boolean
}

// Lista inicial de servidores
const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'web-01', ip: '10.0.1.10', activo: true },
  { id: '2', nombre: 'db-01', ip: '10.0.1.11', activo: true },
]

// Simula una página extra de servidores (llegará del backend)
const PAGINA_2: Servidor[] = [
  { id: '9',  nombre: 'monitor-01', ip: '10.0.5.10', activo: true  },
  { id: '10', nombre: 'monitor-02', ip: '10.0.5.11', activo: false },
]

function FilaServidor({ servidor }: { servidor: Servidor }) {
  return (
    <View style={styles2.fila}>
      <View>
        <Text style={styles2.nombre}>{servidor.nombre}</Text>
        <Text style={styles2.ip}>{servidor.ip}</Text>
      </View>
      <Text style={[styles2.estado, servidor.activo ? styles2.activo : styles2.inactivo]}>
        {servidor.activo ? 'Activo' : 'Inactivo'}
      </Text>
    </View>
  )
}

function Separador() {
  return <View style={styles2.separador} />
}

function ListaVacia() {
  return <Text style={styles2.vacia}>No hay servidores.</Text>
}




export function Paso2() {
  const [datos, setDatos] = useState<Servidor[]>(SERVIDORES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    // Simula llamada a la API (1 segundo)
    setTimeout(() => {
      setDatos(SERVIDORES) // restaura la lista original
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Servidores · p.{paginaActual}</Text>
      <FlatList<Servidor>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaServidor servidor={item} />}
        ItemSeparatorComponent={Separador}
        ListEmptyComponent={<ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : <>   </>
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  nombre: { fontSize: 16, fontWeight: '600' },
  ip: { color: '#666', marginTop: 4 },
  estado: { fontWeight: '600' },
  activo: { color: '#2e7d32' },
  inactivo: { color: '#c62828' },
  vacia: { padding: 16, textAlign: 'center', color: '#666' },
})