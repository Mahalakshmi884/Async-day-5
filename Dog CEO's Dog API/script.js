document.addEventListener("DOMContentLoaded", () => {
    const dogImageUrl = "https://dog.ceo/api/breeds/image/random";

    function fetchDogImage() {
        fetch(dogImageUrl)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.message;
                img.alt = 'Random Dog';
                const dogImageResult = document.getElementById('dog-image-result');
                dogImageResult.innerHTML = '';
                dogImageResult.appendChild(img);
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
                document.getElementById('dog-image-result').textContent = 'Failed to load dog image';
            });
    }

    document.getElementById('fetch-dog-image').addEventListener('click', fetchDogImage);
});
