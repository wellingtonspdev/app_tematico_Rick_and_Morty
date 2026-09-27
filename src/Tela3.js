import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Cores,
  EstilosGlobais,
  EstilosTela3,
} from './Estilo';

const MORTY_IMG = require('../assets/morty.png');

export default function Tela3({ navigation }) {
  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <ScrollView
        contentContainerStyle={EstilosGlobais.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={EstilosGlobais.contentWrapper}>
          {/* Header Superior */}
          <View style={EstilosGlobais.headerBadgeRow}>
            <View style={[EstilosGlobais.overlineBadge, { borderColor: Cores.borderYellow }]}>
              <Text style={[EstilosGlobais.overlineText, { color: Cores.accentYellow }]}>
                03 • PERSONAGEM
              </Text>
            </View>
          </View>

          <Text style={EstilosGlobais.tituloTela}>MORTY SMITH</Text>
          <Text style={EstilosGlobais.subtituloTela}>
            O companheiro improvável que equilibra o caos interdimensional.
          </Text>

          {/* Hero Assimétrico com Morty */}
          <View style={EstilosTela3.heroAssimetrico}>
            <View style={EstilosTela3.mortyInfoBox}>
              <Text style={EstilosTela3.tituloYellow}>O COMPANHEIRO</Text>
              <Text style={[EstilosGlobais.cardTexto, { marginTop: 4 }]}>
                Suas ondas cerebrais complementam as de Rick, camuflando a dupla no multiverso.
              </Text>

              {/* Tag com cor do personagem */}
              <View style={[EstilosGlobais.tagGroup, { marginTop: 10, marginVertical: 0 }]}>
                <View style={[EstilosGlobais.tagChip, { borderColor: Cores.borderYellow }]}>
                  <Text style={[EstilosGlobais.tagChipText, { color: Cores.accentYellow }]}>
                    HUMANO
                  </Text>
                </View>
                <View style={[EstilosGlobais.tagChip, { borderColor: Cores.borderYellow }]}>
                  <Text style={[EstilosGlobais.tagChipText, { color: Cores.accentYellow }]}>
                    14 ANOS
                  </Text>
                </View>
              </View>
            </View>

            <Image
              source={MORTY_IMG}
              style={EstilosTela3.mortyImagem}
              accessible={true}
              accessibilityLabel="Morty Smith em pé com camiseta amarela e expressão ansiosa"
            />
          </View>

          {/* Citação Icônica de Morty */}
          <View style={EstilosTela3.quoteBox}>
            <Text style={EstilosTela3.quoteText}>
              "Ninguém existe de propósito, ninguém pertence a lugar nenhum,
              todo mundo vai morrer. Vem assistir TV."
            </Text>
          </View>

          {/* Cards de Características de Morty */}
          <View style={EstilosTela3.cardMorty}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela3.pillYellow} />
              <Text style={EstilosTela3.tituloYellow}>CORAGEM SOB PRESSÃO</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Mesmo diante do horror cósmico e do perigo iminente, encontra forças
              para tomar decisões difíceis e sobreviver a realidades colapsadas.
            </Text>
          </View>

          <View style={EstilosTela3.cardMorty}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela3.pillYellow} />
              <Text style={EstilosTela3.tituloYellow}>VÍNCULO FAMILIAR</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Representa o coração da narrativa. Suas escolhas protegem sua mãe,
              sua irmã Summer e mantêm um laço complexo de lealdade com Rick.
            </Text>
          </View>

          <View style={EstilosTela3.cardMorty}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela3.pillYellow} />
              <Text style={EstilosTela3.tituloYellow}>EVOLUÇÃO CONTÍNUA</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Ao longo das temporadas, amadurece e desenvolve raciocínio crítico
              afiado, deixando de ser apenas um passageiro assustado.
            </Text>
          </View>

          {/* Botão de Navegação para Multiverso */}
          <TouchableOpacity
            style={EstilosGlobais.botaoPrimario}
            onPress={() => navigation.navigate('Multiverso')}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Entrar no Multiverso"
            accessibilityHint="Avança para a quarta tela explorando o multiverso e a Cidadela dos Ricks"
          >
            <Text style={EstilosGlobais.textoBotaoPrimario}>ENTRAR NO MULTIVERSO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
