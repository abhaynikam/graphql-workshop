module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name: {
      type: DataTypes.STRING,
      uniq: true,
    },
  }, {});

  List.associate = (models) => {
    List.hasMany(models.Task, {
      onDelete: 'CASCADE',
      foreignKey: 'ListId',
    });
  };

  return List;
};
