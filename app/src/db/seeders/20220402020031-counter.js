module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('counter',
      [
        { name: 'n1', count: 0, format: 'all' },
        { name: 'n2', count: 1, format: 's1' },
        { name: 'n3', count: 2, format: 's2' },
      ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('counter', {}),
};
