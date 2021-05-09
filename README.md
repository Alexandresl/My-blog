# GatsbyJS: Crie um site PWA com React, GraphQL e Netlify CMS

## Seção 1: Introdução

### 1. Apresentando o projeto

[Github do projeto](https://github.com/willianjusten/gatsby-course/)

[Site em produção](https://gatsby-course-will.netlify.app/)

[Slack do Curso](https://willianjusten-cursos.slack.com/ssb/redirect)

### 2. Stack utilizada no curso

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
    
### 7. Organizando os arquivos

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/6a6a9bd33aff69497e66c221adcc0a84f1ecca3b)

* Arquivos excluídos do projeto padrão:
    * `src/pages/page-2.js`
    * `src/components/header.js`
    * `src/components/layout.css`
    * `src/images/gatsby-astronaut.png`

* Arquivos alterados do projeto padrão:
    * `src/pages/index.js` - deixamos além dos componentes de `Layout` e `Seo`, apenas um H1 para mostrar alguma informação em tela. regiramos os imports não utilizados também.
    * `src/components/layout.js` - Deixamos no `return` da função apenas a *tag* `main`. Excluir imports não utilizados
    * `gatsby-config.js` - realizado apenas atualização nos dados do `siteMetadata`

### 8. Criando a página de About

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/be0512060c74eb15ffa7c20fa75f02e25222da23)

### 9. Entendendo como o gatsby-link funciona

[Código feito na aulta](https://github.com/willianjusten/gatsby-course/commit/f546c75fae7cf21dcb651a54218d1516f0e0693a)

[Documentação do Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/)

* para utilizar o Gatsby Link:
    * Importamos - `import { Link } from 'gatsby'`
    * utilizamos o componente **Link** com a propriedade **to**: `<li><Link to="/">Home</Link></li>`

* Por opção, para facilitar a utilização do auto-complete do VSCode, renomei os arquivos .js da pasta pages por .jsx

### 10. Criando um componente e compartilhando entre páginas

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/4cfb15b327a534710551bfd5de6fe830fe91c69e)

* O componente que vai estar presente em todas as página será colocado no arquivo `src/components/layout.jsx`

## Seção 3: Gatsby e GraphQL

### 11. Uma introdução ao GraphQL

[Site oficial do GraphQL](https://graphql.org/)

* O *GraphQL* é uma linguagem de consulta de dados desenvolvida e usada pelo *Facebook* para realizar requisições e entregar informações para aplicações web e mobile desde 2012.
* Problemas na Rest API:
    * Dificuldade para evoluir a API (Criação de N versões)
    * Entrega de dados as vezes não necessários (aumento no tamanho da requisição)
    * Rotas altamente acopladas
* Vantagens do GraphQL:
    * Permite evolução constante
    * Entrega somente dados requisitados (tamanho menor e mais rápido)
    * Rota única, dados altamente desacoplados

### 12. Conhecendo o GraphQL e escrevendo nossa primeira query

[Link para acessar o GraphQL no localhost](http://localhost:8000/___graphql)

### 13. Utilizando o Prisma Playground ao invés do GraphiQL

[Como usar o GraphQL Playground tutorial](https://www.gatsbyjs.com/docs/using-graphql-playground/)

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/c71ed5a8bd99b7a1150726224c9bc04c5511ed0a)

* Para utilizar a IDE Prisma Playground utilizamos a variável antes do comando `gatsby develop`. Podemos alterar no arquivo `package.json` para adicionarmos a opção de abrir com o Prisma:  `"develop:playground": "GATSBY_GRAPHQL_IDE=playground gatsby develop",`