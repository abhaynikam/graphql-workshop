import models from '../../models';

export default {
  Query: {
    getAllTodoLists: (_, { limit, offset, query }, _ctx) => {
      const allTodoLists = models.List.findAll({ where: { name: { $like: `%${query}%` } }, offset, limit });

      return {
        totalRecords: models.List.findAll({ where: { name: { $like: `%${query}%` } } }).then(result => result.length),
        allTodoLists,
      };
    },
    getTodoList: (_, { id }, _ctx) => models.List.findByPk(id),
  },
  Mutation: {
    createNewTodoList: (_, args, _ctx) => models.List.create(args),
    updateTodoList: (_, { id, name }, _ctx) => models.List.findByPk(id).then(list => list.update({ name })),
    deleteTodoList: (_, { id }, _ctx) => models.List.destroy({ where: { id }, cascade: true }).then(() => true),
  },
};
