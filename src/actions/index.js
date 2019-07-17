export const favoriteMovie = (movie) => ({
  type: 'FAVORITE_MOVIES',
  movie
})

export const recentMovies = (movies) => ({
  type: 'RECENT_MOVIES',
  movies
})
