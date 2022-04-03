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
    storageId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'order',
    timestamps: false,
    sequelize,
  });

  Order.associate = ({ Storage }) => {
    Order.belongsTo(Storage, {
      foreignKey: { name: 'storageId', allowNull: false },
      onDelete: 'CASCADE',
    });
  };
  return Order;
};