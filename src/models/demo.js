const make_loader = require('../helpers/loader');
const fetch_helpers = require('../helpers/fetch');

module.exports = ({ config, store }) => {
  const loader = make_loader(fetch_helpers.make_fetch(config, 'demo'));
  return ({
    async get_post_by_id(id) {
      return loader.fetch.load([`/posts/${ id }`]);
    },
    async get_users() {
      return loader.fetch.load([`/users`]);
    }
  })
};
