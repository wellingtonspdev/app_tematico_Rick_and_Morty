# Assets · Rick and Morty: Interdimensional Guide

Os assets gráficos originais do projeto em formato PNG de alta resolução estão permanentemente preservados na tag Git:
`original-png-assets`

## Compatibilidade com Expo Snack & Web Bundlers
Devido a uma limitação no endpoint de upload de arquivos binários do importador de repositórios Git do Expo Snack (`snackager` / `snack-sdk` -> `/v2/snack/uploadAsset`), o aplicativo consome os assets diretamente via Data URI de alta fidelidade estruturados no módulo [`src/assets.js`](../src/assets.js).

Dessa forma:
1. O repositório Git é importado instantaneamente pelo Expo Snack sem erros de validação de assets (`VALIDATION_ERROR`).
2. A renderização visual dos personagens (Rick, Morty), do Portal e da Cidadela dos Ricks funciona offline e sem latência de rede.
3. A integridade visual e o design system Deep Space Neon são 100% preservados em todas as plataformas (Web, iOS, Android).
