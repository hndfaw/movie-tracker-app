export const fetchFilms = ()=> {
  let filmsURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US&page=1'
   return fetch(filmsURL)
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching films')
       } else {
       return response.json()
       }
     })
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
     .catch(error => error ('Error fetching user'))
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
      .catch(error => error ('Error fetching new user'))
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



