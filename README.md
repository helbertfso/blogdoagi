[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[cypress-image]:https://img.shields.io/badge/cypress-10.9.0-beige
[cypress-url]:https://docs.cypress.io/guides/overview/why-cypress

# Projeto Principal Blogdoagi
[![JavaScript Version][javascript-image]][javascript-url]
[![Cypress Version][cypress-image]][cypress-url]

Estrutura do projeto:
```
./
├── .github/
│   └── workflows/
│        └── action.yaml
├── cypress/
│   ├── config/
│   │    ├── dev.js
│   │    ├── qa.js
│   ├── e2e/
│   ├── fixture/
│   ├── support/
│   │    ├── e2e.js
│   │    └── utils.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

Possuir NodeJS instalado (versão 14 ou superior)

Possuir dependencias do projeto com ->> npm install

## Abaixo segue alguns comandos a serem utilizados com o projeto:

Para executar o cypress em modo Test Runner, usando o aliase criado no arquivo package.json:
```
npm run cy:open
```

Para executar o cypress em modo headless, usando o aliase criado no arquivo package.json:
```
npm run cy:test
```

## Alternando execução entre ambientes

Por padrão os testes iram rodar usando a url de **qa** conforme arquivo "**cypress.config.js**" em *"./cypress/"*. 

Os ambiente disponíveis são:
- dev
- qa

Para alterar em tempo de execução, adiciona o parâmetro "**ENVIRONMENT**" no terminal:

**Unix/Linux**
```
$ | ENVIRONMENT=dev
```

**Windows cmd**
```
> | set ENVIRONMENT=dev
```

Para mudar o ambiente padrão, edite a linha 6 do arquivo **'cypress.config.js'**. Substitua o valor após **'qa'**
```
5 -
6 - const environment = process.env.ENVIRONMENT || 'qa'
7 - ...
```

## Execução dos testes com Cypress Dashboard usando a máquina local como hosted

Para execução dos testes utilizando o Cypress Dashboard deve executar o comando abaixo via CLI:

```
npx cypress run --record --parallel --key <record_key>
```
**[Configurar projeto para gravar](https://docs.cypress.io/guides/dashboard/projects#Setup)**

### Demais execuções via pipeline, será utilizado via gitHub Action.

## Dashboard dos testes no Cypress Cloud
Url de acesso: ${{ values.cypressDashboardUrl }}