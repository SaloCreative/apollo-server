const shared_transforms = {
  defaultBranch: ({ default_branch }) => default_branch,
  sshUrlToRepo: ({ ssh_url_to_repo }) => ssh_url_to_repo,
  webUrl: ({ web_url }) => web_url,
  lastActivityAt: ({ last_activity_at }) => last_activity_at,
  openIssuesCount: ({ open_issues_count }) => open_issues_count,
  creatorID: ({ creator_id }) => creator_id
}

module.exports = {
  Group: {
    webUrl: ({ web_url }) => web_url
  },
  GroupMembers: {
    avatarUrl: ({ avatar_url }) => avatar_url,
    webUrl: ({ web_url }) => web_url
  },
  Repository: {
    ...shared_transforms
  },
  FullRepository: {
    ...shared_transforms,
    branches: ({ id }, _, { models }) => models.gitlab.get_branches_by_project(id)
  },
  Branch: {
    developersCanPush: ({ developers_can_push }) => developers_can_push,
    developersCanMerge: ({ developers_can_merge }) => developers_can_merge
  },
  Commit: {
    commitID: ({ short_id }) => short_id,
    user: ({ committer_name }) => committer_name,
    date: ({ created_at }) => created_at
  },
  Pipeline: {
    branch: ({ ref }) => ref
  }
};
