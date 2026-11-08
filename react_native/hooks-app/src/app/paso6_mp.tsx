import { useMemo, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


interface Cuota {
  nombre: string;
  precio: number;
  cantidad: number;
}


export default function Paso6() {
  const [cuotas, setCuotas] = useState<Cuota[]>([
    { nombre: 'Inscripción', precio: 25, cantidad: 2 },
    { nombre: 'Material de catequesis', precio: 15, cantidad: 3 },
    { nombre: 'Retiro espiritual', precio: 200, cantidad: 1 },
  ]);


  const [contador, setContador] = useState<number>(0);


  // Memoriza el cálculo del total
  const total = useMemo(() => {
    console.log('Calculando total...');


    return cuotas.reduce(
      (acumulado, cuota) =>
        acumulado + cuota.precio * cuota.cantidad,
      0
    );
  }, [cuotas]);


  function agregarCuota() {
    setCuotas((actuales) => [
      ...actuales,
      { nombre: 'Certificado', precio: 30, cantidad: 1 },
    ]);
    console.log(cuotas)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Cuotas del curso de sacramentos
      </Text>


      <Text>Conceptos: {cuotas.length}</Text>


      <Text style={styles.total}>
        Total: ${total.toFixed(2)}
      </Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Text>Contador: {contador}</Text>


      <Button
        title="Agregar certificado"
        onPress={agregarCuota}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});