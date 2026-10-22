import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'


export default function Paso2() {
 const [latencia, setLatencia] = useState<number | null>(null)
 const [estado, setEstado] = useState<EstadoPing>('inactivo')
 const [activo, setActivo] = useState<boolean>(false)
 const [ciclos, setCiclos] = useState<number>(0)
 const [paquetesPerdidos, setPaquetesPerdidos] = useState<number>(0)


 useEffect(() => {
   if (!activo) return


   let timeout: ReturnType<typeof setTimeout> | undefined


   const intervalo = setInterval(() => {
     setEstado('pinging')


     timeout = setTimeout(() => {
       const falla = Math.random() < 0.15
       if (falla) {
         setLatencia(null)
         setEstado('timeout')
         setPaquetesPerdidos(p => p + 1)
       } else {
         const ms = Math.floor(Math.random() * 190) + 10
         setLatencia(ms)
         setEstado('ok')
       }
       setCiclos(c => c + 1)
     }, 400)
   }, 2000)


   return () => {
     clearInterval(intervalo)
     if (timeout !== undefined) clearTimeout(timeout)
   }
 }, [activo])


 const colorEstado: Record<EstadoPing, string> = {
   pinging: '#1565c0',
   ok: '#2e7d32',
   timeout: '#c62828',
   inactivo: '#757575',
 }


 const porcentajePerdida =
   ciclos === 0 ? '0.0%' : `${((paquetesPerdidos / ciclos) * 100).toFixed(1)}%`


 return (
   <View style={styles.contenedor}>
     <Text style={styles.titulo}>Monitor de Ping — nginx-01</Text>


     <View style={styles.tarjeta}>
       <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
         {estado.toUpperCase()}
       </Text>
       <Text style={styles.latencia}>
         {latencia !== null ? `${latencia} ms` : '— ms'}
       </Text>
       <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
       <Text style={styles.ciclos}>Paquetes perdidos: {porcentajePerdida}</Text>
       <Text style={styles.detalle}>nginx-01 · 10.0.2.30 · Puerto 80</Text>
     </View>


     <Pressable
       style={({ pressed }) => [
         styles.boton,
         activo ? styles.botonDetener : styles.botonIniciar,
         pressed && { opacity: 0.75 },
       ]}
       onPress={() => setActivo(a => !a)}
     >
       <Text style={styles.textoBoton}>
         {activo ? 'Detener ping' : 'Iniciar ping'}
       </Text>
     </Pressable>
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
 tarjeta: {
   width: '100%',
   padding: 16,
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#ddd',
   backgroundColor: '#fff',
   gap: 8,
 },
 etiqueta: {
   fontSize: 15,
   fontWeight: '700',
 },
 latencia: {
   fontSize: 28,
   fontWeight: '700',
   color: '#1a1a1a',
 },
 ciclos: {
   fontSize: 14,
   color: '#444',
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
   backgroundColor: '#1565c0',
 },
 botonDetener: {
   backgroundColor: '#c62828',
 },
 textoBoton: {
   color: '#fff',
   fontWeight: '600',
   fontSize: 15,
 },
})
