# DESIGN — Atividade Prática 6 · Rick and Morty

## 1. Visão do produto

O aplicativo será uma experiência temática mobile em React Native inspirada no universo de **Rick and Morty**, desenvolvida para a Atividade Prática 6 de Programação para Dispositivos Móveis II.

A proposta visual deve parecer um **guia interdimensional interativo**, e não uma simples sequência de páginas com texto. O usuário atravessa quatro áreas do universo temático por meio de uma navegação em Stack, com um **portal verde animado** como elemento visual recorrente e principal assinatura da aplicação.

Fluxo:

```text
Tela1.js — Universo
    ↓
Tela2.js — Rick
    ↓
Tela3.js — Morty
    ↓
Tela4.js — Multiverso
    ↓
Tela1.js — reinício do ciclo
```

O projeto deve possuir exatamente quatro telas principais para atender de maneira direta e segura ao enunciado, usando React Navigation.

---

## 2. Conceito criativo

### Nome conceitual

**INTERDIMENSIONAL GUIDE**

### Direção estética

A identidade combina:

- Deep Space;
- Sci‑Fi Neon;
- Portal Energy;
- Glassmorphism escuro;
- ambient glow;
- cards translúcidos;
- contraste verde/cyan sobre fundo quase preto;
- detalhes dimensionais violeta;
- imagens recortadas dos personagens sobre superfícies escuras.

O resultado deve remeter imediatamente a ficção científica interdimensional, mantendo a mesma maturidade visual dos outros aplicativos acadêmicos do projeto.

---

## 3. Princípios de design

1. **Tema evidente na primeira dobra** — Rick, Morty e o portal precisam identificar visualmente o projeto antes de qualquer leitura longa.
2. **Portal como assinatura** — o portal aparece na Tela 1 como hero animado e volta na Tela 4 como encerramento/reinício.
3. **Uma função visual por tela** — cada assunto deve parecer distinto sem quebrar o design system.
4. **Conteúdo acima da decoração** — partículas, glows e portais não podem prejudicar legibilidade.
5. **Mobile-first** — projetar primeiro para 320–430 px de largura.
6. **Snack-friendly** — evitar dependências visuais desnecessárias; animações devem utilizar a API `Animated` nativa.
7. **Assets locais** — imagens versionadas em `assets/`, sem hotlink em runtime.
8. **Um único arquivo de estilos** — todos os StyleSheets e tokens visuais ficam em `src/Estilo.js`.

---

## 4. Arquitetura visual

```text
App.js
└── NavigationContainer
    └── Native Stack
        ├── Tela1.js — Universo
        ├── Tela2.js — Rick
        ├── Tela3.js — Morty
        └── Tela4.js — Multiverso

src/
├── Tela1.js
├── Tela2.js
├── Tela3.js
├── Tela4.js
└── Estilo.js

assets/
├── universo-rick-morty-portal.png
├── rick.png
├── morty.png
├── multiverso-cidadela.png
└── portal.png
```

Preferir `headerShown: false` no Stack e construir o cabeçalho visual dentro de cada tela para manter a identidade temática integral.

---

## 5. Paleta de cores

### Fundo

| Token | Valor | Uso |
|---|---|---|
| `bgRoot` | `#06110D` | fundo geral |
| `bgDeep` | `#071018` | áreas secundárias |
| `surfaceGlass` | `rgba(8, 28, 25, 0.82)` | cards |
| `surfaceGlassSoft` | `rgba(13, 35, 38, 0.64)` | chips e painéis menores |

### Energia dimensional

| Token | Valor | Uso |
|---|---|---|
| `portalGreen` | `#7FFF00` | energia principal do portal |
| `portalGreen2` | `#55FF55` | halo e animação |
| `acidLime` | `#B6FF37` | microdestaques |
| `cyan` | `#35E7F2` | ciência/tecnologia |
| `dimensionPurple` | `#8B5CF6` | contraste dimensional |
| `indigo` | `#6366F1` | gradiente visual simulado / detalhes |

### Texto

| Token | Valor | Uso |
|---|---|---|
| `textPrimary` | `#F8FAFC` | títulos |
| `textSecondary` | `#CBD5E1` | corpo |
| `textMuted` | `#94A3B8` | legendas |
| `textDark` | `#07110D` | texto sobre verde intenso |

### Estados

| Token | Valor |
|---|---|
| `borderGreen` | `rgba(127,255,0,0.30)` |
| `borderCyan` | `rgba(53,231,242,0.25)` |
| `glowGreen` | `rgba(85,255,85,0.18)` |
| `glowPurple` | `rgba(139,92,246,0.14)` |

---

## 6. Tipografia

Não instalar fonte externa somente por estética. Priorizar tipografia nativa para reduzir risco no Snack.

### Escala

