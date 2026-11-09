
import type { ComponentRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput as RNTextInput, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso3MP() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputHostRef = useRef<ComponentRef<typeof RNTextInput>>(null)
  const inputPuertoRef = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [host, setHost] = useState<string>('')
  const [puerto, setPuerto] = useState<string>('22')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al registrar
    setUltimaConexion(
      `${host || 'curso de sacramentos'}:${puerto} — intento #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar Curso de Sacramentos</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del curso</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="Primera Comunión"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Código del curso</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Registrar curso</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimaConexion}</Text>
      <Text style={styles.detalle}>
        (los intentos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}

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
    fontSize: 15,
    fontWeight: '600',
    color: '#795548',
  },
  latencia: {
    fontSize: 10,
    fontWeight: '600',
    color: '#09e3a5',
  },
  ciclos: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1267fb',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonIniciar: {
    backgroundColor: '#795548',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#795548',
    fontSize: 14,
  },
  formulario: {
    width: '100%',
    gap: 6,
  },
  input: {
    color: '#795548',
    fontSize: 14,
  },
  botonActivo: {
    backgroundColor: '#795548',
  },
})
