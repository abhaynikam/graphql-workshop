import models from '../../models';

export default {
  Mutation: {
    createOrder: (_, args, _ctx) => models.Order.create(args, {
      include: [{ model: models.LineItem, as: 'lineItems' }],
    }),
  },
};
