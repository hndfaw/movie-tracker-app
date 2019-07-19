import { favoriteMovie, addFavMovie } from '../actions/index'

export const addFavorite = (body) => {
  return async dispatch => {
    const url = 'http://localhost:3000/api/users/favorites/new';
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
        console.log('Error')
      }
      const newFavorite = await response.json()
      dispatch(addFavMovie(newFavorite))
    }
    catch {

    }
  }
}