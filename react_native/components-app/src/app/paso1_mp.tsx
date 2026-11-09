// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaCursoProps {
  nombre: string
  catequista: string
  sacramento: string
  aula: number
  horario?: string
}

function TarjetaCurso({ nombre, catequista, sacramento, aula, horario }: TarjetaCursoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreCurso}>{nombre}</Text>
      <Text style={styles.datoCatequista}>{catequista} - Aula {aula}</Text>
      <Text style={styles.datoSacramento}>{sacramento}</Text>
      <Text style={styles.datoHorario}>{horario ?? 'Sin horario'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Cursos de sacramentos</Text>
      <TarjetaCurso
        nombre="Grupo A"
        catequista="Rosa Andrade"
        sacramento="Primera Comunión"
        aula={7}
        horario="Sábados 09:00"
      />
      <TarjetaCurso
        nombre="Grupo B"
        catequista="Pedro Salazar"
        sacramento="Confirmación"
        aula={3}
        horario="Domingos 10:30"
      />
      <TarjetaCurso
        nombre="Grupo C"
        catequista="María Torres"
        sacramento="Bautismo"
        aula={12}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreCurso: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoCatequista: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoSacramento: {
    fontSize: 12,
    color: '#757575',
  },
  datoHorario: {
    fontSize: 12,
    color: '#757575',
  },
})