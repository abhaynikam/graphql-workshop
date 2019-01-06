import models from '../../models';

export default {
  Query: {
    getAllTasks: (_, args, _ctx) => models.Task.findAll({ where: { ListId: args.listId } }),
  },
  Mutation: {
    createTask: (_, args, _ctx) => models.Task.create(args.taskInput),
    updateTodo: (_, { id, taskInput }, _ctx) => (
      models.Task.findByPk(id).then(task => task.update(taskInput))
    ),
    deleteTodo: (_, { id }, _ctx) => models.Task.destroy({ where: { id } }).then(() => true),
  },
};
