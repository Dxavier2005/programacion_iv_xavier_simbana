import { ScrollView, StyleSheet, Text, View } from 'react-native'

type Personaje = {
  nombre: string
  alias: string
  color: string
  colorClaro: string
}

const personajes: Personaje[] = [
  { nombre: 'Goku', alias: 'Guerrero Saiyajin', color: '#e65100', colorClaro: '#ff9800' },
  { nombre: 'Vegeta', alias: 'Príncipe Saiyajin', color: '#283593', colorClaro: '#5c6bc0' },
  { nombre: 'Gohan', alias: 'El Gran Saiyaman', color: '#6a1b9a', colorClaro: '#ab47bc' },
  { nombre: 'Piccolo', alias: 'Guerrero Namekiano', color: '#1b5e20', colorClaro: '#43a047' },
  { nombre: 'Bulma', alias: 'Genio de Capsule Corp.', color: '#0277bd', colorClaro: '#29b6f6' },
  { nombre: 'Freezer', alias: 'Emperador del Universo', color: '#6a1b9a', colorClaro: '#ec407a' },
]

export default function Paso1DragonBall() {
  return (
    <ScrollView
      style={styles.pantalla}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}>
      <View style={styles.encabezado}>
        <Text style={styles.kicker}>DRAGON BALL · PASO 1</Text>
        <Text style={styles.titulo}>Flexbox con personajes</Text>
        <Text style={styles.descripcion}>
          Aprende a organizar elementos usando columnas, filas, proporciones y saltos de línea.
        </Text>
      </View>

      <Text style={styles.etiqueta}>flexDirection: 'column'</Text>
      <View style={styles.columna}>
        {personajes.slice(0, 3).map((personaje) => (
          <View key={personaje.nombre} style={[styles.tarjetaAncha, { backgroundColor: personaje.color }]}>
            <View>
              <Text style={styles.nombre}>{personaje.nombre}</Text>
              <Text style={styles.alias}>{personaje.alias}</Text>
            </View>
            <Text style={styles.energia}>KI</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flexDirection: 'row' + justifyContent: 'space-between'</Text>
      <View style={styles.fila}>
        {personajes.slice(0, 3).map((personaje) => (
          <View key={personaje.nombre} style={[styles.orbe, { backgroundColor: personaje.colorClaro }]}>
            <Text style={styles.orbeNombre}>{personaje.nombre}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={styles.filaFlex}>
        <View style={[styles.barra, styles.barraPrincipal, { backgroundColor: personajes[0].color }]}>
          <Text style={styles.textoBarra}>Goku</Text>
        </View>
        <View style={[styles.barra, styles.barraSecundaria, { backgroundColor: personajes[1].color }]}>
          <Text style={styles.textoBarra}>Vegeta</Text>
        </View>
        <View style={[styles.barra, styles.barraSecundaria, { backgroundColor: personajes[2].color }]}>
          <Text style={styles.textoBarra}>Gohan</Text>
        </View>
      </View>

      <Text style={styles.etiqueta}>flexWrap: 'wrap' + gap: 8</Text>
      <View style={styles.rejilla}>
        {personajes.map((personaje) => (
          <View key={personaje.nombre} style={[styles.chip, { backgroundColor: personaje.color }]}>
            <Text style={styles.textoChip}>{personaje.nombre}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#fff8e1',
  },
  contenido: {
    gap: 14,
    padding: 18,
    paddingBottom: 32,
  },
  encabezado: {
    gap: 6,
    marginBottom: 6,
  },
  kicker: {
    color: '#e65100',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  titulo: {
    color: '#212121',
    fontSize: 28,
    fontWeight: '800',
  },
  descripcion: {
    color: '#6d4c41',
    fontSize: 15,
    lineHeight: 21,
  },
  etiqueta: {
    color: '#795548',
    fontFamily: 'monospace',
    fontSize: 12,
    marginTop: 6,
  },
  columna: {
    gap: 8,
  },
  tarjetaAncha: {
    alignItems: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  nombre: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  alias: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
    opacity: 0.9,
  },
  energia: {
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  fila: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orbe: {
    alignItems: 'center',
    borderRadius: 50,
    height: 82,
    justifyContent: 'center',
    width: 82,
  },
  orbeNombre: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '800',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  barra: {
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 54,
    paddingHorizontal: 8,
  },
  barraPrincipal: {
    flex: 2,
  },
  barraSecundaria: {
    flex: 1,
  },
  textoBarra: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  textoChip: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
})