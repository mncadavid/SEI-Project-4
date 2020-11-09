'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkInsert('Users', [
      {
        username: 'juan',
        password: 'juan',
        name: 'Juan',
        childId: 1
      },
      {
        username: 'nicky',
        password: 'nicky',
        name: 'Nicky',
        childId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
