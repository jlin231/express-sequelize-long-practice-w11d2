'use strict';

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
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'Though they appear ornate and delicate, prehistoric fossils suggests that butterflies have been around for more than 200 million years.',
        territory: 'america',
        fact: 'blue',
        millimeters: '7'
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
    await queryInterface.bulkDelete('Insects',  {
      name: ['Western Pygmy Blue Butterfly']
    });
  }
};
