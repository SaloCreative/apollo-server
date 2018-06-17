module.exports = `
  type Query {
    post(id: ID): Post
    users: [User]
  }

  type Post @cacheControl(maxAge: 600) {
    id: ID
    title: String
    body: String
    userId: Int
  }

  type User @cacheControl(maxAge: 1200) {
    id: ID
    name: String
    email: String
    website: String
    username: String
    phone: String
  }
`;
