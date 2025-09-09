# 🤖 NexusAI - Frontend

<div align="center">
  <img src="nexus-ai/src/app/assets/logo.png" alt="NexusAI Logo" width="200"/>
  <p><strong>Uma interface moderna e intuitiva para interação com Inteligência Artificial</strong></p>
  
  ![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
  ![PrimeNG](https://img.shields.io/badge/PrimeNG-19.1.2-007AD9?style=for-the-badge&logo=primeng&logoColor=white)
</div>

## 📋 Sobre o Projeto

O **NexusAI** é uma aplicação frontend moderna desenvolvida em Angular que oferece uma interface elegante e responsiva para interação com sistemas de Inteligência Artificial. O projeto conta com um sistema completo de autenticação, chat em tempo real e interface de usuário otimizada para conversas com IA.

### ✨ Características Principais

- 🔐 **Sistema de Autenticação Completo** - Login e cadastro de usuários
- 💬 **Interface de Chat Intuitiva** - Conversa em tempo real com IA
- 📱 **Design Responsivo** - Otimizado para desktop e mobile
- 🎨 **UI/UX Moderna** - Interface limpa usando Bootstrap e PrimeNG
- 🔄 **Navegação SPA** - Single Page Application com roteamento dinâmico
- 🚀 **SSR Ready** - Suporte para Server-Side Rendering

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Angular** | 19.2.0 | Framework principal da aplicação |
| **TypeScript** | 5.7.2 | Linguagem de programação |
| **Bootstrap** | 5.3.6 | Framework CSS para estilização |
| **PrimeNG** | 19.1.2 | Biblioteca de componentes UI |
| **Bootstrap Icons** | 1.13.1 | Ícones da interface |
| **RxJS** | 7.8.0 | Programação reativa |
| **Express** | 4.18.2 | Servidor para SSR |

## 🏗️ Arquitetura do Projeto

```
nexus-ai/
├── src/
│   ├── app/
│   │   ├── body/           # Componente do corpo principal
│   │   ├── chat/           # Interface de chat com IA
│   │   ├── header/         # Cabeçalho da aplicação
│   │   ├── help-page/      # Página de ajuda
│   │   ├── login/          # Tela de login
│   │   ├── main/           # Componente principal
│   │   ├── profile/        # Perfil do usuário
│   │   ├── prompt-bar/     # Barra de entrada de texto
│   │   ├── register/       # Tela de cadastro
│   │   └── sidebar/        # Menu lateral
│   ├── assets/            # Recursos estáticos
│   └── styles.css         # Estilos globais
└── public/               # Arquivos públicos
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Angular CLI** (`npm install -g @angular/cli`)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/g-Barsani/nexusAI-front-end.git
   cd nexusAI-front-end/nexus-ai
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação**
   ```bash
   npm start
   # ou
   ng serve
   ```

4. **Acesse no navegador**
   ```
   http://localhost:4200
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia o servidor de desenvolvimento
npm run watch          # Build em modo watch

# Build
npm run build          # Build para produção
npm run serve:ssr      # Executa a versão SSR

# Testes
npm test               # Executa os testes unitários
```

## 🎯 Funcionalidades

### 🔐 Autenticação
- **Login de usuários** com validação de formulário
- **Cadastro de novos usuários**
- **Recuperação de senha**
- **Navegação protegida** por rotas

### 💬 Chat com IA
- **Interface de conversa** em tempo real
- **Histórico de mensagens** persistente
- **Auto-scroll** para novas mensagens
- **Indicadores visuais** para diferentes tipos de mensagem

### 🎨 Interface
- **Design responsivo** para todos os dispositivos
- **Tema moderno** com cores personalizadas
- **Animações suaves** e transições
- **Componentes reutilizáveis**

## 🔧 Desenvolvimento

### Criando Novos Componentes

```bash
ng generate component nome-do-componente
```

### Estrutura de Componentes

Cada componente segue a estrutura padrão do Angular:
- `.component.ts` - Lógica do componente
- `.component.html` - Template HTML
- `.component.css` - Estilos específicos
- `.component.spec.ts` - Testes unitários

### Boas Práticas

- ✅ Utilize **Standalone Components** para melhor performance
- ✅ Implemente **Lazy Loading** para rotas
- ✅ Siga o **Angular Style Guide**
- ✅ Mantenha **componentes pequenos** e focados
- ✅ Use **TypeScript interfaces** para tipagem

## 📦 Dependências Principais

### Produção
- `@angular/core` - Framework Angular
- `@angular/router` - Sistema de roteamento
- `@angular/forms` - Formulários reativos
- `bootstrap` - Framework CSS
- `primeng` - Componentes UI
- `rxjs` - Programação reativa

### Desenvolvimento
- `@angular/cli` - CLI do Angular
- `typescript` - Compilador TypeScript
- `karma` & `jasmine` - Framework de testes

## 🤝 Contribuição

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

**Desenvolvido por Meia Lua ao Quadrado ®**

---

<div align="center">
  <p>⭐ Se este projeto foi útil para você, considere dar uma estrela!</p>
  <p>🐛 Encontrou um bug? <a href="https://github.com/g-Barsani/nexusAI-front-end/issues">Reporte aqui</a></p>
</div>