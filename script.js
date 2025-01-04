function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

        document.getElementById("search-button").addEventListener("click", function () {
            const query = document.getElementById("search-input").value;
            if (query.trim() === "") {
                alert("Please enter a search term.");
            } else {
                // Redirect to Google search with the query
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.location.href = googleSearchUrl;
            }
        });

document.getElementById("search-input").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                document.getElementById("search-button").click();
            }
        });
