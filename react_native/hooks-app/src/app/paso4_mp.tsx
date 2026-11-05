
import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'

export function Paso4MP() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const servidores = [
    { nombre: 'Bautismo',   ip: 'Curso inicial', estado: 'activo' },
    { nombre: 'Primera Comunión',    ip: 'Formación eucarística', estado: 'activo' },
    { nombre: 'Confirmación', ip: 'Formación cristiana', estado: 'pendiente' },
    { nombre: 'Matrimonio',ip: 'Preparación matrimonial', estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Cursos de Sacramentos
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de cursos con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {servidores.map(srv => (
          <View
            key={srv.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>
              {srv.nombre}
            </Text>
            <Text style={[styles.ipServidor, { color: colores.detalle }]}>
              {srv.ip}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: srv.estado === 'activo' ? '#2e7d32' : '#c62828',
            }}>
              {srv.estado === 'activo' ? 'DISPONIBLE' : 'PENDIENTE'}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 Control de cursos de catequesis: aquí se muestran ejemplos de sacramentos
          y sus cursos de preparación. La información es ilustrativa y puede adaptarse
          para incluir horarios, catequistas, estudiantes e inscripciones.
        </Text>
      </View>
    </View>
  )
}

// Estilos adicionales que no estaban en el StyleSheet del paso anterior
// (se declaran todos juntos en el bloque de referencia al final)
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
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  nombreServidor: {
    fontSize: 15,
    fontWeight: '600',
    color: '#893006',
  },
  ipServidor: {
    fontSize: 10,
    fontWeight: '600',
    color: '#09e3a5',
  },
  nota: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  notaTexto: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
})
