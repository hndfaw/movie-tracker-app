import { getFavoriteMovies,  hasErrored } from '../actions/index'

export const addFavorite = (body, userId) => {
  return async dispatch => {
    const url = 'http://localhost:3000/api/users/favorites/new/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    try {
      const response = await fetch(url, options)
      if(!response.ok) {
        dispatch(hasErrored('Error Adding Favorite'))
      }
      dispatch(getFavorites(userId))
    }
    catch {
      dispatch(hasErrored('Error Adding Favorite'))
    }
  }
}

export const getFavorites = id => {
  return async dispatch => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        dispatch(hasErrored('Errored Fetching Favorites'))
      }
      const favoriteMovies = await response.json()
      dispatch(getFavoriteMovies(favoriteMovies))
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}

export const removeFavorite = (userId, movieId) => {
  return async dispatch => {
    const url = `http://localhost:3000/api/users/${userId}/favorites/${movieId}`
    const options = {
      method: 'DELETE'
    }
    try {
      const response = await fetch(url, options)
      if(!response.ok) {
        dispatch(hasErrored('Error Removing Favorite'))
      }
      dispatch(getFavorites(userId))
      console.log(`${movieId} has been removed`)
    }
    catch(error) {
      dispatch(hasErrored('Error Removing Favorite'))
    }
  }
}