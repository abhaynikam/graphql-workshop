import models from '../../models';

export default {
  Mutation: {
    createOrder: (_, { orderInput }, _ctx) => models.Order.create(orderInput, {
      include: [{ model: models.LineItem, as: 'lineItems' }],
    }).then(() => true),
  },
};
