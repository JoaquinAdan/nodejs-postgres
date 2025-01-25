'use strict'

const { ORDER_PROCUT_TABLE, OrderProductSchema } = require('../models/order-product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PROCUT_TABLE, OrderProductSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PROCUT_TABLE)
  },
}
