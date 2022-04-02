export default (sequelize, DataTypes) => {
  const Counter = sequelize.define('Counter', {
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
    format: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'counter',
    timestamps: false,
    sequelize,
  });

  return Counter;
};
