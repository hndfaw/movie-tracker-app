import { getFavoriteMovies, addFavMovie, hasErrored } from '../actions/index'

export const addFavorite = (body) => {
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
      const newFavorite = await response.json()
      dispatch(addFavMovie(newFavorite.id))
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