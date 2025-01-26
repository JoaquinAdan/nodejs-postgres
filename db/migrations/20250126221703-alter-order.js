'use strict'
const { DataTypes } = require('sequelize')

const { ORDER_TABLE } = require('../models/order.model')
const { CUSTOMER_TABLE } = require('../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn(ORDER_TABLE, 'category_id', 'customer_id')
  },

  async down(queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE)
  },
}
