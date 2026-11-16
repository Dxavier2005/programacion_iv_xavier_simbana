import { useState } from 'react'
import { Alert, ScrollView, Text, StyleSheet, View, SafeAreaView, Pressable, TextInput} from 'react-native'

export function Paso5() {
  const [campos, setCampos] = useState({
    nombre: '',
    ip: '',
    puerto: '22',
  })
  const [errores, setErrores] = useState({
    nombre: null,
    ip: null,
    puerto: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo, valor) {
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


    necesit