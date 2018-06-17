module.exports = {
  group: (root, { id }, { models }) => models.gitlab.get_group_by_id(id),
  group_members: (root, { id }, { models }) => models.gitlab.get_group_members(id),
  repository: (root, { id }, { models }) => models.gitlab.get_repository_by_id(id),
  get_project_commits: (root, { id, branch }, { models }) => models.gitlab.get_project_commits({ id, branch }),
  project_pipelines: (root, { id }, { models }) => models.gitlab.get_pipelines_by_project(id)
}