export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECENT_MOVIES':
      return action.movies.map( movie => {
        return { ...movie, movie_id: movie.id }
      })
    default:
      return state
  }
}

