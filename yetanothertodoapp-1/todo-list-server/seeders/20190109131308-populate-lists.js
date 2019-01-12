module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Lists', [
        { name: 'Monday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Tuesday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Wednesday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Thursday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Friday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Saturday', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Sunday', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
