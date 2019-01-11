module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
  }, {});

  Product.associate = (models) => {
    Product.hasMany(models.LineItem);
    Product.belongsToMany(models.Order, {
      through: {
        model: models.LineItem,
        foreignKey: 'order_id',
      },
    });
  };

  return Product;
};
