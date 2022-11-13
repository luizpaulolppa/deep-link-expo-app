import { View, Text } from 'react-native'

export function Product({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>
        ID do Produto: { route.params?.id }
      </Text>
    </View>
  )
}
