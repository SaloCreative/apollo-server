const fetch = require('node-fetch');

/**
 * turns an object into a URL query string, prefixed with `?`
 * ex: params_object_to_url_string({foo: 'bar', baz: 'bar'}) === '?foo=bar&baz=bar'
 */
const params_object_to_url_string = params =>
  Object.keys(params).reduce((qs, key) => {
    if (params[key] !== null) {
      return `${qs}&${key}=${params[key]}`;
    }
    return qs;
  }, '?');

/**
 * A friendly wrapper around fetch to handle base config and querystring transformation.
 */
const make_fetch = (baseConfig, domain) => (url, { params = {}, ...config } = {}) => {
  if (baseConfig[domain]) {
    const domain_config = baseConfig[domain];
    const queryString = params_object_to_url_string({
      ...domain_config.params,
      ...params,
    });
    const options = Object.assign({}, domain_config.options, config);
    return fetch(`${domain_config.url}${url}${queryString}`, options);
  }
  return null;
};

module.exports = {
  params_object_to_url_string,
  make_fetch,
};
