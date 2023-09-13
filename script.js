document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = input.value;
        if (query) {
            redirectToDuckDuckGo(query);
        }
    });

    function redirectToDuckDuckGo(query) {
        const duckDuckGoURL = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.location.href = duckDuckGoURL;
    }
});
