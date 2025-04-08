/* function gallery() {
    fetch('<https://jsonplaceholder.typicode.com/photos>').then(response => response.json())
    .then(photos => {
        const gallery = document.getElementById('gallery');
        photos.slice(0, 50).forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'photo';
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.alt = photo.title;
            const title = document.createElement('div');
            title.className = 'photo-title';
            title.textContent = photo.title;
            photoDiv.appendChild(img);
            photoDiv.appendChild(title);
            gallery.appendChild(photoDiv);
        });
    })
}
// Appel de la fonction pour afficher les photos au chargement de la page
window.onload = gallery; */
const gallery = document.getElementById('gallery');

function printPhotos(photo) {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    photoDiv.appendChild(img);
    photoDiv.appendChild(title);
    
    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;
    img.alt = photo.title;
    
    const title = document.createElement('div');
    title.className = 'photo-title';
    title.textContent = photo.title;
    
    gallery.appendChild(photoDiv);
}

function displayPhotos(photos) {
    photos.slice(0, 50).forEach(photo => {
        printPhotos(photo);
    }) 
}

async function fetchGallery() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dataGallery = await response.json();
        console.log(dataGallery);

        displayPhotos(dataGallery);
    }
    catch {
        console.error('Failed to catch photos on gallery:', error);
    }
};
// Appel de la fonction pour afficher les photos au chargement de la page
fetchGallery();
window.onload = fetchGallery;