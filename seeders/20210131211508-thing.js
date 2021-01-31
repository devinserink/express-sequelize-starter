'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Things', [
      {
        name: 'Test1',
        miscNum: 5,
        createdAt: '2021-01-31',
        updatedAt: '2021-01-31'
      },
      {
        name: 'Test2',
        miscNum: 2,
        createdAt: '2021-01-31',
        updatedAt: '2021-01-31'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Things', null)
  }
}