| Elemento | Tamanho | Peso | Observação |
|---|---:|---:|---|
| Overline / etapa | 11–12 | 700 | caixa alta, letterSpacing 1.5–2.5 |
| Hero title | 30–34 | 900 | alta presença visual |
| Screen title | 26–30 | 800–900 | personagem/assunto |
| Subtitle | 14–16 | 500–600 | lineHeight 21–24 |
| Card title | 13–15 | 700–800 | caixa alta opcional |
| Body | 13–15 | 400–500 | alto contraste |
| Button | 13–15 | 800 | caixa alta |
| Metadata | 10–12 | 600–700 | muted |

Títulos podem usar letter spacing moderado para reforçar atmosfera sci-fi.

---

## 7. Geometria e espaçamento

- container: `width: '100%'`;
- `maxWidth: 480` para conteúdo global;
- padding horizontal: 18–24;
- spacing vertical entre seções: 16–28;
- cards: `borderRadius: 16–20`;
- chips: `borderRadius: 20`;
- botões principais: `borderRadius: 14–16`;
- área mínima de toque: 48 px;
- imagens hero não devem ultrapassar aproximadamente 48–55% da altura visível em celulares pequenos;
- usar `ScrollView` sempre que o conteúdo puder ultrapassar a viewport.

---

## 8. Portal — elemento principal

### Asset base

`assets/portal.png`

PNG transparente com portal verde.

### Estrutura visual

O portal não deve ser apenas uma imagem estática. Criar uma composição de camadas:

```text
portalContainer
├── glowOuter      — View circular verde translúcida
├── ringOuter      — Animated.View / borda rotativa
├── portalImage    — PNG do portal
├── ringInner      — Animated.View em contra-rotação
└── particles      — 6–10 Views pequenas absolutas
```

### Animações

Usar somente `Animated` do React Native.

#### Loop principal

- rotação externa: 10–14 s, linear, infinito;
- rotação interna: 7–10 s, direção contrária;
- pulsação: escala `0.96 → 1.04 → 0.96`;
- opacidade do glow: `0.55 → 0.9 → 0.55`;
- partículas: pequenas translações e fade independentes.

Ferramentas:

```js
Animated.loop()
Animated.timing()
Animated.sequence()
Animated.parallel()
Easing.linear
```

### Microinteração do botão

Ao tocar em **ABRIR PORTAL**:

1. aumentar escala do portal para ~1.08–1.12;
2. aumentar brevemente opacidade/brilho;
3. opcionalmente reduzir levemente a opacidade do conteúdo;
4. após ~350–500 ms, executar `navigation.navigate('Rick')`.

Não criar transição pesada nem instalar Reanimated/Lottie apenas para isso.

### Tela 4

O mesmo portal volta em escala menor no encerramento. O botão **REABRIR PORTAL** retorna à Tela 1 e reforça o ciclo narrativo.

---

## 9. Tela 1 — Universo

### Objetivo

Introduzir o universo e criar o maior impacto visual do aplicativo.

### Asset

`assets/universo-rick-morty-portal.png`

Rick e Morty atravessando/posicionados diante do portal.

### Composição

```text
01 • UNIVERSO

RICK
AND
MORTY

[ hero Rick + Morty + portal ]
[ halo/portal animado por trás ]

INTERDIMENSIONAL GUIDE

Uma jornada por ciência, caos
E realidades alternativas.

[ SCI-FI ] [ MULTIVERSO ] [ AVENTURA ]

ABRIR PORTAL
```

### Regras

- hero centralizado;
- não sobrepor texto importante ao rosto dos personagens;
- portal animado pode ficar atrás da imagem hero;
- aplicar fade vertical/sombra no encontro entre hero e conteúdo;
- botão principal em verde portal;
- botão deve parecer uma ação narrativa, não apenas “Próximo”.

---

## 10. Tela 2 — Rick

### Objetivo

Apresentar Rick como personagem ligado a ciência, invenções e viagens dimensionais.

### Asset

`assets/rick.png`

PNG transparente.

### Composição

```text
02 • PERSONAGEM

RICK
SANCHEZ

CIENTISTA INTERDIMENSIONAL

[ Rick recortado ]

┌────────────────────┐
│ CIÊNCIA            │
│ Invenções e        │
│ experimentos       │
└────────────────────┘

┌────────────────────┐
│ PORTAIS            │
│ Viagens entre      │
│ dimensões          │
└────────────────────┘

┌────────────────────┐
│ IMPREVISIBILIDADE  │
│ Caos e decisões    │
│ inesperadas        │
└────────────────────┘

CONHECER MORTY
```

### Visual específico

- acento dominante: cyan + portal green;
- Rick pode ocupar 40–48% da largura na área hero;
- cards com linhas técnicas, pequenos detalhes cyan;
- opcional: pequeno ícone abstrato de portal gun feito com formas simples/Unicode, sem dependência.

