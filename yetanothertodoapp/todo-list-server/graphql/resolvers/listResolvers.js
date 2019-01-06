import models from '../../models';

export default {
  Query: {
    getAllTodoLists: () => models.List.all(),
  },
  Mutation: {
    createNewList: (_, args, _ctx) => models.List.create(args),
  },
};
