export const logInReducer = (state = {loggedIn: false}, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return // return something

    case 'SIGN_IN':
      const user = action.userData.find(user =>
        user.email === action.userInput.email)
        let userDetail;

        if (user !== undefined && user.password === action.userInput.password) {
          userDetail = {
            id: user.id,
            name: user.name,
            loggedIn: true
          }
        } else {
          userDetail = {loggedIn: false}
        }

      return userDetail 
    default:
      return state
  }
}