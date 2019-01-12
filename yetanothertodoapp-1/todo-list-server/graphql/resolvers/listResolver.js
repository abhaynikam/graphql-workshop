import models from '../../models';

export default {
  Query: {
    getAllTodoList: () => models.List.findAll(),
  },
  Mutation: {
    // args = { name: "something" }
    // List.create({ name: "asdasdd" })
    createTodoList: (_parent, args, _ctx) => {
      return models.List.create(args).then((list) => {
        return {
          success: true,
          list: list,
        }
      });
    },
  }
};
