const make_loader = require('../helpers/loader');
const fetch_helpers = require('../helpers/fetch');
const error_helpers = require('../helpers/error');

module.exports = ({ config, store }) => {
  const loader = make_loader(fetch_helpers.make_fetch(config, 'auth'));
  return ({
    async login({ email, password }) {
      const res = await loader.fetch.load([`/auth/login`,
        { 
          method: 'POST',
          body: JSON.stringify({ email_address: email, password })
        }
      ]);
      const data = await res.data;
      const status = res.status;
      if (status >= 300) {
        return error_helpers.handle_error({ data, status });
      }
      return data;
    }
  })
};
