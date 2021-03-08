# DevShop API

## Description

DevShop API is the Backend code for DevShop.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Migrations

```bash
# generate a new migration synchronizing entities
$ npm run typeorm migration:generate -- -n <migration description>

# sync database running migrations
$ npm run typeorm migration:run

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
