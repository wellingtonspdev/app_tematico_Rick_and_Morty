# Rick and Morty · Interdimensional Guide

<div align="center">

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=22&pause=1000&color=7FFF00&center=true&vCenter=true&width=460&lines=INTERDIMENSIONAL+GUIDE;OPENING+PORTAL...;EXPLORING+C-137...;WUBBA+LUBBA+DUB+DUB!" alt="Typing SVG" />
</a>

<p align="center">
  <strong>A themed React Native experience inspired by the Rick and Morty universe.</strong><br />
  <em>Expo SDK 54 · React Native · React Navigation</em>
</p>

<p align="center">
  <a href="README.md">🇧🇷 Versão em Português</a>
</p>

[![Expo SDK 54](https://img.shields.io/badge/Expo-SDK_54-7FFF00?style=for-the-badge&logo=expo&logoColor=black)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.81-35E7F2?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev)
[![React Navigation](https://img.shields.io/badge/React_Navigation-Native_Stack-8B5CF6?style=for-the-badge)](https://reactnavigation.org)
[![Snack Status](https://img.shields.io/badge/Snack-Prepared_for_Validation-B6FF37?style=for-the-badge)](https://snack.expo.dev)

</div>

---

## About

This project is a mobile themed experience developed for **Practical Activity 6 — Themed App** in the *Cross-Platform Mobile Development II* course (5th semester of Multiplatform Software Development).

Under the creative concept **INTERDIMENSIONAL GUIDE**, the app was designed as an immersive sci-fi portal through alternate realities, highlighting the iconic characters and cosmic scale of Rick and Morty.

---

## Experience

The narrative is structured around a core visual metaphor: crossing dimensions through the classic glowing green portal.

The application leverages a **Deep Space** aesthetic with dark **glassmorphism surfaces**, vibrant sci-fi neon in acid green (`#7FFF00`) and cyan (`#35E7F2`), alongside subtle ambient cosmic particles.

### Portal Animation
The interdimensional portal is built **exclusively using React Native's native `Animated` API** (no Lottie or heavy canvas runtimes), ensuring silky smooth 60 FPS performance and 100% compatibility with Expo Snack:
- **Outer Ring:** Infinite linear 360° rotation loop (12s).
- **Inner Ring:** Counter-directional rotation for visual depth (8s).
- **Portal Core:** Sinusoidal continuous scale pulsing (`0.96` ↔ `1.04`).
- **Energy Glow:** Soft green luminosity pulsation (`0.55` ↔ `0.90`).
- **Cosmic Particles:** 8 orbital micro-particles with independent timing and floating vectors.
- **CTA Microinteraction:** Tapping **ABRIR PORTAL** triggers portal expansion (`1.10`) and glow intensity prior to screen navigation.

---

## Screens

The app features **four real screens** wired together using React Navigation (Native Stack), each centered on a distinct topic:

| Screen | Route Name | Topic | Key Elements |
|---|---|---|---|
| `Tela1.js` | `Universo` | Introduction & Portal | Duo hero, multilayer animated portal, theme tags, activation CTA |
| `Tela2.js` | `Rick` | Rick Sanchez | Quantum science, portal technology, calculated chaos, cyan neon cards |
| `Tela3.js` | `Morty` | Morty Smith | Courage under fire, family bonds, evolution, asymmetric layout |
| `Tela4.js` | `Multiverso` | Citadel & Multiverse | Citadel of Ricks, Central Finite Curve, compact portal, clean cycle reset |

### Navigation Flow & Stack Lifecycle
```text
Tela1 (Universo) ➔ Tela2 (Rick) ➔ Tela3 (Morty) ➔ Tela4 (Multiverso) ➔ Restart (Universo)
```
On `Tela4.js`, the **REABRIR PORTAL** button executes `navigation.reset({ index: 0, routes: [{ name: 'Universo' }] })`, preventing memory leaks and uncontrolled stack accumulation over multiple loops.

---

## Tech Stack

- **Expo SDK 54** (`~54.0.30`)
- **React 19.1.0**
- **React Native 0.81.5**
- **@react-navigation/native** & **@react-navigation/native-stack**
- **react-native-screens** & **react-native-safe-area-context**
- **Native Animated & Easing APIs**

---

## Architecture

The project strictly complies with academic constraints:
1. **Four literal screens:** `src/Tela1.js`, `src/Tela2.js`, `src/Tela3.js`, and `src/Tela4.js`.
2. **Single centralized style sheet:** All design tokens, theme palettes, and StyleSheets are consolidated in `src/Estilo.js`. Zero `StyleSheet.create` calls exist in screen files.
3. **Explicit registered entrypoint:** `index.js` properly calls `registerRootComponent(App)`.
4. **100% local assets:** All images are bundled and imported via local `require()` statements. No external runtime URLs.

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

- **Base Canvas (`bgRoot`):** `#06110D` (Deep space emerald black)
- **Portal Energy (`portalGreen`):** `#7FFF00` / `#55FF55`
- **Quantum Tech (`cyan`):** `#35E7F2`
- **Morty Accent (`accentYellow`):** `#FBBF24`
- **Citadel Dimension (`dimensionPurple`):** `#8B5CF6`
- **Glass Surfaces (`surfaceGlass`):** `rgba(8, 28, 25, 0.82)` with subtle borders and `18px` rounded corners.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start Metro bundler
npx expo start

# Run on Android emulator
npx expo run:android

# Run on iOS simulator
npx expo run:ios
```

---

## Expo Snack

- **Status:** `Prepared for Expo Snack validation`
- Clean configuration, zero rogue plugins, and fully registered entrypoint ready for direct import into [Expo Snack](https://snack.expo.dev).

---

## Copyright & License

Academic, non-commercial project developed for educational purposes. All characters, names, and assets related to *Rick and Morty* belong to their respective copyright holders (Adult Swim / Warner Bros. Discovery).

---

## Author

Developed by **Wellington** — Faculty of Technology (FATEC).
*Multiplatform Software Development — 5th Semester.*
