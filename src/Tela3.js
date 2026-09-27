import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { EstilosGlobais } from './Estilo';

export default function Tela3({ navigation }) {
  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <View style={EstilosGlobais.conteudoCentralizado}>
        <Text style={EstilosGlobais.tituloEstrutural}>03 • MORTY SMITH</Text>
        <Text style={EstilosGlobais.textoEstrutural}>O Companheiro Improvável e sua Evolução</Text>
        <TouchableOpacity
          style={EstilosGlobais.botaoEstrutural}
          onPress={() => navigation.navigate('Multiverso')}
          accessibilityRole="button"
          accessibilityLabel="Avançar para tela do Multiverso"
        >
          <Text style={EstilosGlobais.textoBotaoEstrutural}>ENTRAR NO MULTIVERSO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
