const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const DB = 'postgres'

const URI = `${DB}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: DB,
  },
  production: {
    url: URI,
    dialect: DB,
  },
}
