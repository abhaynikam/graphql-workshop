import models from '../../models';

export default {
  Query: {
    getAllTodoLists: () => models.List.all(),
    getTodoList: (_, { id }, _ctx) => models.List.findByPk(id),
  },
  Mutation: {
    createNewTodoList: (_, args, _ctx) => models.List.create(args),
    updateTodoList: (_, { id, name }, _ctx) => models.List.findByPk(id).then(list => list.update({ name })),
    deleteTodoList: (_, { id }, _ctx) => models.List.destroy({ where: { id }, cascade: true }).then(() => true),
  },
};
