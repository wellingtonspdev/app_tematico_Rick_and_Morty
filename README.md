# Rick and Morty · Interdimensional Guide

<div align="center">

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=22&pause=1000&color=7FFF00&center=true&vCenter=true&width=460&lines=INTERDIMENSIONAL+GUIDE;OPENING+PORTAL...;EXPLORING+C-137...;WUBBA+LUBBA+DUB+DUB!" alt="Typing SVG" />
</a>

<p align="center">
  <strong>Uma experiência temática em React Native inspirada no universo de Rick and Morty.</strong><br />
  <em>Expo SDK 54 · React Native · React Navigation</em>
</p>

<p align="center">
  <a href="README.en.md">🇺🇸 English Version</a>
</p>

[![Expo SDK 54](https://img.shields.io/badge/Expo-SDK_54-7FFF00?style=for-the-badge&logo=expo&logoColor=black)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.81-35E7F2?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev)
[![React Navigation](https://img.shields.io/badge/React_Navigation-Native_Stack-8B5CF6?style=for-the-badge)](https://reactnavigation.org)
[![Snack Status](https://img.shields.io/badge/Snack-Prepared_for_Validation-B6FF37?style=for-the-badge)](https://snack.expo.dev)

</div>

---

## Sobre

Este projeto é uma aplicação temática mobile desenvolvida para a **Atividade Prática 6 — Temático** da disciplina de *Programação para Dispositivos Móveis II* (5º semestre do curso de Desenvolvimento de Software Multiplataforma).

Sob a direção criativa **INTERDIMENSIONAL GUIDE**, o aplicativo foi concebido como um portal sci-fi imersivo através de dimensões alternativas, explorando os personagens icônicos e a grandiosidade cósmica da série Rick and Morty.

---

## Experiência

A jornada é estruturada em torno de uma metáfora visual: a transição entre realidades através do clássico portal verde. 

A aplicação utiliza uma estética **Deep Space** com superfícies translúcidas em **Glassmorphism escuro**, iluminação neon em verde ácido (`#7FFF00`) e ciano (`#35E7F2`), além de partículas cósmicas em movimento sutil.

### Animação do Portal
O portal interdimensional foi construído **exclusivamente com a API nativa `Animated` do React Native** (sem Lottie ou bibliotecas pesadas), garantindo 60 FPS e compatibilidade total com o Expo Snack:
- **Ring Externa:** Rotação contínua linear de 360° em loop (12s).
- **Ring Interna:** Contra-rotação invertida para profundidade tridimensional (8s).
- **Vórtice Central:** Pulsação senoidal contínua de escala (`0.96` ↔ `1.04`).
- **Halo / Glow:** Pulsação de opacidade luminosa verde (`0.55` ↔ `0.90`).
- **Partículas Quânticas:** 8 microelementos orbitais com oscilações independentes.
- **Microinteração no CTA:** Ao tocar em **ABRIR PORTAL**, o vórtice se expande (`1.10`) com intensificação de brilho antes da transição de tela.

---

## Telas

O aplicativo é composto por **quatro telas reais** integradas pelo React Navigation (Native Stack), cada uma dedicada a um assunto específico do universo:

| Tela | Nome da Rota | Assunto Principal | Elementos Chave |
|---|---|---|---|
| `Tela1.js` | `Universo` | Introdução e Portal | Hero duplo, portal em multicamadas, tags temáticas e CTA de ativação |
| `Tela2.js` | `Rick` | Rick Sanchez | Ciência quântica, arma de portais, caos imprevisível e acentos cyan |
| `Tela3.js` | `Morty` | Morty Smith | Coragem sob pressão, laços familiares, evolução e composição assimétrica |
| `Tela4.js` | `Multiverso` | Cidadela & Portais | Cidadela dos Ricks, Curva Central Finita, portal final e reinício de ciclo |

### Fluxo de Navegação e Gestão de Pilha
```text
Tela1 (Universo) ➔ Tela2 (Rick) ➔ Tela3 (Morty) ➔ Tela4 (Multiverso) ➔ Reinício (Universo)
```
Na `Tela4.js`, a ação **REABRIR PORTAL** executa `navigation.reset({ index: 0, routes: [{ name: 'Universo' }] })`, garantindo que a pilha de navegação não acumule instâncias em ciclos repetidos.

---

## Tecnologias

- **Expo SDK 54** (`~54.0.30`)
- **React 19.1.0**
- **React Native 0.81.5**
- **@react-navigation/native** & **@react-navigation/native-stack**
- **react-native-screens** & **react-native-safe-area-context**
- **API nativa Animated & Easing**

---

## Arquitetura

O projeto obedece rigorosamente aos requisitos acadêmicos da atividade:
1. **Quatro telas literais:** `src/Tela1.js`, `src/Tela2.js`, `src/Tela3.js` e `src/Tela4.js`.
2. **Estilo único centralizado:** Todo o Design System, tokens, paleta e StyleSheets residem em `src/Estilo.js`. Nenhuma tela contém declaração de `StyleSheet.create`.
3. **Entrypoint registrado:** `index.js` inicializa o componente com `registerRootComponent(App)`, evitando falhas de bootstrap.
4. **Assets 100% locais:** Todas as imagens são carregadas via `require()` a partir do diretório `assets/`. Zero chamadas externas em runtime.

```text
/
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── index.js
├── .gitignore
├── README.md
├── README.en.md
├── DESIGN.md
├── ASSETS_MANIFEST.md
├── assets/
│   ├── universo-rick-morty-portal.png
│   ├── rick.png
│   ├── morty.png
│   ├── multiverso-cidadela.png
│   └── portal.png
└── src/
    ├── Tela1.js
    ├── Tela2.js
    ├── Tela3.js
    ├── Tela4.js
    └── Estilo.js
```

---

## Design System

- **Fundo Principal (`bgRoot`):** `#06110D` (Verde espacial ultra-escuro)
- **Energia Dimensional (`portalGreen`):** `#7FFF00` / `#55FF55`
- **Ciência Quântica (`cyan`):** `#35E7F2`
- **Acento Morty (`accentYellow`):** `#FBBF24`
- **Dimensão Cidadela (`dimensionPurple`):** `#8B5CF6`
- **Superfície (`surfaceGlass`):** `rgba(8, 28, 25, 0.82)` com bordas sutis e cantos arredondados (`18px`).

---

## Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor Metro
npx expo start

# Rodar no emulador Android
npx expo run:android

# Rodar no simulador iOS
npx expo run:ios
```

---

## Produção · GitHub Pages

O aplicativo está configurado para deploy contínuo em produção via **GitHub Actions**:
- **URL em Produção:** [https://wellingtonspdev.github.io/app_tematico_Rick_and_Morty/](https://wellingtonspdev.github.io/app_tematico_Rick_and_Morty/)
- **Workflow:** `.github/workflows/deploy-pages.yml` (build estático com `npx expo export -p web` e deploy nativo via `actions/deploy-pages`).

---

## Expo Snack

- **Status:** `Prepared for Expo Snack validation`
- O repositório foi construído seguindo todos os padrões de isolamento, entrypoint limpo e dependências nativas para importação e execução direta no [Expo Snack](https://snack.expo.dev).

---

## Direitos Autorais e Licença

Projeto acadêmico e não comercial desenvolvido para fins pedagógicos. As imagens e personagens do universo *Rick and Morty* pertencem aos seus respectivos detentores de direitos (Adult Swim / Warner Bros. Discovery) e são utilizados estritamente em contexto educacional.

---

## Autor

Desenvolvido por **Wellington** — Faculdade de Tecnologia (FATEC).
*Curso de Desenvolvimento de Software Multiplataforma — 5º Semestre.*
