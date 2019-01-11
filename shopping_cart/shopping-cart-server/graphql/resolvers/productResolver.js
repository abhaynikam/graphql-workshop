import models from '../../models';

export default {
  Query: {
    getAllProducts: () => models.Product.findAll(),
  },
  Mutation: {
    createProduct: (_, { productInput }, _ctx) => models.Product.create(productInput),
  },
};
