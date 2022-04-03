export default (sequelize, DataTypes) => {
    const Storage = sequelize.define('Storage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'storage',
      timestamps: false,
      sequelize,
    });

    Storage.associate = ({ Order }) => {
      Storage.hasMany(Order, {
        foreignKey: { name: 'storageId', allowNull: false },
        onDelete: 'CASCADE',
      });
    };
    return Storage;
  };
