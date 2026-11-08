// app/index.tsx — añade debajo de styles1
import { useState, useCallback } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Catequizando, CATEQUIZANDOS } from './paso1_mp'
import { Paso1FilaCatequizando } from './paso1FilaServidor_mp'
import { Paso2ListaVacia } from './paso2ListaVacia_mp'
import { Paso2Separador } from './paso2Separador_mp'

// Simula una página extra de catequizandos (llegará del backend)
const PAGINA_2: Catequizando[] = [
  { id: '9',  nombre: 'Gabriela Núñez', sacramento: 'Bautismo',     inscrito: true  },
  { id: '10', nombre: 'Andrés Cedeño',  sacramento: 'Confirmación', inscrito: false },
]

export function Paso2() {
  const [datos, setDatos] = useState<Catequizando[]>(CATEQUIZANDOS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    // Simula llamada a la API (1 segundo)
    setTimeout(() => {
      setDatos(CATEQUIZANDOS) // restaura la lista original
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
      <Text style={styles2.titulo}>Catequizandos · p.{paginaActual}</Text>
      <FlatList<Catequizando>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaCatequizando catequizando={item} />}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={<Paso2ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#ea580c" />
          ) : null
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#ea580c',
    color: '#fff',
  },
})