function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const status = ['Готово к доставке', 'В процессе', 'Доставлено']
  const dates = ['2022-01-17 04:33:12', '2022-02-11 12:23:42', '2022-01-15 14:33:12']
  
//   const template = {
//     id: 1,
//     name: 'Product 1',
//     ammount: 556,
//     storeNumber: 0632,
//     createdAt: +Date.now(),
//     price: 5823,
//     status: 'Готово к доставке'
//   }
  
  const data = [] 
  
  for (let i = 0; i < 25; i++) {
    data.push({
      id: 1 + i,
      name: `Product ${1 + i}`,
      ammount: getRandomInt(500),
      storeNumber: getRandomInt(1000),
      createdAt: dates[getRandomInt(2)],
      price: getRandomInt(10000),
      status: status[getRandomInt(2)],
    })
  }
  
  
  
  module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('courerord', data),
  
    down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('courerord', {}),
  };