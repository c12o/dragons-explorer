# Dragon Explorer - Desafio Frontend | Sicredi

Solução do desafio proposto pelo **Sicredi**

## :dart: Objetivo

Permitir que um usuário possa administrar seus dragões através de operações **CRUD**
<br/>
<br/>

## :wrench: Tecnologias | Ferramentas

- :computer: [React](https://pt-br.reactjs.org/) - Criação de interfaces
- :building_construction: [Storybook](https://storybook.js.org/) - Criação e visualização de componentes sem precisar rodar o projeto
- :art: [Sass](https://sass-lang.com/) - Pŕe-processador CSS
- :lipstick: [CSS Modules](https://github.com/css-modules/css-modules) - Criação de CSS/SASS por escopo
- :heavy_check_mark: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Criação e execução de testes
- :memo: [ESLint](https://eslint.org/) com [Prettier](https://prettier.io/) - Padronização e organização do código-fonte

Foi utilizado também o [Gitmoji](https://gitmoji.dev/) para padronização dos commits onde cada emoji representa o objetivo da implementação.
<br/>
<br/>

## :bulb: Solução

A implementação foi feita seguindo o conceito _Mobile First_ onde a aplicação se adequa ao Desktop e não o contrário.
<br/>Foi utilizada a [Context API](https://pt-br.reactjs.org/docs/context.html) para o controle de sessão do usuário e definição do tema escolhido.
<br/>Foi utilizada a lib [Axios](https://github.com/axios/axios) para requisições _HTTP_

### :arrow_forward: Execução

Após o download do projeto, você deve ir na pasta raiz do mesmo e executar o comando abaixo
<br />
`yarn`
ou
`npm install` para baixar as dependências necessárias

#### Rodando o projeto

Para rodar o projeto basta executar o comando `yarn start` ou `npm start`

#### Rodando o storybook

Para rodar o storybook e ver os componentes isoladamente, basta executar o comando `yarn storybook` ou `npm run storybook`

#### Rodando os testes

Para rodar os testes basta executar o comando `yarn test` ou `npm test`

### :passport_control: Credenciais

Utilize os dados abaixo para acessar a aplicação
<br />
**Usuário**: mhysa
<br />**Senha**: dracarys
<br/>
<br/>

## :sparkles: Melhorias

Segue relação de possíveis melhorias que foram identificadas ao término da resolução

- :bangbang: Escrever testes mais testes para componentes/páginas
- :bangbang: Ajustes visando a acessibilidade
- :bangbang: Permitir ao usuário desfazer a exclusão de um dragão
- :heavy_exclamation_mark: Refactor de componentes. Algumas implementaçãoes foram baseadas em casos específicos
- :heavy_exclamation_mark: Opção para permanecer logado
- :heavy_exclamation_mark: Limitar o comprimento máximo da tela, para não esticar em telas grandes
