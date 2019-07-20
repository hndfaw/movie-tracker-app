let currentUser = {loggedIn: false, userDetail: {}}

export const logInReducer = (state = currentUser, action) => {
  switch(action.type) {
    case 'SIGN_IN':
        return Object.assign({}, {
          loggedIn: true,
          user: action.userData
        })
    default:
      return state
  }
}