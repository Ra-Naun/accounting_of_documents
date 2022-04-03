export default (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      count: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
      orderDate: {
        type: DataTypes.DATE,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
      storageName: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'order',
      timestamps: false,
      sequelize,
    });

    return Order;
  };
