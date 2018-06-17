module.exports = `
  type Query {
    repository(id: ID): FullRepository
    group(id: ID): Group
    project_pipelines(id: ID): [Pipeline]
    group_members(id: ID): [GroupMembers]
    get_project_commits(id: ID, branch: String): [Commit]
  }

  type Group @cacheControl(maxAge: 600) {
    id: ID
    name: String
    description: String
    webUrl: String
    projects: [Repository]
  }

  type GroupMembers @cacheControl(maxAge: 1200) {
    id: ID
    name: String
    username: String
    state: String
    avatarUrl: String
    webUrl: String
  }

  type Repository @cacheControl(maxAge: 600) {
    id: ID!
    description: String
    defaultBranch: String
    archived: Boolean
    visibility: String
    sshUrlToRepo: String
    webUrl: String
    name: String
    created_at: String
    lastActivityAt: String
    creatorID: Int
    namespace: Namespace
    openIssuesCount: Int
  }

  type FullRepository @cacheControl(maxAge: 600) {
    id: ID!
    description: String
    defaultBranch: String
    archived: Boolean
    visibility: String
    sshUrlToRepo: String
    webUrl: String
    name: String
    created_at: String
    lastActivityAt: String
    creatorID: Int
    namespace: Namespace
    openIssuesCount: Int
    branches: [Branch]
  }

  type Namespace {
    id: ID
    name: String
  }

  type Pipeline @cacheControl(maxAge: 60) {
    id: ID!
    branch: String
    status: String
    sha: String
  }

  type Branch @cacheControl(maxAge: 600) {
    name: String!
    protected: Boolean
    merged: Boolean
    developersCanPush: Boolean
    developersCanMerge: Boolean
    commit: Commit @cacheControl(maxAge: 600)
  }

  type Commit {
    commitID: ID
    date: String
    user: String
    title: String
  }
`;
