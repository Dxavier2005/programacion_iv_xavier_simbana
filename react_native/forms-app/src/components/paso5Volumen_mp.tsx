// app/index.tsx — añade debajo de styles4
import { useState } from 'react'
import { Alert, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, StyleSheet } from 'react-native'

type CamposFormulario = {
  cuota: string
  meses: string
  catequizandos: string
}

type ErroresFormulario = {
  cuota: string | null
  meses: string | null
  catequizandos: string | null
}

// Valida que el texto sea un número mayor que 0
function validarMedida(valor: string, nombre: string): string | null {
  if (valor.trim().length === 0) return `La ${nombre} es obligatoria`
  const numero = Number(valor)
  if (Number.isNaN(numero)) return `La ${nombre} debe ser un número`
  if (numero <= 0) return `La ${nombre} debe ser mayor a 0`
  return null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  return {
    cuota:         validarMedida(campos.cuota, 'cuota'),
    meses:         validarMedida(campos.meses, 'cantidad de meses'),
    catequizandos: validarMedida(campos.catequizandos, 'cantidad de catequizandos'),
  }
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

export function Paso5Pago() {
  const [campos, setCampos] = useState<CamposFormulario>({
    cuota: '',
    meses: '',
    catequizandos: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    cuota: null,
    meses: null,
    catequizandos: null,
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

    const total = Number(campos.cuota) * Number(campos.meses) * Number(campos.catequizandos)
    setEnviado(true)
    Alert.alert(
      'Total calculado',
      `${campos.cuota} × ${campos.meses} × ${campos.catequizandos} = $${total}`,
      [
        {
          text: 'Calcular otro',
          onPress: () => {
            setCampos({ cuota: '', meses: '', catequizandos: '' })
            setErrores({ cuota: null, meses: null, catequizandos: null })
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
        <Text style={styles5.titulo}>Pago del curso de sacramentos</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Cuota mensual ($) *" error={errores.cuota}>
          <TextInput
            style={[
              styles5.campo,
              errores.cuota !== null && styles5.campoError,
            ]}
            value={campos.cuota}
            onChangeText={(v) => actualizarCampo('cuota', v)}
            placeholder="ej. 5"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Meses a pagar *" error={errores.meses}>
          <TextInput
            style={[
              styles5.campo,
              errores.meses !== null && styles5.campoError,
            ]}
            value={campos.meses}
            onChangeText={(v) => actualizarCampo('meses', v)}
            placeholder="ej. 4"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Catequizandos inscritos *" error={errores.catequizandos}>
          <TextInput
            style={[
              styles5.campo,
              errores.catequizandos !== null && styles5.campoError,
            ]}
            value={campos.catequizandos}
            onChangeText={(v) => actualizarCampo('catequizandos', v)}
            placeholder="ej. 2"
            keyboardType="numeric"
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
            {enviado ? '✓ Calculado' : 'Calcular total'}
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