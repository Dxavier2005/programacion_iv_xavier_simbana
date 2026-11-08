import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { TarjetaServidor } from './paso8TarjetaServidor'

export function Paso8() {
  const webHook   = useConexionSimulada('grupo-a')
  const cacheHook = useConexionSimulada('grupo-b')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de Inscripciones</Text>

      <TarjetaServidor nombre="grupo-a" hook={webHook} />
      <TarjetaServidor nombre="grupo-b" hook={cacheHook} />
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
})