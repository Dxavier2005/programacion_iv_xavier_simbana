// app/index.tsx — añade debajo de styles3
import { useRef, useState, type ComponentRef } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4Inscripcion() {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [aula, setAula] = useState('')
  const [codigo, setCodigo] = useState('')
  const [mostrarCodigo, setMostrarCodigo] = useState(false)

  const refEdad = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refAula = useRef<ComponentRef<typeof TextInput> | null>(null)
  const refCodigo = useRef<ComponentRef<typeof TextInput> | null>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Inscribir catequizando</Text>

      {/* Nombre del catequizando */}
      <Text style={styles4.etiqueta}>Ingrese el nombre: </Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. María López"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refEdad.current?.focus()}
      />

      {/* Edad */}
      <Text style={styles4.etiqueta}>Ingrese la edad: </Text>
      <TextInput
        ref={refEdad}
        style={styles4.campo}
        value={edad}
        onChangeText={setEdad}
        placeholder="9"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refAula.current?.focus()}
      />

      {/* Aula */}
      <Text style={styles4.etiqueta}>Ingrese el aula: </Text>
      <TextInput
        ref={refAula}
        style={styles4.campo}
        value={aula}
        onChangeText={setAula}
        placeholder="7"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refCodigo.current?.focus()}
      />

      {/* Código de inscripción */}
      <Text style={styles4.etiqueta}>Código de inscripción: </Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refCodigo}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={codigo}
          onChangeText={setCodigo}
          placeholder="••••••••"
          secureTextEntry={!mostrarCodigo}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarCodigo((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarCodigo ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          inscribir {nombre || '<nombre>'} · edad {edad || '<edad>'} · aula {aula || '7'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})