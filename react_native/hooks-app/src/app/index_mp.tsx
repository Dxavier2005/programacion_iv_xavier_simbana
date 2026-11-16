
import { Text, View } from 'react-native'
import { Paso1MP } from './paso1_mp'
import { Paso2MP } from './paso2_mp'
import { Paso3MP } from './paso3_mp'
import { Paso4MP } from './paso4_mp'

const PASO: number = 4

export default function IndexMP() {
  switch (PASO) {
    case 1:
      return <Paso1MP />
    case 2:
      return <Paso2MP />
    case 3:
      return <Paso3MP />
    case 4:
      return <Paso4MP />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
