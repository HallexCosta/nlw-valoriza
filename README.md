<h1 align="center">
  NLW Together - Projeto Valoriza - Trilha NodeJS
</h1>

## Technologies

- [x] NodeJS
- [x] Typescript
- [x] TypeORM
- [x] SQLite

## Entity

```txt
Entidade < - > ORM < - > BD (users)

- Entities:
  [x] user
  [x] tag
```

## Repository

```txt
- Repositories:
  [x] UsersRepositories
  [x] TagsRepositories
```

## Services and Controllers

```txt
- Services
  [x] CreateUser
  [x] CreateTag

- Controllers
  [x] CreateUser
  [x] CreateTag
```

## Middlewares

O que é middlewares?

> R: Os middlewares são interceptadores, ou seja, é ele o intermédiario
> entre a comunicação entre o cliente (front-end) com a servidor (API).

## Regras

- Cadastro de usuário

  [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [x] Não é permitido cadastrar tag sem nome

  [x] Não é permitido o cadastro por usuário que não sejam administradores

- Cadsatro de elogios

  [ ] Não é permitido um usuário cadastrar um elogio para si

  [ ] Não é permitido cadastrar elogios para usuários inválidos

  [ ] O usuário precisa estar autenticado na aplicação

## Anotações

### Tipos de Rotas

```txt
GET    => Buscar uma informação
POST   => Inserir/criar uma informação
PUT    => Alterar uma informação
DELETE => Remover um dado
PATCH  => Alterar uma informação espeficica
```

### Tipos de parâmetros

```txt
Routes params =>  http://localhost:3333/produtos/784545732
Query params  =>  http://localhost:3333/produtos?name=teclado&description=tecladobom
Body params   => {
 "name": "teclado",
 "description": "teclado bom"
}
```

### HTTP

```txt
Request  => Entrando dados
Response => Saindo dados
```
