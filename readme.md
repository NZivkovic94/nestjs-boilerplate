## Project setup

- install docker
- install docker-compose
- configure docker to run without sudo https://docs.docker.com/engine/install/linux-postinstall/
- make .env file
- `npm run docker:compose:up` start docker containers
- `npm run start:dev` start project in watch mode
- `npm run docker:compose:down` kill all docker containers

## Prisma guide

- `npm run prisma:migrate:deploy` run all existing migrations
- create new models or update old ones in prisma.schema
- `npm run prisma:migrate:dev:create:only <name>` create a migration but don't run it
- `npm run prisma:migrate:dev <name>` create and run a migration
- `npm run prisma:migrate:reset` drop the database and rerun all migrations
- `npm run prisma:studio` run the prisma studio gui
- `npm run prisma:generate` generate new types from schema
- `prisma:db:pull` generate prisma schema from database
- prisma documentation: https://www.prisma.io/
- issue with vscode: after generating types you might need to restart vscode to fix the autocomplete

## Nest CLI commands

- `nest g module` create a module
- `nest g controller` create a controller
- `nest g service` create a service
- `nest g guard` create a guard
- `nest g pipe` create a pipe
- `nest g interceptor` create an interceptor
- `nest g middleware` create a middleware
- `nest g class` create a new class
- rest of the commands: https://docs.nestjs.com/cli/usages

## Validation guide

- class-validator documentation: https://www.npmjs.com/package/@nestjs/class-validator/v/0.13.1

## Redis guide

- ioredis documentation: https://github.com/luin/ioredis
