const password = '$2a$10$uQgdIbW7.bzqp/ZaS6tWkOYVjyHo9ik0Ux5CF6P5rP4.u4cwe/Aca'; // 12345
const storageArr = [
  { name: 'Admin', secondName: 'Adminoff', email: 'dmitriy_slavskiy@mail.ru', password, phoneNumber: 89381044707, role_id: 1, isActive: true },
  { name: 'Alex', secondName: 'Al', email: 'alex@mail.ru', password, phoneNumber: 89381234707, role_id: 2, isActive: false },
  { name: 'Alex', secondName: 'Al', email: 'alex@mail.ru', password, phoneNumber: 89381234707, role_id: 2, isActive: false },
  { name: 'Alex', secondName: 'Al', email: 'alex@mail.ru', password, phoneNumber: 89381234707, role_id: 2, isActive: false },
  { name: 'Alex', secondName: 'Al', email: 'alex@mail.ru', password, phoneNumber: 89381234707, role_id: 2, isActive: false },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', storageArr);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  },
};
