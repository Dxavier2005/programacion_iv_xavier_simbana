// app/index.tsx — añade debajo de styles2
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context/lib/typescript/src/SafeAreaView'
import { Paso3EncabezadoSeccion } from './paso3EncabezadoSeccion'

type Servidor = {
  id: string
  nombre: string
  ip: string
  activo: boolean
}

type SeccionDatacenter = {
  title: string
  region: string
  data: Servidor[]
}

const SECCIONES: SeccionDatacenter[] = [
  {
    title: 'DC Madrid (EU-West)',
    region: 'eu-west-1',
    data: [
      { id: 's1', nombre: 'web-01',    ip: '10.10.2.10', activo: true  },
      { id: 's2', nombre: 'web-02',    ip: '10.10.2.11', activo: true  },
      { id: 's3', nombre: 'db-master', ip: '10.10.3.20', activo: true  },
    ],
  },
  {
    title: 'DC Frankfurt (EU-Central)',
    region: 'eu-central-1',
    data: [
      { id: 's4', nombre: 'web-01',    ip: '10.20.2.10', activo: true  },
      { id: 's5', nombre: 'cache-01',  ip: '10.20.4.10', activo: false },
    ],
  },
  {
    title: 'DC São Paulo (SA-East)',
    region: 'sa-east-1',
    data: [
      { id: 's6', nombre: 'web-01',    ip: '10.30.2.10', activo: true  },
      { id: 's7', nombre: 'db-replica',ip: '10.30.3.21', activo: false },
      { id: 's8', nombre: 'bastion',   ip: '203.0.113.6', activo: true },
    ],
  },
]

function FilaServidor({ servidor }: { servidor: Servidor }) {
  return (
    <View style={styles3.filaServidor}>
      <View style={styles3.infoServidor}>
        <Text style={styles3.nombreServidor}>{servidor.nombre}</Text>
        <Text style={styles3.ipServidor}>{servidor.ip}</Text>
      </View>
      <Text style={[styles3.estadoServidor, servidor.activo ? styles3.activo : styles3.inactivo]}>
        {servidor.activo ? 'Activo' : 'Inactivo'}
      </Text>
    </View>
  )
}



export function Paso3() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Infraestructura global</Text>
      <SectionList<Servidor, SeccionDatacenter>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaServidor servidor={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} region={section.region} />
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
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  filaServidor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
  },
  infoServidor: { gap: 4 },
  nombreServidor: { fontSize: 16, fontWeight: '600', color: '#263238' },
  ipServidor: { fontSize: 13, color: '#607d8b' },
  estadoServidor: { fontSize: 12, fontWeight: '700' },
  activo: { color: '#2e7d32' },
  inactivo: { color: '#c62828' },
})