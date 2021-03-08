// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  loggin: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/**',
    migrationsDir: 'src/migration'
  }
}
