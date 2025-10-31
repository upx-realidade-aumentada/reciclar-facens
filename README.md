# ReciclAR Facens

Um jogo educativo de reciclagem desenvolvido para dispositivos móveis usando React Native e Three.js. O jogo utiliza a câmera do dispositivo e realidade aumentada para ensinar sobre reciclagem de forma interativa.

## 🚀 Começando

O jogo apresenta objetos 3D que devem ser classificados nas lixeiras corretas. O jogador deve identificar o material do objeto e selecionar a lixeira apropriada, marcando pontos por acertos.

### 📋 Pré-requisitos

Para executar o projeto, você precisará ter instalado:

- Node.js (versão 16 ou superior)
- pnpm (versão 8 ou superior)
- Um dispositivo móvel ou emulador

### 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/reciclar-facens.git
```

2. Instale as dependências:

```bash
cd reciclar-facens
pnpm install
```

3. Inicie o projeto:

```bash
pnpm run start
```

4. Escaneie o QR Code com o app Expo Go no seu dispositivo móvel ou pressione 'a' para abrir no emulador Android.

### 📦 Scripts Disponíveis

```bash
pnpm start      # Inicia o servidor de desenvolvimento
pnpm android    # Inicia o app no Android
pnpm ios        # Inicia o app no iOS
pnpm web        # Inicia o app na Web
```

## 🛠️ Construído com

- [React Native](https://reactnative.dev/) - Framework mobile
- [Expo](https://expo.dev/) - Plataforma de desenvolvimento
- [Three.js](https://threejs.org/) - Biblioteca de renderização 3D
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer para Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Helpers para React Three Fiber
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação

## 📌 Versão

- **Versão 1.0** - _Funcionalidades básicas do jogo_ - \_24/09/2025
- **Versão 1.1** - _Adição de feedback visual e sistema de pontuação_ - _26/09/2025_
- **Versão 1.2** - _Refatoração de bibliotecas e roteamento_ - _26/10/2025_

## ✒️ Autores

- **Thiago de Lima Santos** - _Desenvolvimento do jogo_

## 📄 Funcionalidades

- Câmera em tempo real como fundo
- Renderização de objetos 3D
- Sistema de pontuação
- Feedback visual para acertos/erros
- Timer de jogo
- Lixeiras interativas
- Game over com pontuação final

## TODO

- [ ] Menu de pausa com opções: Continuar / Reiniciar / Sair.
- [ ] Sistema de níveis de dificuldade
- [ ] Informações Educacionais
- [ ] Ranking de Jogadores