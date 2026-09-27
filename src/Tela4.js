import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
  Easing,
  AccessibilityInfo,
} from 'react-native';
import {
  Cores,
  EstilosGlobais,
  EstilosPortal,
  EstilosTela4,
} from './Estilo';
import { IMAGENS } from './assets';

const CIDADELA_IMG = IMAGENS.cidadela;
const PORTAL_IMG = IMAGENS.portal;

export default function Tela4({ navigation }) {
  const rotacaoPortal = useRef(new Animated.Value(0)).current;
  const escalaPortal = useRef(new Animated.Value(0.95)).current;
  const opacidadeGlow = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    let animacoesAtivas = true;

    AccessibilityInfo.isReduceMotionEnabled()
      .then((reduzirMovimento) => {
        if (!animacoesAtivas || reduzirMovimento) return;

        // Rotação suave do portal final
        Animated.loop(
          Animated.timing(rotacaoPortal, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();

        // Pulsação suave do portal final
        Animated.loop(
          Animated.sequence([
            Animated.timing(escalaPortal, {
              toValue: 1.05,
              duration: 1500,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(escalaPortal, {
              toValue: 0.95,
              duration: 1500,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ])
        ).start();

        // Glow suave
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacidadeGlow, {
              toValue: 0.85,
              duration: 1500,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(opacidadeGlow, {
              toValue: 0.5,
              duration: 1500,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ])
        ).start();
      })
      .catch(() => {});

    return () => {
      animacoesAtivas = false;
    };
  }, []);

  const spin = rotacaoPortal.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Reinício controlado da pilha para evitar acúmulo infinito de telas
  const reiniciarCicloInterdimensional = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Universo' }],
    });
  };

  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <ScrollView
        contentContainerStyle={EstilosGlobais.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={EstilosGlobais.contentWrapper}>
          {/* Header Superior */}
          <View style={EstilosGlobais.headerBadgeRow}>
            <View style={[EstilosGlobais.overlineBadge, { borderColor: Cores.borderPurple }]}>
              <Text style={[EstilosGlobais.overlineText, { color: Cores.dimensionPurple }]}>
                04 • MULTIVERSO
              </Text>
            </View>
          </View>

          <Text style={EstilosGlobais.tituloTela}>REALIDADES SEM LIMITES</Text>
          <Text style={EstilosGlobais.subtituloTela}>
            A Cidadela dos Ricks e as infinitas ramificações cósmicas.
          </Text>

          {/* Banner Hero Cidadela dos Ricks com Overlay */}
          <View style={EstilosTela4.cidadelaCard}>
            <Image
              source={CIDADELA_IMG}
              style={EstilosTela4.cidadelaImagem}
              accessible={true}
              accessibilityLabel="A Cidadela dos Ricks flutuando no espaço profundo cercada por nebulosas"
            />
            <View style={EstilosTela4.cidadelaOverlay}>
              <View style={EstilosTela4.cidadelaBadge}>
                <Text style={EstilosTela4.cidadelaBadgeText}>HUB MULTIVERSAL</Text>
              </View>
              <Text style={EstilosTela4.cidadelaTitulo}>A CIDADELA DOS RICKS</Text>
            </View>
          </View>

          {/* Cards Dimensionais */}
          <View style={EstilosTela4.cardDimensional}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela4.pillPurple} />
              <Text style={EstilosTela4.tituloPurple}>DIMENSÃO C-137</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              A linha de referência temporal. Ponto de origem do Rick principal
              e epicentro das maiores turbulências que redefiniram o multiverso.
            </Text>
          </View>

          <View style={EstilosTela4.cardDimensional}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela4.pillPurple} />
              <Text style={EstilosTela4.tituloPurple}>SOCIEDADE DA CIDADELA</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              Uma estação espacial de proporções titânicas onde versões de infinitas
              linhas do tempo convivem sob um conselho político autônomo.
            </Text>
          </View>

          <View style={EstilosTela4.cardDimensional}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosTela4.pillPurple} />
              <Text style={EstilosTela4.tituloPurple}>A CURVA CENTRAL FINITA</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              O muro dimensional projetado para isolar todos os universos onde
              Rick é o ser mais inteligente, separando-o do infinito desconhecido.
            </Text>
          </View>

          {/* Portal Animado Menor de Encerramento */}
          <View style={EstilosTela4.portalMenorContainer}>
            <View style={[EstilosPortal.containerPortal, { marginVertical: 6 }]}>
              {/* Glow */}
              <Animated.View
                style={[
                  EstilosPortal.glowExterno,
                  {
                    width: 130,
                    height: 130,
                    opacity: opacidadeGlow,
                  },
                ]}
              />

              {/* Ring animado */}
              <Animated.View
                style={[
                  EstilosPortal.ringExterno,
                  {
                    width: 120,
                    height: 120,
                    transform: [{ rotate: spin }],
                  },
                ]}
              />

              {/* Portal imagem compacto */}
              <Animated.Image
                source={PORTAL_IMG}
                style={[
                  EstilosPortal.imagemPortal,
                  {
                    width: 110,
                    height: 110,
                    transform: [{ scale: escalaPortal }],
                  },
                ]}
                accessible={false}
              />
            </View>

            <Text style={EstilosTela4.fimViagemTexto}>FIM DA VIAGEM?</Text>
            <Text style={[EstilosGlobais.cardTexto, { textAlign: 'center', marginTop: 4 }]}>
              O ciclo dimensional pode ser reiniciado a qualquer momento.
            </Text>
          </View>

          {/* Botão de Reinício Limpo da Navegação */}
          <TouchableOpacity
            style={EstilosGlobais.botaoPrimario}
            onPress={reiniciarCicloInterdimensional}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Reabrir Portal e reiniciar a jornada interdimensional"
            accessibilityHint="Redefine a pilha de navegação e retorna à primeira tela do Universo"
          >
            <Text style={EstilosGlobais.textoBotaoPrimario}>REABRIR PORTAL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
