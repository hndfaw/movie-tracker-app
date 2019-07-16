export const favoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'FAVORITE_MOVIES':
      return // do something...
    default:
      return state
  }
}