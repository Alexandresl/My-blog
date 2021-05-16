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

### 6. Entendendo a estrutura

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/1aca067ad153e81cb60f37f79569d20c50519719)

* Arquivos/pastas importantes:
    * `gatsby-config.js` - Principal arquivo do Gatsby. É responsável de fazer toda a configuração dos plugins e outros dados que poderão ser passados para dentro do site.
    * `gatsby-browser.js` - Neste arquivos ficarão todas as variáveis ou bibliotecas que serão utilizados na parte do frontend.
    * `gatsby-node.js` - Serve para podermos trabalhar com a API do Gatsby. Iremos determinar a criação dinâmica de páginas e estruturas através deste arquivo.
    * `/src` - Vai conter o código fonte do nosso site. Será o principal diretório que iremos alterar.
    * `src/components` - Ficarão todos os componentes que criarmos. Por padrão cada componente tera seu subdiretório individual, com um arquivo `index.js` para a parte do React e um arquivo `styled.js` para utilização com  o `styled-components`.
    * `src/images` - Imagens utilizadas no projeto.
    * `src/pages` - As páginas do site. Cada arquivo JavaScript contido nesta pasta será uma página do site.
    * `public` - Será o local onde ficarão os arquivos gerados. Via de regra nós não iremos alterar manualmente os arquivos desta pasta.

* Arquivos excluídos do projeto padrão:
    * `gatsby-ssr.js` - Serve caso queiramos trabalhar com Server Side Rendering
