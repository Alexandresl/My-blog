# GatsbyJS: Crie um site PWA com React, GraphQL e Netlify CMS

## Seção 1: Introdução

### 1. Apresentando o projeto

[Github do projeto](https://github.com/willianjusten/gatsby-course/)

[Site em produção](https://gatsby-course-will.netlify.app/)

[Slack do Curso](https://willianjusten-cursos.slack.com/ssb/redirect)

### 2. Stack utilizada no curso

[Site oficial do React](https://pt-br.reactjs.org/)

[Site oficial do Gatsby](https://www.gatsbyjs.com/)

[Site oficial do Styled Components](https://styled-components.com/)

[Site oficial do GaphQL](https://graphql.org/)

[Site oficial do Algolia](https://www.algolia.com/)

[Site oficial do Netlify](https://www.netlify.com/)

[Site oficial do Netlify CMS](https://www.netlifycms.org/)

### 3. Requisitos para o curso

[Site para download do VS Code](https://code.visualstudio.com/)

[Tutorial oficial do Gatsby para instalar os requisitos](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

[Tutorial para instalar e connfigurar o Git no Windows](https://www.atlassian.com/git/tutorials/install-git#windows)

[Link para download do Node JS](https://nodejs.org/en/download/)

### 4. O que é o Gatsby e por que usar

* É um framework open source baseado em React que auxilia desenvolvedores a criarem sites e apps extremamente rápidos.

* Por que usar o GatsbyJS?
    * Grande performance
    * Segurança
    * Boa experiência para os desenvolvedores
    * Ótima documentação, grande comunicade open source

## Seção 2: Gatsby e sua estrutura

### 5. Iniciando o projeto e entendendo os comandos do gatsby-cli

[Gatsby Tutorial Part Zero](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

[Gatsby Quick Start](https://www.gatsbyjs.com/docs/quick-start)

* Comando para instalar o GasbyJS (Usarei a versão do Curso): `npm install -g gatsby-cli@2.7.26`

* Comando para iniciar o projeto: `gatsby new nome-projeto`

* Para levantar um servidor do projeto recém criado, basta acessar a pasta `nome-projeto` e usar o comando `gatsby develop` ou `yarn develop` no terminal. Será disponibilizado a url `http://localhost:8000/` com uma página inicial do gatsby.

* Lista de comandos do gatsby (2.7.26):
    * gatsby develop - Start development server. Watches files, rebuilds, and hot reloads if something changes
    * gatsby build - Build a Gatsby project.
    * gatsby serve - Serve previously built Gatsby site.
    * gatsby info - Get environment information for debugging and issue reporting
    * gatsby clean - Wipe the local gatsby environment including built assets and cache
    * gatsby repl - Get a node repl with context of Gatsby environment, see (https://www.gatsbyjs.org/docs/gatsby-repl/)
    * gatsby new [rootPath] [starter] - Create new Gatsby project.
    * gatsby plugin - Useful commands relating to Gatsby plugins
    * gatsby telemetry - Enable or disable Gatsby anonymous analytics collection.

* Opções:
  * --verbose - Turn on verbose output - [boolean] [default: false]
  * --no-color, --no-colors - Turn off the color in output - [boolean] [default: false]
  * -h, --help - Show help - [boolean]
  * -v, --version - Show the version of the Gatsby CLI and the Gatsby package in the current project - [boolean]

