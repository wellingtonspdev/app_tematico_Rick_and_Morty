import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { EstilosGlobais } from './Estilo';

export default function Tela1({ navigation }) {
  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <View style={EstilosGlobais.conteudoCentralizado}>
        <Text style={EstilosGlobais.tituloEstrutural}>01 • UNIVERSO</Text>
        <Text style={EstilosGlobais.textoEstrutural}>Universo de Rick and Morty · Guia Interdimensional</Text>
        <TouchableOpacity
          style={EstilosGlobais.botaoEstrutural}
          onPress={() => navigation.navigate('Rick')}
          accessibilityRole="button"
          accessibilityLabel="Abrir portal para tela de Rick"
        >
          <Text style={EstilosGlobais.textoBotaoEstrutural}>ABRIR PORTAL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
