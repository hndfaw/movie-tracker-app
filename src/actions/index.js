export const signIn = (userData) => ({
  type: 'SIGN_IN',
  userData
})

export const getFavoriteMovies = (movies) => ({
  type: 'FAVORITE_MOVIES',
  movies
})

export const recentMovies = (movies) => ({
  type: 'RECENT_MOVIES',
  movies
})

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
})

export const logOut = () => ({
  type: 'LOGOUT',
})

export const toggleLogOutMenu = () => ({
  type: 'TOGGLE_LOGOUT_MENU'
})

export const favShowed = () => ({
  type: 'FAV_SHOWED',
})