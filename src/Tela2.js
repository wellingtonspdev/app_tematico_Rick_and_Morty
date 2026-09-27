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
  EstilosTela2,
} from './Estilo';

const RICK_IMG = require('../assets/rick.png');

export default function Tela2({ navigation }) {
  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <ScrollView
        contentContainerStyle={EstilosGlobais.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={EstilosGlobais.contentWrapper}>
          {/* Header Superior */}
          <View style={EstilosGlobais.headerBadgeRow}>
            <View style={EstilosGlobais.overlineBadge}>
              <Text style={EstilosGlobais.overlineText}>02 • PERSONAGEM</Text>
            </View>
          </View>

          <Text style={EstilosGlobais.tituloTela}>RICK SANCHEZ</Text>
          <Text style={EstilosGlobais.subtituloTela}>
            Cientista genial da Dimensão C-137 e criador da Portal Gun.
          </Text>

          {/* Hero com Rick e Detalhes Técnicos */}
          <View style={EstilosTela2.heroRow}>
            <Image
              source={RICK_IMG}
              style={EstilosTela2.rickImagem}
              accessible={true}
              accessibilityLabel="Rick Sanchez em pé vestindo jaleco branco"
            />
            <View style={EstilosTela2.rickHeaderInfo}>
              <Text style={EstilosTela2.tituloCyan}>PERFIL CIENTÍFICO</Text>
              <Text style={[EstilosGlobais.cardTexto, { marginTop: 4 }]}>
                O homem mais inteligente de todas as realidades da Curva Central Finita.
              </Text>

              <View style={EstilosTela2.statusRow}>
                <View style={EstilosTela2.statusDot} />
                <Text style={EstilosTela2.statusText}>PORTAL GUN ATIVA</Text>
              </View>

              <View style={[EstilosGlobais.tagGroup, { marginTop: 10, marginVertical: 0 }]}>
                <View style={[EstilosGlobais.tagChip, { borderColor: Cores.borderCyan }]}>
                  <Text style={[EstilosGlobais.tagChipText, { color: Cores.cyan }]}>
                    IQ: ∞
                  </Text>
                </View>
                <View style={[EstilosGlobais.tagChip, { borderColor: Cores.borderCyan }]}>
                  <Text style={[EstilosGlobais.tagChipText, { color: Cores.cyan }]}>
                    C-137
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Cards Temáticos Técnicos */}
          <View style={EstilosTela2.cardCientifico}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela2.pillCyan} />
              <Text style={EstilosTela2.tituloCyan}>CIÊNCIA & EXPERIMENTOS</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Capaz de transformar matéria, construir baterias a partir de
              microuniversos e desafiar as leis fundamentais da termodinâmica.
            </Text>
          </View>

          <View style={EstilosTela2.cardCientifico}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela2.pillCyan} />
              <Text style={EstilosTela2.tituloCyan}>TECNOLOGIA DE PORTAIS</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Desenvolveu a fórmula secreta do fluido de portal verde,
              concedendo acesso instantâneo a infinitas dimensões paralelas.
            </Text>
          </View>

          <View style={EstilosTela2.cardCientifico}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela2.pillCyan} />
              <Text style={EstilosTela2.tituloCyan}>IMPREVISIBILIDADE</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Caos absoluto com precisão cirúrgica. Recusa autoridades cósmicas
              e enfrenta qualquer federação galáctica sem hesitação.
            </Text>
          </View>

          {/* Botão de Navegação para Morty */}
          <TouchableOpacity
            style={EstilosGlobais.botaoPrimario}
            onPress={() => navigation.navigate('Morty')}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Conhecer Morty Smith"
            accessibilityHint="Avança para a tela do companheiro improvável Morty Smith"
          >
            <Text style={EstilosGlobais.textoBotaoPrimario}>CONHECER MORTY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
