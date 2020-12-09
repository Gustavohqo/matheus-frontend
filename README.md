# UolEdtech Frontend

Aplicação disponivel em: https://ecstatic-austin-ed38f4.netlify.app/

O frontend foi desenvolvido utilizando o framework SPA Angular, no qual foi dividido em 3 modulos

  - App Module 
    - Modulo principal e inicial da aplicação 
  - Shared Module
    - Modulo que possui componentes/serviços compartilhados, como inputs,, selects, loading, etc.
  - E-commerce Module
    - Modulo que possui os componentes e serviços relacionados ao E-commerce
  - Product Dashboard Module
    - Modulo que possui os componentes e serviços relacionados ao E-commerce na parte de compras
  - Product Management Module
    - Modulo que possui os componentes e serviços relacionados ao E-commerce na parte de gerenciamento de produtos

### CSS

Foi utilizado o padrãop BEM para desenvolvimento dos componentes e foi criado um estilo global da aplicação também, inspirado no SMACSS mas não foi implementado a arquitetura SMACSS em si.

Foram criados estilos globais para definir:
  - Temas
    - Define um paleta de cores padrão pra aplicação
    - Define um tipografia de cores padrão pra aplicação
  - Base
    - Faz o reset de alguns estilos default
    - Armazena os animações
  - Components
    - Estilos globais para serem usado em componentes da aplicação

### Bibliotecas utilizadas

    - angular
    - rxjs
    - lodash
    - husky
    - eslint
    - prettier

### Run Application


```sh
$ cd uol-edtech-frontend
$ npm install
$ npm start
```
