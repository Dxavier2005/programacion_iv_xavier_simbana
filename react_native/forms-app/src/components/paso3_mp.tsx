// app/index.tsx — añade debajo de styles2
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import type { Catequizando } from './paso1_mp'
import { Paso1FilaCatequizando } from './paso1FilaServidor_mp'
import { Paso3EncabezadoSeccion } from './paso3EncabezadoSeccion_mp'

type SeccionSacramento = {
  title: string
  zona: string
  data: Catequizando[]
}

const SECCIONES: SeccionSacramento[] = [
  {
    title: 'Primera Comunión',
    zona: 'Aula 7',
    data: [
      { id: 's1', nombre: 'María Fernanda López', sacramento: 'Primera Comunión', inscrito: true  },
      { id: 's2', nombre: 'Juan Pablo Torres',    sacramento: 'Primera Comunión', inscrito: true  },
      { id: 's3', nombre: 'Daniel Pozo',          sacramento: 'Primera Comunión', inscrito: true  },
    ],
  },
  {
    title: 'Confirmación',
    zona: 'Aula 3',
    data: [
      { id: 's4', nombre: 'Sofía Ramos',  sacramento: 'Confirmación', inscrito: true  },
      { id: 's5', nombre: 'Carlos Mena',  sacramento: 'Confirmación', inscrito: false },
    ],
  },
  {
    title: 'Bautismo',
    zona: 'Aula 12',
    data: [
      { id: 's6', nombre: 'Ana Lucía Vera',  sacramento: 'Bautismo', inscrito: true  },
      { id: 's7', nombre: 'Luis Paredes',    sacramento: 'Bautismo', inscrito: false },
      { id: 's8', nombre: 'Gabriela Núñez',  sacramento: 'Bautismo', inscrito: true  },
    ],
  },
]

export function Paso3() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Cursos por sacramento</Text>
      <SectionList<Catequizando, SeccionSacramento>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaCatequizando catequizando={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} zona={section.zona} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#ea580c',
    color: '#fff',
  },
})