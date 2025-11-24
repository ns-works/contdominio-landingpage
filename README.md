# Contdomínio - Landing Page Institucional

[![forthebadge](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=CRIADO+COM&secondaryLabel=JAVASCRIPT&primaryBGColor=%23edc707&primaryTextColor=%23000000&secondaryBGColor=%23fbff00&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=CRIADO+COM&secondaryLabel=SASS&primaryBGColor=%23fc71fe&primaryTextColor=%23000000&secondaryBGColor=%23ff00c8&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&secondaryIcon=sass&secondaryIconColor=%23FFFFFF&secondaryIconSize=16&secondaryIconPosition=left)](https://forthebadge.com)

## Sobre o Projeto

Uma **Landing Page Institucional** responsiva e moderna desenvolvida para a empresa **Contdomínio**, especializada em administração de condomínios e assessoria contábil.

O projeto tem como objetivo apresentar a marca, detalhar os serviços oferecidos (como legalização, departamento pessoal e assessoria tributária), exibir parceiros estratégicos e provas sociais através de depoimentos.

A interface foi construída com foco em performance e experiência do usuário (UX), utilizando uma arquitetura híbrida de estilização que combina o poder do **SASS** para estruturas personalizadas e a agilidade do **TailwindCSS** para utilitários. O projeto conta também com interações via JavaScript puro e carrosséis dinâmicos.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Frontend & Estilização](#frontend-&-estilização)
  - [Bibliotecas & Ferramentas](#bibliotecas-&-ferramentas)
- [Funcionalidades](#funcionalidades)
  - [Seções Principais](#seções-principais)
  - [Interatividade](#interatividade)
- [Estrutura de pastas](#estrutura-pastas)
- [Como Executar](#como-executar)

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

### Frontend & Estilização
- **HTML5 Semântico**
- **JavaScript (ES6+)**
- **SASS (SCSS):** Utilizado para criação de mixins, variáveis e estilização estrutural avançada (compilado para CSS).
- **TailwindCSS:** Framework utilizado via CDN para classes utilitárias, tipografia e responsividade rápida.
- **CSS3:** Custom properties e animações (Keyframes).

### Bibliotecas & Ferramentas
- **Splide.js:** Biblioteca leve e acessível para criação dos carrosséis de parceiros (Sliders).
- **Google Fonts:** Tipografia 'Open Sans'.
- **VS Code:** Editor de código principal.

---

## Funcionalidades

### Seções Principais
- **Header Responsivo:** Navegação que se adapta entre desktop e mobile com menu "hambúrguer" animado.
- **Hero Section:** Apresentação impactante com chamadas para ação (CTA).
- **Quem Somos:** Histórico da empresa e diferenciais competitivos.
- **Serviços:** Grid detalhando as áreas de atuação (Administração, Legalização, Contábil, etc.).
- **Parceiros:** Carrossel interativo exibindo logos de empresas parceiras.
- **Depoimentos:** Área de prova social com feedback de clientes reais.
- **Footer:** Informações de contato, redes sociais e localização.

### Interatividade
- **Scroll Suave (Smooth Scroll):** Navegação fluida entre as seções da página.
- **Menu Mobile Animado:** Transições de slide para abertura e fechamento do menu em dispositivos móveis.
- **Navbar Dinâmica:** O menu superior reage ao scroll da página (efeito de ocultar ao descer e mostrar ao subir).
- **Sliders Touch-Enable:** O carrossel de parceiros suporta gestos de toque em mobile.

---

## Estrutura de pastas

```text
contdominio-landingpage/
├── assets/                 # Recursos estáticos
│   ├── icons/              # Ícones SVG e PNG (Social, Serviços, UI)
│   └── images/             # Imagens do layout e logotipos
├── css/                    # Folhas de estilo compiladas
│   ├── index.css
│   └── index.css.map
├── js/                     # Lógica da aplicação
│   ├── index.js            # Lógica de scroll e navegação
│   ├── mobile.js           # Comportamento do menu mobile
│   └── tailwind.config.js  # Configuração de tema do Tailwind
├── sass/                   # Arquivos fonte de estilo
│   └── index.scss          # Estilos principais em SASS
└── index.html              # Estrutura principal da página
