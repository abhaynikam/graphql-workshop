import models from '../../models';

export default {
  Query: {
    getAllTodoLists: (_, { limit, offset }, _ctx) => {
      const allTodoLists = models.List.findAll({ offset, limit });

      return {
        totalRecords: models.List.all().then(result => result.length),
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
