export const favoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return action.favMovieId
    default:
      return state
  }
}