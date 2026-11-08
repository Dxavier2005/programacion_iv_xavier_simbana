// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaPersonaje } from './paso1FilaPersonaje_mp'

export type CatequizandoCurso = {
  id: string
  nombre: string
  sacramento: string
  catequista: string
}

const CATEQUIZANDOS_CURSO: CatequizandoCurso[] = [
  { id: '1', nombre: 'María Fernanda López', sacramento: 'Primera Comunión', catequista: 'Rosa Andrade' },
  { id: '2', nombre: 'Juan Pablo Torres',    sacramento: 'Confirmación',     catequista: 'Pedro Salazar' },
  { id: '3', nombre: 'Ana Lucía Vera',       sacramento: 'Bautismo',         catequista: 'María Torres' },
  { id: '4', nombre: 'Luis Paredes',         sacramento: 'Primera Comunión', catequista: '' },
]

export function Paso1Personaje() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Catequizandos con grupo</Text>
      <FlatList<CatequizandoCurso>
        data={CATEQUIZANDOS_CURSO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaPersonaje catequizando={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#ea580c',
    color: '#fff',
  },
})