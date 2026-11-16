
import { Text, View } from 'react-native'
import { Paso1MP } from './paso1_mp'
import { Paso2MP } from './paso2_mp'
import React from 'react'

const PASO: number = 1

export default function IndexMP() {
  switch (PASO) {
    case 1:
      return <Paso1MP />
    case 2:
      return <Paso2MP />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
