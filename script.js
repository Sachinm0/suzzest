// script.js
const movies = [
    { name: "Inception", votes: 0, poster: "https://via.placeholder.com/50x75?text=Inception" },
    { name: "The Dark Knight", votes: 0, poster: "https://via.placeholder.com/50x75?text=Dark+Knight" },
    { name: "Interstellar", votes: 0, poster: "https://via.placeholder.com/50x75?text=Interstellar" },
    { name: "Titanic", votes: 0, poster: "https://via.placeholder.com/50x75?text=Titanic" },
    { name: "Avengers: Endgame", votes: 0, poster: "https://via.placeholder.com/50x75?text=Endgame" },
    { name: "Forrest Gump", votes: 0, poster: "https://via.placeholder.com/50x75?text=Gump" },
    { name: "The Shawshank Redemption", votes: 0, poster: "https://via.placeholder.com/50x75?text=Shawshank" },
    { name: "The Godfather", votes: 0, poster: "https://via.placeholder.com/50x75?text=Godfather" },
    { name: "Jurassic Park", votes: 0, poster: "https://via.placeholder.com/50x75?text=Jurassic" },
    { name: "Harry Potter", votes: 0, poster: "https://via.placeholder.com/50x75?text=Potter" },
];

const movieList = document.getElementById("movie-list");

// Render movies
function searchGoogle(query) {
    // URL encode the query to ensure it works in a URL
    const encodedQuery = encodeURIComponent(query);

    // Construct the URL for Google search
    const googleSearchUrl = `https://www.google.com/search?q=${encodedQuery}`;

  
    // Redirect the user to the Google search page
    newWindow.location.href = googleSearchUrl;
}


function renderMovies() {
    movieList.innerHTML = ""; // Clear previous list
    movies
        .sort((a, b) => b.votes - a.votes) // Sort by votes
        .forEach((movie, index) => {
            const listItem = document.createElement("li");
            listItem.className = "movie-item";

            listItem.innerHTML = `
                <img src="${movie.poster}" alt="${movie.name} Poster" class="movie-poster">
                <div class="movie-info">
                    <span class="movie-name">${index + 1}. ${movie.name}</span>
                    <div class="vote-container">
                        <span class="vote-count">${movie.votes} votes</span>
                        <button class="vote-button" onclick="vote('${movie.name}')">Vote</button>
                    </div>
                </div>
            `;

            movieList.appendChild(listItem);
        });
}

// Voting function
function vote(movieName) {
    const movie = movies.find((m) => m.name === movieName);
    if (movie) {
        movie.votes += 1;
        renderMovies();
    }
}

// Initial render
renderMovies();
