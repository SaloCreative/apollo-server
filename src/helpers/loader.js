const DataLoader = require('dataloader');

module.exports = function make_loader(fetch) {
  return {
    fetch: new DataLoader(
      queries => {
        return Promise.all(
          queries.map(([url, config]) => {
            return fetch(url, config).then(res => { 
              return { 
                data: res.json(),
                status: res.status 
              } 
            });
          }),
        );
      },
      {
        cacheKeyFn: JSON.stringify,
      },
    ),
  };
};