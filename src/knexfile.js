// Update with your config settings.
const env = require('./.env')
module.exports = {
  client: 'postgresql',
    connection: {
      host: env.host,
      database: env.database,
      user: env.user,
      password: env.password, 
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
