# discord_OAuth2
Authentication via Discord using OAuth2 to an existing app.

Main reference :
https://www.nerd.vision/post/nestjs-third-party-oauth2-authentication

First we create a basic nestjs project:
$ npm i -g @nestjs/cli
$ nest new project-name

cd to the new project then install passport:
npm i @nestjs/passport passport passport-oauth2
npm i -D @types/passport-oauth2

