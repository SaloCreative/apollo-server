const query = require('./query');
const demo_resolvers = require('./demo');
// const mutation = require('./mutation');

module.exports = {
  ...query,
  ...demo_resolvers
  // ...mutation,
};
