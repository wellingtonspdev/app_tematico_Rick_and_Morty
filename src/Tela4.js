import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { EstilosGlobais } from './Estilo';

export default function Tela4({ navigation }) {
  const reiniciarCiclo = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Universo' }],
    });
  };

  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <View style={EstilosGlobais.conteudoCentralizado}>
        <Text style={EstilosGlobais.tituloEstrutural}>04 • MULTIVERSO</Text>
        <Text style={EstilosGlobais.textoEstrutural}>Cidadela dos Ricks e Realidades sem Limites</Text>
        <TouchableOpacity
          style={EstilosGlobais.botaoEstrutural}
          onPress={reiniciarCiclo}
          accessibilityRole="button"
          accessibilityLabel="Reiniciar jornada interdimensional para tela do Universo"
        >
          <Text style={EstilosGlobais.textoBotaoEstrutural}>REABRIR PORTAL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
