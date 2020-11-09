'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Children', [
      {
        name: 'Luke',
        age: 1
      },
      {
        name: "Milo",
        age: 4
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Children', null, {});
  }
};
