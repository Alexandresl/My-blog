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

* Comando para instalar o GasbyJS (Usarei a versão do Curso): `npm install -g gatsby-cli@2.7.26`

* Comando para iniciar o projeto: `gatsby new nome-projeto`

* Para levantar um servidor do projeto recém criado, basta acessar a pasta `nome-projeto` e usar o comando `gatsby develop` no terminal. Será disponibilizado a url **http://localhost:8000/** com uma página inicial do gatsby.

### 6. Entendendo a estrutura

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/1aca067ad153e81cb60f37f79569d20c50519719)

### 7. Organizando os arquivos

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/6a6a9bd33aff69497e66c221adcc0a84f1ecca3b)

### 8. Criando a página de About

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/be0512060c74eb15ffa7c20fa75f02e25222da23)

### 9. Entendendo como o gatsby-link funciona

[Código feito na aulta](https://github.com/willianjusten/gatsby-course/commit/f546c75fae7cf21dcb651a54218d1516f0e0693a)

[Documentação do Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/)

### 10. Criando um componente e compartilhando entre páginas

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/4cfb15b327a534710551bfd5de6fe830fe91c69e)

## Seção 3: Gatsby e GraphQL

### 11. Uma introdução ao GraphQL

[Site oficial do GraphQL](https://graphql.org/)

* O GraphQL é uma linguagem de consulta de dados desenvolvida e usada pelo Facebook para realizar requisições e entregar informações para aplicações web e mobile desde 2012.
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

### 14. Renderizando dados com `StaticQuery`

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/e104d4eddab70fce5a00d7fe6b0d596b55107ea3)

### 15. Refaturando para o novo hook `useStaticQuery`

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/02a6a04aca88b0fe5a9c535bf8faffea9108564a)

## Seção 4: Trabalhando com Imagens no Gatsby

### 16. Conhecendo as maravilhas do gatsby-image

[Site oficial do Gatsby Image](https://using-gatsby-image.gatsbyjs.org/)

### 17. Confirgurando o gatsby-image

[Link para o plugin oficial](https://www.gatsbyjs.com/plugins/gatsby-image/)

* Comando para instalar o Gatsby-Image: `yarn add gatsby-image@2.2.8`

### 18. Criando a primeira query para imagens

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/127ee31fb668333930b43d3640f78ff6c2481c7f)

### 19. Entendendo os 2 tipos de imagem responsiva (fluid e fixed)

## Seção 5: Layout e Styled Components

### 20. Introdução ao Styled Components

[Site oficial do Styled Components](https://styled-components.com/)

### 21. Instalando e confi9gurando o Styled Components

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/7a0b6d370ef9b73a172e3ab11fcdaa72827e7553)

* Comando para instalar o Styled Components na versão do curso: `yarn add styled-components@4.3.2`
* Plugin para conexão do Styled Components e Gatsby: `yarn add gatsby-plugin-styled-components@3.1.2`
* Adicionar ao arquivo `gatsby-config.js`, no array de plugins: `gatsby-plugin-styled-components`

### 22. Criando o Layout Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/53583b353eb1f4602c59ca26c111e0e7c2022377)

### 23. Criando estilos globais com `createGlobalStyle`

[Documentação do createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle)

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/d3ba883ece66639424c81514affbc73f58aa3c57)

### 24. Refaturando o styled component para uma forma mais organizada

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/4febfff49d0e5246221ec7dd70207a42198d2f04)

### 25. Criando o Avatar Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/d509ed008dc151f4015f518cef2fe684c8f538d6)

### 26. Criando o Profile Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/af3a9bfe95c6efb4e26ca72e97880bcb19d0e05d)

### 27. Criando a Sidebar Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/5cc68716a84ed1f0ce0972722daa3af9874e239a)

### 28. Criando o SocialLinks Component - Parte 1

[Site oficial do Styled Icons](https://styled-icons.js.org/)

* Comando para instalar o Stuled-icons: `yarn add styled-icons@8.3.0`

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/48956373fb258db2a6f7df7fa04492fc4d14b70d)

### 29. Criando o SocialLinks Component - Parte 2

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/f01b6e809ae742e8963627cda68fc1e6c7fa98ac)

### 30. Criando o MenuLinks Component

[Código feito na aula ](https://github.com/willianjusten/gatsby-course/commit/b7707372d4c093b45d8b2af2c18b4d0eb7c10196)

### 31. Criando a MenuBar Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/9225176ec31634e68322601b8f54be62b83abc0c)

### 32. Criando o PostItem Component

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/18a1be0aefbfe2bc448ad99f5456cf0e8472dbfa)

### 33. Estruturando os dados do PostItem

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/f55e23fe252ec81af1100294e65e80a402b983e7)

## Seção 6: GraphQL + Remark

### 34. Criando posts em Markdown

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/2b9bf1f39cf94fa7840ac6d1ff6d82564bcbb1bf)

[Site Oficial do MarkDown](https://daringfireball.net/projects/markdown/)

### 35. Configurando o gatsby-transformer-remark

[Documentação do gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/ad88a902ddbc31662319b349f591217fb8e5fd64)

* Comando para instalar o Gatsby-Transformer-Remark: `yarn add gatsby-transformer-remark@2.6.14`

### 36. Pegando os dados do Markdown usando GraphQL

### 37. Tratando datas no GraphQL

### 38. Passando os dados do GraphQL para a página

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/3cc0023ade2f1c3571f55dcf262a241391e1fde3)

### 39. Adicionando fields com o `onCreateNode`

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/069a36e4f7e63653c68ed1428320426dbeb02b68)

[Documentação do Gatsby Node API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

[Documentação do onCreateNode](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode)

### 40. Usando o createPages da Gatsby Node API

[Documentação do createPages](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/cd8134ac67922e60577df943415f1cedd991f267)

### 41. Filtrando dados no GraphQL usando variávveis

[código feito na aula](https://github.com/willianjusten/gatsby-course/commit/857ef4286340aa2f732b313b6002468eed039266)

### 42. Criando o template para o Blog Post

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/857ef4286340aa2f732b313b6002468eed039266)

## Seção 7: Estruturando a Home

### 43. Ordenando os posts pela data

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/33349c65df801c481eeef44bb0d8aba6053af890)

### 44. Entendendo o limit e skip para criar uma paginação

[Código feito na aula](https://github.com/willianjusten/gatsby-course/commit/49114ecdc850e30dbc0615ce09867286c3aa977b)