module.exports = (sequelize, DataTypes) => {
  const LineItem = sequelize.define('LineItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValues: 1,
    },
  }, {});

  LineItem.associate = (models) => {
    LineItem.belongsTo(models.Order);
    LineItem.belongsTo(models.Product);
  };

  return LineItem;
};
