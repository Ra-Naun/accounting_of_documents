export default (sequelize, DataTypes) => {
    const CourerOrder = sequelize.define('CourerOrder', {
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
        default: 'В процессе',
        },
    },
    {
      tableName: 'courerord',
      timestamps: false,
      sequelize,
    });
  
    return CourerOrder;
  };