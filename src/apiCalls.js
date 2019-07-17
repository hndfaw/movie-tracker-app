export const fetchFilms = () => {
  let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US&page=1'
   return fetch(url)
     .then(response => response.json())
     .then(data => data)
};

export const fetchGenre = () => {
  let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US'
   return fetch(url)
     .then(response => response.json())
     .then(data => data)
};

export const fetchUser = (data) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  let url = 'http://localhost:3000/api/users'
   return fetchData(url, option)
     .catch(error => console.log(error.message))
};

export const postNewUser = (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const url = 'http://localhost:3000/api/users/new'
    return fetchData(url, options)
      .catch(error => console.log(error.message))
}

export const fetchData = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response)
      } else {
        return response.json()
      }
    }).catch(error => new Error(error.message))
}



