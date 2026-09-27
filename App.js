import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';
import Tela4 from './src/Tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Universo"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Universo" component={Tela1} />
        <Stack.Screen name="Rick" component={Tela2} />
        <Stack.Screen name="Morty" component={Tela3} />
        <Stack.Screen name="Multiverso" component={Tela4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
