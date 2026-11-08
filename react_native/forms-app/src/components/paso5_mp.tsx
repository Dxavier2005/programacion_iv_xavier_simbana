// app/index.tsx — añade debajo de styles4
import { useState } from 'react'
import { Alert, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

// Sacramentos que acepta la parroquia
const SACRAMENTOS_VALIDOS = ['bautismo', 'primera comunión', 'confirmación', 'matrimonio']

type CamposFormulario = {
  nombre: string
  sacramento: string
  edad: string
}

type ErroresFormulario = {
  nombre: string | null
  sacramento: string | null
  edad: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { nombre: null, sacramento: null, edad: null }

  // Nombre: obligatorio y al menos 2 caracteres
  if (campos.nombre.trim().length === 0) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (campos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres'
  }

  // Sacramento: debe ser uno de los sacramentos aceptados
  if (campos.sacramento.trim().length === 0) {
    errores.sacramento = 'El sacramento es obligatorio'
  } else if (!SACRAMENTOS_VALIDOS.includes(campos.sacramento.trim().toLowerCase())) {
    errores.sacramento = 'Sacramento no válido (bautismo, primera comunión, confirmación o matrimonio)'
  }

  // Edad: número entero de años entre 1 y 100
  const numeroEdad = Number(campos.edad)
  if (campos.edad.trim().length === 0) {
    errores.edad = 'La edad es obligatoria'
  } else if (!Number.isInteger(numeroEdad) || numeroEdad < 1 || numeroEdad > 100) {
    errores.edad = 'Edad inválida (1 – 100 años)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5() {
  const [campos, setCampos] = useState<CamposFormulario>({
    nombre: '',
    sacramento: '',
    edad: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    nombre: null,
    sacramento: null,
    edad: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe (UX más amigable)
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Catequizando registrado',
      `${campos.nombre} · ${campos.sacramento} · ${campos.edad} años`,
      [
        {
          text: 'Registrar otro',
          onPress: () => {
            setCampos({ nombre: '', sacramento: '', edad: '' })
            setErrores({ nombre: null, sacramento: null, edad: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Registrar catequizando</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Nombre del catequizando *" error={errores.nombre}>
          <TextInput
            style={[
              styles5.campo,
              errores.nombre !== null && styles5.campoError,
            ]}
            value={campos.nombre}
            onChangeText={(v) => actualizarCampo('nombre', v)}
            placeholder="ej. María Fernanda López"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Sacramento *" error={errores.sacramento}>
          <TextInput
            style={[
              styles5.campo,
              errores.sacramento !== null && styles5.campoError,
            ]}
            value={campos.sacramento}
            onChangeText={(v) => actualizarCampo('sacramento', v)}
            placeholder="Bautismo, Primera Comunión, Confirmación o Matrimonio"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Edad en años *" error={errores.edad}>
          <TextInput
            style={[
              styles5.campo,
              errores.edad !== null && styles5.campoError,
            ]}
            value={campos.edad}
            onChangeText={(v) => actualizarCampo('edad', v)}
            placeholder="9"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Enviado' : 'Registrar catequizando'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff7ed' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ea580c', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#ea580c',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#c2410c' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})