module.exports = {
  Login: {
    id: ({ response }) => response && response.user ? response.user._id : '',
    firstName: ({ response }) => response && response.user ? response.user.first_name : '',
    lastName: ({ response }) => response && response.user ? response.user.last_name : '',
    email: ({ response }) => response && response.user ? response.user.email_address : '',
    grants: ({ response }) => response && response.grants ? response.grants : [],
    token: ({ response }) => response.token || ''
  }
};