// app/index.tsx — agrega al archivo existente

import { useState } from "react"
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

interface BadgeEstadoProps {
  estado: string
  mostrarIcono?: boolean
  tamaño?: number
}

function BadgeEstado({ estado, mostrarIcono = false, tamaño = 12 }: BadgeEstadoProps) {
  return (
    <View style={estilos6.badgeEstado}>
      {mostrarIcono && (
        <View style={[estilos6.puntoEstado, { width: tamaño, height: tamaño }]} />
      )}
      <Text style={estilos6.textoEstado}>{estado}</Text>
    </View>
  )
}

interface CardProps {
  titulo: string
  subtitulo?: string
  children: React.ReactNode
}

function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos6.card}>
      <Text style={estilos6.cardTitulo}>{titulo}</Text>
      {subtitulo && <Text style={estilos6.cardSubtitulo}>{subtitulo}</Text>}
      <View style={estilos6.cardContenido}>{children}</View>
    </View>
  )
}

interface FilaInfoProps {
  etiqueta: string
  valor: string
}

function FilaInfo({ etiqueta, valor }: FilaInfoProps) {
  return (
    <View style={estilos6.filaInfo}>
      <Text style={estilos6.etiquetaInfo}>{etiqueta}</Text>
      <Text style={estilos6.valorInfo}>{valor}</Text>
    </View>
  )
}

interface ModalConfirmProps {
  visible: boolean
  titulo: string
  mensaje: string
  etiquetaConfirmar: string
  onConfirmar: () => void
  onCancelar: () => void
}

function ModalConfirm({
  visible,
  titulo,
  mensaje,
  etiquetaConfirmar,
  onConfirmar,
  onCancelar,
}: ModalConfirmProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancelar}>
      <View style={estilos6.overlayModal}>
        <View style={estilos6.contenidoModal}>
          <Text style={estilos6.tituloModal}>{titulo}</Text>
          <Text style={estilos6.mensajeModal}>{mensaje}</Text>
          <View style={estilos6.accionesModal}>
            <Pressable style={estilos6.botonCancelar} onPress={onCancelar}>
              <Text style={estilos6.textoCancelar}>Cancelar</Text>
            </Pressable>
            <Pressable style={estilos6.botonConfirmar} onPress={onConfirmar}>
              <Text style={estilos6.textoConfirmar}>{etiquetaConfirmar}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en web-01`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>web-01</Text>
          <Text style={estilos6.cabIp}>10.0.2.10 · Ubuntu 24.04 LTS</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas en tiempo real" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="CPU" valor="48% · 4 vCPU" />
          <FilaInfo etiqueta="RAM" valor="3.1 / 8 GB (38%)" />
          <FilaInfo etiqueta="Disco /" valor="42 / 100 GB (42%)" />
          <FilaInfo etiqueta="Red E/S" valor="12.4 Mbps ↓ · 3.1 Mbps ↑" />
          <FilaInfo etiqueta="Uptime" valor="47 días, 6 horas" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Configuración">
          <FilaInfo etiqueta="Hostname" valor="web-01.cluster.local" />
          <FilaInfo etiqueta="SSH" valor="Puerto 22 · clave RSA-4096" />
          <FilaInfo etiqueta="Firewall" valor="ufw activo · 3 reglas" />
          <FilaInfo etiqueta="Zona" valor="us-east-1a" />
          <FilaInfo etiqueta="Proveedor" valor="Bare-metal DC2" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Reiniciar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Reinicio')}
            />
            <BotonAccion
              etiqueta="Apagar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Apagado')}
            />
            <BotonAccion
              etiqueta="SSH"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Conexión SSH')}
            />
            <BotonAccion
              etiqueta="Ver logs"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de logs')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en web-01?\nEsta acción afectará el servicio.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
  badgeEstado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  puntoEstado: {
    borderRadius: 999,
    backgroundColor: '#2e7d32',
  },
  textoEstado: {
    color: '#2e7d32',
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#263238',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 4,
  },
  cardContenido: {
    marginTop: 12,
    gap: 9,
  },
  filaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  etiquetaInfo: {
    color: '#607d8b',
    fontSize: 13,
  },
  valorInfo: {
    color: '#263238',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
    flexShrink: 1,
  },
  overlayModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  contenidoModal: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#263238',
  },
  mensajeModal: {
    marginTop: 10,
    color: '#546e7a',
    lineHeight: 20,
  },
  accionesModal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 20,
  },
  botonCancelar: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textoCancelar: {
    color: '#546e7a',
    fontWeight: '600',
  },
  botonConfirmar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  textoConfirmar: {
    color: '#ffffff',
    fontWeight: '600',
  },
})