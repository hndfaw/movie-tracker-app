export const logInReducer = (state = {loggedIn: false}, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      const userDetail = {
        loggedIn: true,
        user: action.userData
      }
      return userDetail 
    default:
      return state
  }
}