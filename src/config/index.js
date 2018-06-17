const apis = {
  gitlab: {
    url: 'https://gitlab.frontendserviceaccount.com/api/v4',
    options: {
      headers: {
        'Content-Type': 'application/json',
        'Private-Token': 'fPCibyDVEaNPvFX3BSvd'
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