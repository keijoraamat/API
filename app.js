fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
  return response.json()
})
  .then(movies => {
    const moviesContainer = document.getElementById('movies')
    movies.forEach((movie) => {
      let movieContainer = document.createElement('div')
      movieContainer.innerHTML = movie.title
      moviesContainer.append(movieContainer)
      console.log(movie.title);
    });

})
