import bcrypt from 'bcrypt';
import models from '../../models';

export default {
  Mutation: {
    createUser: async (_, { userInput: { password, ...otherUserInputArgs } }, _ctx) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        return models.User.create({ ...otherUserInputArgs, password: hashedPassword }).then(() => true);
      } catch (err) {
        return false;
      }
    },
  },
};
