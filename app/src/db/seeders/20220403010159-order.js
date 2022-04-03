

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const status = ['rejected', 'created', 'available', 'confirmed']

const template = {
  id: 1,
  name: 'Product 1',
  ammount: 556,
  storeNumber: 0632,
  createdAt: +Date.now(),
  price: 5823,
  status: 'created'
}

const data = [] 

for (let i = 0; i < 25; i++) {
  data.push({
    id: 1 + i,
    name: `Product ${1 + i}`,
    ammount: getRandomInt(500),
    storeNumber: getRandomInt(1000),
    createdAt: new Date().toISOString(),
    price: getRandomInt(10000),
    status: status[getRandomInt(3)]
  })
}


console.log(data)



module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('orders', data),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('orders', {}),
};
