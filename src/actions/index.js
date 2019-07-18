export const signIn = (userData) => ({
  type: 'SIGN_IN',
  userData
})

export const favoriteMovie = (movie) => ({
  type: 'FAVORITE_MOVIES',
  movie
})

export const recentMovies = (movies) => ({
  type: 'RECENT_MOVIES',
  movies
})

export const addFavMovie = (favMovie) => ({
  type: 'FAVORITE_MOVIES',
  favMovie
})
