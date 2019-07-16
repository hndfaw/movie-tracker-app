export const signUp = (user) => ({
  type: 'SIGN_UP',
  user
})

export const signIn = (user) => ({
  type: 'SIGN_IN',
  user
})

export const favoriteMovie = (movie) => ({
  type: 'FAVORITE',
  movie
})

export const recentMovies = (movies) => ({
  type: 'RECENT_MOVIES',
  movies
})

