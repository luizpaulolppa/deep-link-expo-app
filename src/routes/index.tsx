import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      home: {
        path: 'home'
      },
      product: {
        path: 'product/:id',
        // parse: {
        //   id: (id: string) => `product-${id}`
        // }
      }
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  )
}
