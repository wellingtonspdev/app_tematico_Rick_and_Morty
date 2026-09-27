import React, { useEffect, useRef, useState } from 'react';
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
  EstilosTela1,
} from './Estilo';
import { IMAGENS } from './assets';

const HERO_IMG = IMAGENS.universo;
const PORTAL_IMG = IMAGENS.portal;

export default function Tela1({ navigation }) {
  const [estaAtivando, setEstaAtivando] = useState(false);
  const timeoutRef = useRef(null);

  // Animações contínuas
  const rotacaoExterna = useRef(new Animated.Value(0)).current;
  const rotacaoInterna = useRef(new Animated.Value(0)).current;
  const escalaPortal = useRef(new Animated.Value(0.96)).current;
  const opacidadeGlow = useRef(new Animated.Value(0.55)).current;
  const escalaAtivacao = useRef(new Animated.Value(1)).current;
  const opacidadeConteudo = useRef(new Animated.Value(1)).current;

  // Partículas flutuantes
  const particulaOffsets = useRef(
    [...Array(8)].map(() => ({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      opacidade: new Animated.Value(0.3),
    }))
  ).current;

  useEffect(() => {
    let animacoesAtivas = true;

    AccessibilityInfo.isReduceMotionEnabled()
      .then((reduzirMovimento) => {
        if (!animacoesAtivas || reduzirMovimento) return;

        // Loop Ring Externa (12s, linear, 360°)
        Animated.loop(
          Animated.timing(rotacaoExterna, {
            toValue: 1,
            duration: 12000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();

        // Loop Ring Interna (8s, linear, contra-rotação)
        Animated.loop(
          Animated.timing(rotacaoInterna, {
            toValue: 1,
            duration: 8000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();

        // Loop Pulsação do Portal (0.96 -> 1.04 -> 0.96)
        Animated.loop(
          Animated.sequence([
            Animated.timing(escalaPortal, {
              toValue: 1.04,
              duration: 1400,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(escalaPortal, {
              toValue: 0.96,
              duration: 1400,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ])
        ).start();

        // Loop Pulsação do Glow (0.55 -> 0.90 -> 0.55)
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacidadeGlow, {
              toValue: 0.9,
              duration: 1600,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(opacidadeGlow, {
              toValue: 0.55,
              duration: 1600,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ])
        ).start();

        // Loop Partículas
        particulaOffsets.forEach((p, index) => {
          const delay = index * 250;
          Animated.loop(
            Animated.sequence([
              Animated.delay(delay),
              Animated.parallel([
                Animated.timing(p.y, {
                  toValue: -18,
                  duration: 2000 + index * 300,
                  easing: Easing.inOut(Easing.quad),
                  useNativeDriver: true,
                }),
                Animated.timing(p.opacidade, {
                  toValue: 0.85,
                  duration: 1200,
                  easing: Easing.ease,
                  useNativeDriver: true,
                }),
              ]),
              Animated.parallel([
                Animated.timing(p.y, {
                  toValue: 0,
                  duration: 2000 + index * 300,
                  easing: Easing.inOut(Easing.quad),
                  useNativeDriver: true,
                }),
                Animated.timing(p.opacidade, {
                  toValue: 0.25,
                  duration: 1400,
                  easing: Easing.ease,
                  useNativeDriver: true,
                }),
              ]),
            ])
          ).start();
        });
      })
      .catch(() => {});

    return () => {
      animacoesAtivas = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const spinExterna = rotacaoExterna.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spinInterna = rotacaoInterna.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  // Microinteração ao tocar em Abrir Portal
  const dispararAberturaPortal = () => {
    if (estaAtivando) return;
    setEstaAtivando(true);

    Animated.parallel([
      Animated.timing(escalaAtivacao, {
        toValue: 1.1,
        duration: 380,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      }),
      Animated.timing(opacidadeConteudo, {
        toValue: 0.75,
        duration: 380,
        useNativeDriver: true,
      }),
    ]).start();

    timeoutRef.current = setTimeout(() => {
      navigation.navigate('Rick');
      // Reseta estado para retorno
      setEstaAtivando(false);
      escalaAtivacao.setValue(1);
      opacidadeConteudo.setValue(1);
    }, 450);
  };

  // Posicionamento estático seguro das 8 partículas ao redor do portal
  const coordenadasParticulas = [
    { top: -14, left: 30, size: 5, color: Cores.portalGreen },
    { top: 20, right: -12, size: 6, color: Cores.cyan },
    { bottom: 10, left: -10, size: 4, color: Cores.portalGreen2 },
    { bottom: -14, right: 35, size: 5, color: Cores.acidLime },
    { top: 75, left: -16, size: 6, color: Cores.cyan },
    { top: 70, right: -14, size: 4, color: Cores.portalGreen },
    { bottom: 40, left: 10, size: 5, color: Cores.portalGreen2 },
    { top: 0, right: 20, size: 4, color: Cores.acidLime },
  ];

  return (
    <SafeAreaView style={EstilosGlobais.containerSeguro}>
      <ScrollView
        contentContainerStyle={EstilosGlobais.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[EstilosGlobais.contentWrapper, { opacity: opacidadeConteudo }]}
        >
          {/* Header Superior */}
          <View style={EstilosGlobais.headerBadgeRow}>
            <View style={EstilosGlobais.overlineBadge}>
              <Text style={EstilosGlobais.overlineText}>01 • UNIVERSO</Text>
            </View>
          </View>

          <Text style={EstilosGlobais.tituloTela}>RICK AND MORTY</Text>
          <Text style={EstilosGlobais.subtituloTela}>
            Guia Interdimensional definitivo através das dimensões.
          </Text>

          {/* Hero com Rick + Morty e Portal Animado */}
          <View style={EstilosTela1.heroArea}>
            {/* Camadas do Portal Animado */}
            <Animated.View
              style={[
                EstilosTela1.portalFundo,
                {
                  transform: [
                    { scale: Animated.multiply(escalaPortal, escalaAtivacao) },
                  ],
                },
              ]}
              pointerEvents="none"
            >
              {/* Glow Externo */}
              <Animated.View
                style={[
                  EstilosPortal.glowExterno,
                  {
                    width: 250,
                    height: 250,
                    opacity: opacidadeGlow,
                  },
                ]}
              />

              {/* Ring Externo Rotativo */}
              <Animated.View
                style={[
                  EstilosPortal.ringExterno,
                  {
                    width: 240,
                    height: 240,
                    transform: [{ rotate: spinExterna }],
                  },
                ]}
              />

              {/* Imagem do Portal */}
              <Image
                source={PORTAL_IMG}
                style={[EstilosPortal.imagemPortal, { width: 220, height: 220 }]}
                accessible={false}
              />

              {/* Ring Interno Contra-rotativo */}
              <Animated.View
                style={[
                  EstilosPortal.ringInterno,
                  {
                    width: 190,
                    height: 190,
                    transform: [{ rotate: spinInterna }],
                  },
                ]}
              />

              {/* Partículas Orbitais */}
              {particulaOffsets.map((p, idx) => {
                const coord = coordenadasParticulas[idx];
                return (
                  <Animated.View
                    key={`particula-${idx}`}
                    style={[
                      EstilosPortal.particula,
                      {
                        top: coord.top,
                        bottom: coord.bottom,
                        left: coord.left,
                        right: coord.right,
                        width: coord.size,
                        height: coord.size,
                        backgroundColor: coord.color,
                        opacity: p.opacidade,
                        transform: [{ translateY: p.y }],
                      },
                    ]}
                  />
                );
              })}
            </Animated.View>

            {/* Imagem Hero Rick + Morty diante do portal */}
            <Image
              source={HERO_IMG}
              style={EstilosTela1.imagemHero}
              accessible={true}
              accessibilityLabel="Rick Sanchez e Morty Smith lado a lado diante do portal interdimensional"
            />
          </View>

          {/* Bloco Narrativo de Introdução */}
          <View style={EstilosTela1.blocoIntro}>
            <Text style={EstilosTela1.badgeDestak}>INTERDIMENSIONAL GUIDE</Text>
            <Text style={EstilosTela1.descricaoIntro}>
              Uma jornada guiada por ciência, caos e realidades alternativas.
              Atravesse o portal de fluido verde para explorar o multiverso
              desenhado por Rick Sanchez.
            </Text>
          </View>

          {/* Tags de Categoria */}
          <View style={EstilosGlobais.tagGroup}>
            <View style={EstilosGlobais.tagChip}>
              <Text style={EstilosGlobais.tagChipText}>SCI-FI</Text>
            </View>
            <View style={EstilosGlobais.tagChip}>
              <Text style={EstilosGlobais.tagChipText}>MULTIVERSO</Text>
            </View>
            <View style={EstilosGlobais.tagChip}>
              <Text style={EstilosGlobais.tagChipText}>AVENTURA</Text>
            </View>
            <View style={EstilosGlobais.tagChip}>
              <Text style={EstilosGlobais.tagChipText}>DIMENSÃO C-137</Text>
            </View>
          </View>

          {/* Cards de Apresentação */}
          <View style={EstilosGlobais.cardPadrao}>
            <View style={EstilosGlobais.cardTituloRow}>
              <View style={EstilosGlobais.cardPill} />
              <Text style={EstilosGlobais.cardTitulo}>ENERGIA DO PORTAL</Text>
            </View>
            <Text style={EstilosGlobais.cardTexto}>
              O fluido interdimensional estabiliza fendas no espaço-tempo,
              permitindo transição instantânea entre infinitas linhas temporais.
            </Text>
          </View>

          {/* Botão de Ação Primária */}
          <TouchableOpacity
            style={[
              EstilosGlobais.botaoPrimario,
              estaAtivando && { opacity: 0.8 },
            ]}
            onPress={dispararAberturaPortal}
            disabled={estaAtivando}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Abrir portal interdimensional"
            accessibilityHint="Ativa a expansão do portal e navega para a tela de Rick Sanchez"
          >
            <Text style={EstilosGlobais.textoBotaoPrimario}>
              {estaAtivando ? 'SALTANDO DIMENSÃO...' : 'ABRIR PORTAL'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
