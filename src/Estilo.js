import { StyleSheet } from 'react-native';

export const Cores = {
  bgRoot: '#06110D',
  bgDeep: '#071018',
  surfaceGlass: 'rgba(8, 28, 25, 0.82)',
  surfaceGlassSoft: 'rgba(13, 35, 38, 0.64)',
  portalGreen: '#7FFF00',
  portalGreen2: '#55FF55',
  acidLime: '#B6FF37',
  cyan: '#35E7F2',
  dimensionPurple: '#8B5CF6',
  indigo: '#6366F1',
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#94A3B8',
  textDark: '#07110D',
  borderGreen: 'rgba(127, 255, 0, 0.30)',
  borderCyan: 'rgba(53, 231, 242, 0.25)',
  glowGreen: 'rgba(85, 255, 85, 0.18)',
  glowPurple: 'rgba(139, 92, 246, 0.14)',
};

export const EstilosGlobais = StyleSheet.create({
  containerSeguro: {
    flex: 1,
    backgroundColor: Cores.bgRoot,
  },
  conteudoCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tituloEstrutural: {
    fontSize: 24,
    fontWeight: '800',
    color: Cores.portalGreen,
    marginBottom: 16,
    textAlign: 'center',
  },
  textoEstrutural: {
    fontSize: 15,
    color: Cores.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  botaoEstrutural: {
    backgroundColor: Cores.portalGreen,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  textoBotaoEstrutural: {
    color: Cores.textDark,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
