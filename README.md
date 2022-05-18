<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Authentication via Discord using OAuth2 to an existing app.

Main reference :
https://www.nerd.vision/post/nestjs-third-party-oauth2-authentication

Don't forget to create your discord API token + paste those credentials in the strategy + .env + users.service.ts

## Installation

```bash
$ npm install
```

## Running the app - backend

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app + UI
```bash
npm run serve
```
hosted on http://localhost:8080/