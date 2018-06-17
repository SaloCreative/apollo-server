const apis = {
  demo: {
    url: 'https://jsonplaceholder.typicode.com',
    options: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}

module.exports = function build_config() {
  return {
    port: 7000,
    ...apis
  };
}