---

## 11. Tela 3 — Morty

### Objetivo

Criar contraste com Rick e apresentar Morty como companheiro que atravessa aventuras e evolui ao longo delas.

### Asset

`assets/morty.png`

PNG transparente.

### Composição

```text
03 • PERSONAGEM

MORTY
SMITH

O COMPANHEIRO IMPROVÁVEL

[ Morty recortado ]

CORAGEM
Mesmo com medo, continua enfrentando
situações imprevisíveis.

FAMÍLIA
Parte importante de seus conflitos
e decisões.

EVOLUÇÃO
As aventuras mudam sua maneira de
encarar novas situações.

ENTRAR NO MULTIVERSO
```

### Visual específico

- manter fundo Deep Space;
- introduzir amarelo quente do personagem somente como acento secundário;
- manter verde e violeta como cores do sistema;
- composição pode ser assimétrica para não parecer cópia da Tela 2;
- Morty pode ficar levemente deslocado à direita enquanto textos entram pela esquerda.

---

## 12. Tela 4 — Multiverso

### Objetivo

Finalizar com a tela mais atmosférica depois da abertura e representar múltiplas realidades.

### Asset

`assets/multiverso-cidadela.png`

Imagem de ambiente da Cidadela/realidade interdimensional.

### Composição

```text
04 • MULTIVERSO

REALIDADES
SEM LIMITES

[ imagem Cidadela / multiverso ]

C-137
Realidade de referência

CIDADELA
Sociedade de versões alternativas

PORTAIS
Conexões entre mundos e dimensões

[ portal animado menor ]

FIM DA VIAGEM?
REABRIR PORTAL
```

### Tratamento da imagem

- usar `resizeMode="cover"`;
- aplicar overlay escuro por `View` sobre a imagem;
- opcionalmente simular fade inferior com uma superfície escura sobreposta;
- não colocar texto diretamente em região visualmente ruidosa sem overlay;
- imagem deve complementar a UI, não virar wallpaper sem hierarquia.

---

## 13. Cards e superfícies

### Card padrão

```js
backgroundColor: 'rgba(8, 28, 25, 0.82)'
borderWidth: 1
borderColor: 'rgba(127,255,0,0.22)'
borderRadius: 18
```

### Card científico

Usar detalhes cyan:

```js
borderColor: 'rgba(53,231,242,0.25)'
```

### Card dimensional

Usar violeta em Tela 4:

```js
borderColor: 'rgba(139,92,246,0.28)'
```

Evitar blur nativo para não adicionar dependência. O efeito “glass” será simulado por transparência + borda + sombra.

---

## 14. Botões

### Primário

- fundo `#7FFF00` ou variante verde menos agressiva quando necessário;
- texto escuro `#07110D`;
- altura mínima 52;
- `borderRadius: 14–16`;
- peso 800;
- pressed state com `opacity` + pequena redução de escala.

### Secundário

- transparente;
- borda verde/cyan;
- texto claro;
- não competir com CTA principal.

### Labels narrativos

Usar:

- `ABRIR PORTAL`;
- `CONHECER MORTY`;
- `ENTRAR NO MULTIVERSO`;
- `REABRIR PORTAL`.

Evitar “Próximo” como CTA principal.

---

## 15. Ambientação e partículas

Pode haver pequenas partículas feitas com `View` absoluta:

- círculos de 2–5 px;
- opacidade 0.25–0.75;
- verde/cyan/violeta;
- no máximo 8–12 visíveis por tela;
- `pointerEvents="none"`;
- nunca posicionar decoração sobre textos principais.

Não usar canvas ou bibliotecas externas apenas para partículas.

---

## 16. Imagens — regras de uso

### Assets principais

| Arquivo | Tela | Função | Fundo |
|---|---|---|---|
| `universo-rick-morty-portal.png` | Tela 1 | hero | transparente |
| `rick.png` | Tela 2 | personagem | transparente |
| `morty.png` | Tela 3 | personagem | transparente |
| `multiverso-cidadela.png` | Tela 4 | hero/background | opaco |
| `portal.png` | Telas 1 e 4 | animação | transparente |

### Regras técnicas

- salvar tudo em PNG;
- evitar nomes com espaços ou acentos;
- preferir dimensões entre 800 e 1600 px para personagens quando possível;
- comprimir sem destruir transparência;
- evitar assets de vários megabytes se uma versão menor funcionar visualmente;
- usar `require('../assets/...')` / caminho local equivalente;
- nunca depender de URL remota em runtime.

---

## 17. Acessibilidade

- `accessibilityRole="button"` em CTAs;
- `accessibilityLabel` descritivo;
- imagens decorativas podem ser marcadas como não acessíveis;
- imagens informativas devem ter label simples;
- contraste mínimo adequado entre texto e fundo;
- não depender somente de cor para indicar ação;
- respeitar área de toque mínima de 48 px.

