module.exports = {
  post: (root, { id }, { models }) => models.demo.get_post_by_id(id),
  users: (root, _, { models }) => models.demo.get_users()
}