import {
  useState,
  useCallback,
  memo,
} from 'react';


import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';


interface Cuota {
  id: number;
  nombre: string;
  precio: number;
}


interface CuotaItemProps {
  cuota: Cuota;
  onEliminar: (id: number) => void;
}


// Componente memorizado
const CuotaItem = memo(
  ({ cuota, onEliminar }: CuotaItemProps) => {
    console.log('Renderizando:', cuota.nombre);


    return (
      <View style={styles.cuota}>
        <Text>
          {cuota.nombre} - ${cuota.precio}
        </Text>


        <Button
          title="Eliminar"
          onPress={() => onEliminar(cuota.id)}
        />
      </View>
    );
  }
);


export default function Paso7() {
  const [cuotas, setCuotas] = useState<Cuota[]>([
    { id: 1, nombre: 'Inscripción', precio: 25 },
    { id: 2, nombre: 'Material de catequesis', precio: 15 },
  ]);


  const [contador, setContador] = useState(0);


  // Función memorizada para eliminar cuotas
  const eliminarCuota = useCallback((id: number) => {
    setCuotas((actuales) =>
      actuales.filter((cuota) => cuota.id !== id)
    );
  }, []);


  // Función memorizada para agregar cuotas
  const agregarCuota = useCallback(() => {
    setCuotas((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        nombre: 'Retiro espiritual',
        precio: 200,
      },
    ]);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Cuotas del curso de sacramentos
      </Text>


      <Text>Contador: {contador}</Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Button
        title="Agregar retiro espiritual"
        onPress={agregarCuota}
      />


      <FlatList
        data={cuotas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CuotaItem
            cuota={item}
            onEliminar={eliminarCuota}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cuota: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});