Para animação contínua, se a implementação consultar preferência de redução de movimento, reduzir ou pausar pulsação/rotação quando possível. Isso é desejável, mas não precisa adicionar biblioteca.

---

## 18. Responsividade

Validar principalmente:

- 320×640;
- 360×800;
- 390×844;
- 430×932.

Regras:

- hero deve reduzir proporcionalmente;
- nenhum rosto pode ser cortado de forma ruim;
- cards devem usar `width: '100%'`;
- conteúdo principal não pode depender de `position: absolute`;
- telas com muito conteúdo usam `ScrollView`;
- elementos decorativos podem sair parcialmente da viewport;
- títulos devem quebrar em até duas linhas, nunca clipar.

---

## 19. Transições

React Navigation deve continuar responsável pela navegação real.

Sugestão de animação do Stack:

- transição horizontal suave ou fade;
- não usar animações cinematográficas pesadas;
- microinterações dentro das telas devem reforçar o portal.

O portal da Tela 1 reage antes da navegação para Rick, mas não substitui o Stack.

---

## 20. Estilo.js — regra obrigatória

Todos os estilos devem ser centralizados em `src/Estilo.js`.

Estrutura sugerida:

```js
export const Cores = { ... }
export const Tokens = { ... }
export const EstilosGlobais = StyleSheet.create({ ... })
export const EstilosTela1 = StyleSheet.create({ ... })
export const EstilosTela2 = StyleSheet.create({ ... })
export const EstilosTela3 = StyleSheet.create({ ... })
export const EstilosTela4 = StyleSheet.create({ ... })
export const EstilosPortal = StyleSheet.create({ ... })
```

Não criar `StyleSheet.create()` dentro de `Tela1.js`, `Tela2.js`, `Tela3.js` ou `Tela4.js`.

---

## 21. Snack hardening visual

Para preservar compatibilidade com Expo Snack:

- usar Expo SDK 54;
- usar React Navigation e dependências compatíveis;
- evitar Lottie;
- evitar Reanimated se não houver necessidade;
- evitar BlurView;
- evitar fontes customizadas;
- evitar SVG externo;
- portal animado apenas com `Animated` nativo;
- assets PNG locais e poucos;
- otimizar tamanho dos PNGs;
- validar importação do repositório no Snack antes da entrega.

Se algum asset impedir importação, o app deve continuar estruturalmente funcional com a imagem removida temporariamente; nenhuma regra de negócio ou navegação deve depender da imagem.

---

## 22. Critérios visuais de aceite

- [ ] Tema reconhecível como Rick and Morty na primeira tela.
- [ ] Quatro telas visualmente diferentes, porém pertencentes ao mesmo sistema.
- [ ] Tela 1 apresenta Rick + Morty + portal.
- [ ] Portal possui movimento contínuo suave.
- [ ] Portal reage ao CTA de abertura.
- [ ] Tela 2 destaca Rick.
- [ ] Tela 3 destaca Morty.
- [ ] Tela 4 destaca multiverso/Cidadela.
- [ ] Portal reaparece na Tela 4.
- [ ] Verde portal é cor principal, mas não domina textos longos.
- [ ] Layout funciona em 320–430 px.
- [ ] Nenhum texto importante sobreposto a área visualmente ruidosa.
- [ ] Todos os estilos ficam em `Estilo.js`.
- [ ] Imagens são locais e PNG.
- [ ] Nenhuma imagem é requisito para a navegação funcionar.
- [ ] Animação não exige biblioteca extra.
- [ ] Interface permanece legível sem internet.

---

## 23. Assets selecionados

### Core

1. `universo-rick-morty-portal.png`
   - Rick + Morty diante de portal.
   - Uso: Tela 1.

2. `rick.png`
   - Rick isolado com fundo transparente.
   - Uso: Tela 2.

3. `morty.png`
   - Morty isolado com fundo transparente.
   - Uso: Tela 3.

4. `multiverso-cidadela.png`
   - Cidadela / cenário multiversal.
   - Uso: Tela 4.

5. `portal.png`
   - Portal verde com transparência.
   - Uso: animação nas Telas 1 e 4.

### Alternativas opcionais

- Rick segurando portal gun;
- pose alternativa de Morty.

Essas alternativas não devem aumentar a quantidade de assets versionados se os cinco principais já resolverem o layout.

---

## 24. Resultado esperado

O aplicativo deve parecer uma pequena experiência temática acabada, não uma apresentação de slides convencional. O usuário deve sentir que está atravessando um portal e explorando diferentes assuntos do universo escolhido, enquanto a implementação continua simples, robusta, compatível com Expo SDK 54 e fiel aos requisitos acadêmicos.
