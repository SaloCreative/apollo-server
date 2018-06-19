const query = require('./query');
const demo_resolvers = require('./demo');
const auth_resolvers = require('./auth');
const mutation = require('./mutation');

module.exports = {
  ...query,
  ...demo_resolvers,
  ...auth_resolvers,
  ...mutation
};
