const orderArr = [
  { name: 'Фотоаппарат', count: 2, status: 'В обработке', orderDate: '2022-01-17 04:33:12', cost: '714.30', storageId: 1 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
  { name: 'Камера', count: 3, status: 'Отправлен', orderDate: '2022-01-17 04:33:12', cost: '42.50', storageId: 1 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
  { name: 'Носки', count: 5, status: 'Получен', orderDate: '2022-01-17 04:33:12', cost: '34.20', storageId: 2 },
  { name: 'Видеокарта', count: 4, status: 'Возвращается', orderDate: '2022-01-17 04:33:12', cost: '2734.50', storageId: 1 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
  { name: 'Ноутбук', count: 2, status: 'Возвращен', orderDate: '2022-01-17 04:33:12', cost: '1527.50', storageId: 3 },
  { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageId: 3 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('order', orderArr);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('order', {});
  },
};
