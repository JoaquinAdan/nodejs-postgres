const boom = require('@hapi/boom')

// const getConnection = require('../libs/postgres')
// const pool = require('../libs/postgres.pool')
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {
    // this.pool = pool
    // this.pool.on('error', (err) => console.error('Unexpected error on idle client', err))
  }

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser
  }

  async find() {
    // const client = await getConnection()
    // const query = 'SELECT * FROM tasks'
    // const rta = await this.pool.query(query)
    // return rta.rows
    const rta = await models.User.findAll({ include: ['customer'] })
    return rta
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('user not found')
    }
    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

module.exports = UserService
