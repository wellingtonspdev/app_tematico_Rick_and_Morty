import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { EstilosGlobais } from './Estilo';

export default function Tela2({ navigation }) {
  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <View style={EstilosGlobais.conteudoCentralizado}>
        <Text style={EstilosGlobais.tituloEstrutural}>02 • RICK SANCHEZ</Text>
        <Text style={EstilosGlobais.textoEstrutural}>Cientista Interdimensional e Viagens por Portais</Text>
        <TouchableOpacity
          style={EstilosGlobais.botaoEstrutural}
          onPress={() => navigation.navigate('Morty')}
          accessibilityRole="button"
          accessibilityLabel="Avançar para tela de Morty"
        >
          <Text style={EstilosGlobais.textoBotaoEstrutural}>CONHECER MORTY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
