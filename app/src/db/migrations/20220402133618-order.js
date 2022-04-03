module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      cost: {
        type: Sequelize.FLOAT,
      },
      storageName: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('order');
  },
};
