module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('storage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
    });

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
      storageId: {
        type: Sequelize.INTEGER,
        references: { model: 'storage', key: 'id' },
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('order');
     await queryInterface.dropTable('storage');
  },
};
