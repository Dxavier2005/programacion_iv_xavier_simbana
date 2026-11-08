// app/index.tsx — añade debajo de styles3
import { useRef, useState } from 'react'
import { Pressable, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

export function Paso4() {
  const [nombre, setNombre] = useState('')
  const [sacramento, setSacramento] = useState('')
  const [edad, setEdad] = useState('')
  const [pin, setPin] = useState('')
  const [mostrarPin, setMostrarPin] = useState(false)

  const refSacramento = useRef<TextInput>(null)
  const refEdad = useRef<TextInput>(null)
  const refPin = useRef<TextInput>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registrar inscripción</Text>

      {/* Nombre del catequizando */}
      <Text style={styles4.etiqueta}>Nombre del catequizando</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. María Fernanda López"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refSacramento.current?.focus()}
      />

      {/* Sacramento */}
      <Text style={styles4.etiqueta}>Sacramento</Text>
      <TextInput
        ref={refSacramento}
        style={styles4.campo}
        value={sacramento}
        onChangeText={setSacramento}
        placeholder="Bautismo, Primera Comunión, Confirmación..."
        returnKeyType="next"
        onSubmitEditing={() => refEdad.current?.focus()}
      />

      {/* Edad en años */}
      <Text style={styles4.etiqueta}>Edad (años)</Text>
      <TextInput
        ref={refEdad}
        style={styles4.campo}
        value={edad}
        onChangeText={setEdad}
        placeholder="9"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refPin.current?.focus()}
      />

      {/* PIN del representante */}
      <Text style={styles4.etiqueta}>PIN del representante</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refPin}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={pin}
          onChangeText={setPin}
          placeholder="••••"
          secureTextEntry={!mostrarPin}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <Pressable
          onPress={() => setMostrarPin((v) => !v)}
          style={styles4.togglePin}
        >
          <Text style={styles4.togglePinTexto}>
            {mostrarPin ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          inscripcion: {nombre || '<nombre>'} ({sacramento || '<sacramento>'}, {edad || '0'} años)
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#ea580c', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
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
  togglePin: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffedd5',
    borderRadius: 8,
  },
  togglePinTexto: { fontSize: 13, color: '#ea580c', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#292524',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})