document.addEventListener("DOMContentLoaded", () => {
    const adviceUrl = "https://api.adviceslip.com/advice";

    function fetchAdvice() {
        fetch(adviceUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('advice-result').textContent = data.slip.advice;
            })
            .catch(error => {
                console.error('Error fetching advice:', error);
                document.getElementById('advice-result').textContent = 'Failed to load advice';
            });
    }

    document.getElementById('fetch-advice').addEventListener('click', fetchAdvice);
});
