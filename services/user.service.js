// const boom = require('@hapi/boom')

// const getConnection = require('../libs/postgres')
// const pool = require('../libs/postgres.pool')
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {
    // this.pool = pool
    // this.pool.on('error', (err) => console.error('Unexpected error on idle client', err))
  }

  async create(data) {
    return data
  }

  async find() {
    // const client = await getConnection()
    // const query = 'SELECT * FROM tasks'
    // const rta = await this.pool.query(query)
    // return rta.rows
    const rta = await models.User.findAll()
    return rta
  }

  async findOne(id) {
    return { id }
  }

  async update(id, changes) {
    return {
      id,
      changes,
    }
  }

  async delete(id) {
    return { id }
  }
}

module.exports = UserService
