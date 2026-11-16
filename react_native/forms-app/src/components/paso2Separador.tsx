
import { StyleSheet, View, Text } from 'react-native'

function Separador() {
  return <View style={styles2.separador} />
}



export function PAo2ListaVacia() {
  return (
    <View style={styles2.vacio}>
      <Text style={styles2.vacioTexto}>Sin servidores registrados</Text>
      <Text style={styles2.vacioSub}>Agrega uno con el botón +</Text>
    </View>
  )
}

const styles2 = StyleSheet.create({

    vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
})


