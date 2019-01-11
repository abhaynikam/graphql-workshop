module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [5, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Order, {
      onDelete: 'CASCADE',
      foreignKey: 'user_id',
    });
  };

  return User;
};
