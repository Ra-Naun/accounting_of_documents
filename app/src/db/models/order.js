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
      ammount: {
        type: DataTypes.INTEGER,
      },
      storeNumber: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      price: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.BOOLEAN,
        default: 'available',
      },
    },
    {
      tableName: 'orders',
      timestamps: false,
      sequelize,
    });

    return Order;
  };
