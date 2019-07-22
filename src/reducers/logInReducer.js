let currentUser = {loggedIn: false, userDetail: {}}

export const logInReducer = (state = currentUser, action) => {
  switch(action.type) {
    case 'SIGN_IN':
        return Object.assign({}, {
          loggedIn: true,
          userDetail: action.userData
        })
    case 'LOGOUT':
      return Object.assign({}, {
        loggedIn: false,
        userDetail: {}
      })
    default:
      return state
  }
}