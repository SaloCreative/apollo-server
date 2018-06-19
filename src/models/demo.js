const make_loader = require('../helpers/loader');
const fetch_helpers = require('../helpers/fetch');

module.exports = ({ config }) => {
  const loader = make_loader(fetch_helpers.make_fetch(config, 'demo'));
  return ({
    async get_post_by_id(id) {
      const res = await loader.fetch.load([`/posts/${ id }`]);
      return res.data;
    },
    async get_users() {
      const res = await loader.fetch.load([`/users`]);
      return res.data;
    }
  })
};
