// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaCatequizando } from './paso1FilaServidor_mp'

export type Catequizando = {
  id: string
  nombre: string
  sacramento: string
  inscrito: boolean
}

export const CATEQUIZANDOS: Catequizando[] = [
  { id: '1', nombre: 'María Fernanda López', sacramento: 'Primera Comunión', inscrito: true  },
  { id: '2', nombre: 'Juan Pablo Torres',    sacramento: 'Primera Comunión', inscrito: true  },
  { id: '3', nombre: 'Ana Lucía Vera',       sacramento: 'Bautismo',         inscrito: true  },
  { id: '4', nombre: 'Luis Paredes',         sacramento: 'Bautismo',         inscrito: false },
  { id: '5', nombre: 'Sofía Ramos',          sacramento: 'Confirmación',     inscrito: true  },
  { id: '6', nombre: 'Carlos Mena',          sacramento: 'Confirmación',     inscrito: false },
  { id: '7', nombre: 'Elena Cruz',           sacramento: 'Matrimonio',       inscrito: true  },
  { id: '8', nombre: 'Daniel Pozo',          sacramento: 'Primera Comunión', inscrito: true  },
]

export function Paso1() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Catequizandos inscritos</Text>
      <FlatList<Catequizando>
        data={CATEQUIZANDOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaCatequizando catequizando={item} />}
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