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



