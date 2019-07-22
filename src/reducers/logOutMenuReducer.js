
export const logOutMenuReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGOUT_MENU':
      return !state
    default:
      return state;
  }
}