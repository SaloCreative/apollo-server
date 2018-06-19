module.exports = {
  Mutation: {
    login: async (root, { email, password }, { models }) => {
      const user = await models.auth.login({ email, password });
      return user;
    },
  }
};
