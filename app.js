fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
  return response.json()
})
  .then(movies => {
    const moviesContainer = document.getElementById('movies')
    movies.forEach((movie) => {
      let movieContainer = document.createElement('div')
      movieContainer.classList.add('movie')
      movieContainer.innerHTML = '<div class="title">' + '<h1>'+ movie.title + '</h1>'+ '</div>' + '<div class="description">' + movie.description + '</div>'
      moviesContainer.append(movieContainer)
      console.log(movie.title);
    });

})
