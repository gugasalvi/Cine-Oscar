# Cine Oscar

Projeto desenvolvido para a disciplina de Desenvolvimento Web, com o objetivo de criar uma página de cinema responsiva.

## Site publicado

Acesse o projeto: [Cine Oscar - GitHub Pages](https://gugasalvi.github.io/Cine-Oscar/)

## Sobre o projeto

O Cine Oscar é uma página que apresenta filmes em cartaz e próximos lançamentos, exibindo informações como título, gênero, duração e pôster.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS

## Como executar o projeto

Para executar o projeto localmente, siga os passos abaixo:

**1. Instale as dependências:**

```bash
npm install
```

**2. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

**3. Para gerar a versão de produção:**

```bash
npm run build
```

## Fonte dos dados

Os filmes em cartaz são carregados por meio de uma requisição `fetch`, utilizando o arquivo JSON localizado em `public/movies.json`.

A requisição é realizada dentro de um `useEffect`, com tratamento dos estados de carregamento e erro.

Os próximos lançamentos são mantidos em um vetor local no projeto.

## Funcionalidades

- Exibição de filmes em cartaz.
- Carregamento de dados por meio de `fetch` e `useEffect`.
- Estado de carregamento durante a busca dos filmes.
- Tratamento de erros com mensagem exibida na interface.
- Exibição e ocultação dos próximos lançamentos.
- Alternância entre tema claro e tema escuro.
- Layout responsivo para diferentes tamanhos de tela.
- Publicação do projeto utilizando GitHub Pages e GitHub Actions.