document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendationForm');
    const movieTitleInput = document.getElementById('movieTitle');
    const movieLinkInput = document.getElementById('movieLink');
    const movieOpinionInput = document.getElementById('movieOpinion');
    const recommendationsList = document.getElementById('recommendationsList');
    const topTrendingList = document.getElementById('topTrendingList');
    const recommendations = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const movieTitle = movieTitleInput.value;
        const movieLink = movieLinkInput.value;
        const movieOpinion = movieOpinionInput.value;

        if (movieTitle && movieLink && movieOpinion) {
            addRecommendation(movieTitle, movieLink, movieOpinion);
            recommendations.push({ title: movieTitle, link: movieLink, opinion: movieOpinion });
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
            <div class="share-buttons">
                <button onclick="shareOnFacebook('${title}', '${link}')">
                    <img src="facebook-icon.png" alt="Share on Facebook">
                </button>
                <button onclick="shareOnTwitter('${title}', '${link}')">
                    <img src="twitter-icon.png" alt="Share on Twitter">
                </button>
                <button onclick="copyToClipboard('${title}', '${link}')">
                    <img src="copy-icon.png" alt="Copy Link">
                </button>
            </div>
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

    window.shareOnFacebook = function(title, link) {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(title)}`;
        window.open(url, '_blank');
    }

    window.shareOnTwitter = function(title, link) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}%20${encodeURIComponent(link)}`;
        window.open(url, '_blank');
    }

    window.copyToClipboard = function(title, link) {
        const textToCopy = `${title}: ${link}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Link copied to clipboard!');
        });
    }
});
