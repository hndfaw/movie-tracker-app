
export const favShowedReducer = (state = false, action) => {
  switch(action.type) {
    case 'FAV_SHOWED':
      return !state
    default:
      return state
  }
}