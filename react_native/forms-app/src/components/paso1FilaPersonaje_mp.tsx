import { StyleSheet, Text, View } from 'react-native'
import type { CatequizandoCurso } from './paso1Personaje_mp'

export function Paso1FilaPersonaje({ catequizando }: { catequizando: CatequizandoCurso }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{catequizando.nombre}</Text>
        <Text style={styles1.especie}>
          {catequizando.sacramento}{catequizando.catequista ? ` · ${catequizando.catequista}` : ''}
        </Text>
      </View>
      <View
        style={[
          styles1.estado,
          catequizando.catequista ? styles1.estadoConTalento : styles1.estadoSinTalento,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {catequizando.catequista ? 'CON GRUPO' : 'SIN GRUPO'}
        </Text>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  especie: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoConTalento: { backgroundColor: '#e8f5e9' },
  estadoSinTalento: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})