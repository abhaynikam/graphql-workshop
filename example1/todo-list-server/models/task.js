module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {});

  Task.associate = (models) => {
    Task.belongsTo(models.List);
  };

  return Task;
};
