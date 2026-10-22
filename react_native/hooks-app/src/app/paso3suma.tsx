import { useEffect, useRef, useState } from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    type TextInputInstance,
    View,
} from 'react-native'


export default function Paso3sumasuma() {
 const inputHostRef = useRef<TextInputInstance>(null)
 const inputPuertoRef = useRef<TextInputInstance>(null)
 const intentosSilenciosRef = useRef<number>(0)


 const [host, setHost] = useState<string>('')
 const [puerto, setPuerto] = useState<string>('22')
 const [ultimaConexion, setUltimaConexion] = useState<string>('—')


 useEffect(() => {
   inputHostRef.current?.focus()
 }, [])


 function intentarConexion() {
   intentosSilenciosRef.current += 1
   setUltimaConexion(
     `${host.trim() || 'servidor'}:${puerto || '22'} — intento #${intentosSilenciosRef.current}`,
   )
 }


 return (
   <View style={styles.contenedor}>
     <Text style={styles.titulo}>Configurar Conexión SSH</Text>


     <View style={styles.formulario}>
       <Text style={styles.etiqueta}>Host o IP</Text>
       <TextInput
         ref={inputHostRef}
         style={styles.input}
         value={host}
         onChangeText={setHost}
         placeholder="10.0.2.10"
         placeholderTextColor="#888"
         autoCapitalize="none"
         autoCorrect={false}
         keyboardType="url"
         returnKeyType="next"
         onSubmitEditing={() => inputPuertoRef.current?.focus()}
       />


       <Text style={styles.etiqueta}>Puerto SSH</Text>
       <TextInput
         ref={inputPuertoRef}
         style={styles.input}
         value={puerto}
         onChangeText={setPuerto}
         placeholder="22"
         placeholderTextColor="#888"
         keyboardType="number-pad"
         returnKeyType="done"
         onSubmitEditing={intentarConexion}
       />
     </View>


     <Pressable
       style={({ pressed }) => [
         styles.boton,
         pressed && styles.botonPresionado,
       ]}
       onPress={intentarConexion}
     >
       <Text style={styles.textoBoton}>Conectar</Text>
     </Pressable>


     <View style={styles.resultado}>
       <Text style={styles.etiqueta}>Último intento</Text>
       <Text style={styles.detalle}>{ultimaConexion}</Text>
     </View>
     <Text style={styles.ayuda}>
       Los reintentos silenciosos no causan re-renders.
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
   textAlign: 'center',
 },
 formulario: {
   width: '100%',
   padding: 16,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#ddd',
   backgroundColor: '#fff',
   gap: 10,
 },
 etiqueta: {
   fontSize: 15,
   fontWeight: '600',
   color: '#333',
 },
 input: {
   width: '100%',
   minHeight: 48,
   paddingHorizontal: 12,
   borderRadius: 8,
   borderWidth: 1,
   borderColor: '#bbb',
   backgroundColor: '#fff',
   color: '#1a1a1a',
   fontSize: 16,
 },
 boton: {
   width: '100%',
   paddingVertical: 14,
   borderRadius: 8,
   alignItems: 'center',
   backgroundColor: '#1565c0',
 },
 botonPresionado: {
   opacity: 0.75,
 },
 textoBoton: {
   color: '#fff',
   fontWeight: '600',
   fontSize: 15,
 },
 resultado: {
   width: '100%',
   padding: 16,
   borderRadius: 8,
   backgroundColor: '#fff',
   gap: 6,
 },
 detalle: {
   fontSize: 14,
   color: '#555',
 },
 ayuda: {
   fontSize: 13,
   color: '#666',
   textAlign: 'center',
 },
})


