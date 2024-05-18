document.addEventListener("DOMContentLoaded", () => {
    const catFactUrl = "https://catfact.ninja/fact";

    function fetchCatFact() {
        fetch(catFactUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('cat-fact-result').textContent = data.fact;
            })
            .catch(error => {
                console.error('Error fetching cat fact:', error);
                document.getElementById('cat-fact-result').textContent = 'Failed to load cat fact';
            });
    }

    document.getElementById('fetch-cat-fact').addEventListener('click', fetchCatFact);
});
