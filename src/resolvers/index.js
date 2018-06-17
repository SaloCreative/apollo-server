const query = require('./query');
const gitlab_resolvers = require('./gitlab');
// const mutation = require('./mutation');

module.exports = {
  ...query,
  ...gitlab_resolvers
  // ...mutation,
};
