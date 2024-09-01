document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendationForm');
    const movieTitleInput = document.getElementById('movieTitle');
    const movieLinkInput = document.getElementById('movieLink');
    const movieOpinionInput = document.getElementById('movieOpinion');
    const recommendationsList = document.getElementById('recommendationsList');
    const topTrendingList = document.getElementById('topTrendingList');
    let recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];

    // Initialize the list with saved recommendations
    recommendations.forEach(rec => {
        addRecommendation(rec.title, rec.link, rec.opinion);
    });
    updateTopTrending();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const movieTitle = movieTitleInput.value;
        const movieLink = movieLinkInput.value;
        const movieOpinion = movieOpinionInput.value;

        if (movieTitle && movieLink && movieOpinion) {
            const newRecommendation = { title: movieTitle, link: movieLink, opinion: movieOpinion };
            recommendations.push(newRecommendation);
            localStorage.setItem('recommendations', JSON.stringify(recommendations));

            addRecommendation(movieTitle, movieLink, movieOpinion);
            updateTopTrending();
            
            // Clear the form
            movieTitleInput.value = '';
            movieLinkInput.value = '';
            movieOpinionInput.value = '';
        }
    });

    function addRecommendation(title, link, opinion) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${title}</strong>: <a href="${link}" target="_blank">${link}</a>
            <p>${opinion}</p>
        `;
        recommendationsList.appendChild(listItem);
    }

    function updateTopTrending() {
        // Sort recommendations based on their position in the array (newest first)
        const topRecommendations = recommendations.slice(-10).reverse();
        topTrendingList.innerHTML = '';

        topRecommendations.forEach(rec => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${rec.title}</strong>: <a href="${rec.link}" target="_blank">${rec.link}</a>
                <p>${rec.opinion}</p>
            `;
            topTrendingList.appendChild(listItem);
        });
    }
});
