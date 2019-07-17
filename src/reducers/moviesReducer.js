export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECENT_MOVIES':
      return action.movies
    default:
      return state
  }
}

