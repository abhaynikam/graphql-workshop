module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },

  }, {});

  Order.associate = (models) => {
    Order.belongsTo(models.User);
    Order.hasMany(models.LineItem, { as: 'lineItems' });
    Order.belongsToMany(models.Product, {
      through: {
        model: models.LineItem,
        foreignKey: 'product_id',
      },
    });
  };

  return Order;
};
