module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('order',
      [
        { name: 'Фотоаппарат', count: 2, status: 'В обработке', orderDate: '2022-01-17 04:33:12', cost: '734.50', storageName: 'Главный склад' },
        { name: 'Камера', count: 3, status: 'Отправлен', orderDate: '2022-01-17 04:33:12', cost: '42.50', storageName: 'Склад на набережной' },
        { name: 'Носки', count: 5, status: 'Получен', orderDate: '2022-01-17 04:33:12', cost: '34.20', storageName: 'Ивановский склад' },
        { name: 'Монитор', count: 6, status: 'Ожидает', orderDate: '2022-01-17 04:33:12', cost: '1734.50', storageName: 'Главный склад' },
        { name: 'Видеокарта', count: 4, status: 'Возвращается', orderDate: '2022-01-17 04:33:12', cost: '2734.50', storageName: 'Главный склад' },
      ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('order', {}),
};
