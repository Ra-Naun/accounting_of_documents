const password = '$2a$10$mj7wHBUOGMEehzzjb6xmKegcIjLfYDXBSi3LzEIzA4qqAOibSdBCq';
const storageArr = [
  { name: 'Admin', secondName: 'Adminoff',	email: 'dmitriy_slavskiy@mail.ru', password,	phoneNumber: 89381044707,	role_id: 1,	isActive: true },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', storageArr);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  },
};
