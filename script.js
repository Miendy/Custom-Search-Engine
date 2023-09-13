document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");
    const resultsDiv = document.getElementById("results");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = input.value;
        if (query) {
            searchDuckDuckGo(query);
        }
    });

    function searchDuckDuckGo(query) {
        fetch(`https://api.duckduckgo.com/?q=${query}&format=json`)
            .then((response) => response.json())
            .then((data) => displayResults(data));
    }

    function displayResults(data) {
        resultsDiv.innerHTML = "";
        if (data.Results.length > 0) {
            data.Results.forEach((result) => {
                const resultDiv = document.createElement("div");
                resultDiv.className = "result";
                resultDiv.innerHTML = `<h3>${result.Text}</h3><p>${result.FirstURL}</p>`;
                resultsDiv.appendChild(resultDiv);
            });
        } else {
            resultsDiv.innerHTML = "<p>No results found.</p>";
        }
    }
});
