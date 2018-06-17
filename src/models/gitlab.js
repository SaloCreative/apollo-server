const make_loader = require('../helpers/loader');
const fetch_helpers = require('../helpers/fetch');

module.exports = ({ config, store }) => {
  const loader = make_loader(fetch_helpers.make_fetch(config, 'gitlab'));
  return ({
    async get_group_by_id(id) {
      return loader.fetch.load([`/groups/${ id }`]);
    },
    async get_group_members(id) {
      return loader.fetch.load([`/groups/${ id }/members`]);
    },
    async get_branches_by_project(id) {
      return loader.fetch.load([`/projects/${ id }/repository/branches`]);
    },
    async get_repository_by_id(id) {
      return loader.fetch.load([`/projects/${ id }`]);
    },
    async get_project_commits({ id, branch }) {
      return loader.fetch.load([`/projects/${ id }/repository/commits`], { params: { ref_name: branch } });
    },
    async get_pipelines_by_project(id) { // Limited on API to 20
      return loader.fetch.load([`/projects/${ id }/pipelines`]);
    },
    async get_repository_by_id(id) {
      return loader.fetch.load([`/projects/${ id }`]);
    },
    async get_project_commits({ id, branch }) {
      return loader.fetch.load([`/projects/${ id }/repository/commits`], { params: { ref_name: branch } });
    }
  })
};
