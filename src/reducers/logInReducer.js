export const logInReducer = (state = [], action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return //do something

    case 'SIGN_IN':
      return //do something
    default:
      return state
  }
}