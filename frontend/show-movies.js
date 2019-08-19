
// This will be a show page for the current_user's information
function renderMovies(e, current_user, container){
    let current_user_id = window.localStorage.getItem('current_user_id')
    container.innerText =  " "
    fetch(`http://localhost:3000/users/${current_user_id}`)
        .then(r => r.json())
        .then(user => user.movies.forEach(movie => showMovie(movie, current_user, container)))

}

