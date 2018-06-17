const gitlab_queries = require('./gitlab/query');
module.exports = {
  Query: {
    ...gitlab_queries
  }
};