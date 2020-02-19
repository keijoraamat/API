fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
  return response.json()
})
  .then(movies => {
    console.log(movies);
    movies.forEach((movie) => {
      console.log(movie.title);
    });

})
