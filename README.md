# Teste Dev - React Native + Node
API do teste de ReactNative.

    (✔) Aplicação backend consumindo APIs;
    ( ) Aplicação mobile consumindo API desenvolvida por você;

## Como executar
Antes de mais nada, você precisa instalar uma dependência global para executar as APIs que irá consumir:
```sh
$ npm install -g json-server
```
Depois basta executar as duas API's Datalake e blog com os comandos:
```sh
$ yarn datalake
$ yarn blog
```

E por último a API desenvolvida para prover os endpoints:
```sh
$ yarn dev:server
```

## Observações
A api é executada na porta 3333, conforme mostra o log.

## Rotas da Aplicação Backend

- **GET** `/api/v1/products`
- **GET** `/api/v1/products/<id do produto>`
- **POST** `/api/v1/user/`
- **GET** `/api/v1/user/<id do usuário>`
- **PUT** `/api/v1/user/<id do usuário>`
- **GET** `/api/v1/user/<id do usuário>/posts`
- **GET** `/api/v1/user/<id do usuário>/posts/<id do post>`


