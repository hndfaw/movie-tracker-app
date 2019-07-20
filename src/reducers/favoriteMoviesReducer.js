export const favoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'FAVORITE_MOVIES':
      return [action.movies.data]
    default:
      return state
  }
}

