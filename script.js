async function loadPublications() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        const publicationsList = document.getElementById('publications-list');
        
        data.publications.forEach(publication => {
            const item = document.createElement('div');
            item.className = 'publication-item';
            
            let html = `<div class="publication-title">${publication.title}</div>`;
            html += `<div class="publication-description">${publication.description}</div>`;
            if (publication.venue) {
                html += `<div class="publication-venue">${publication.venue}. ${publication.year}.</div>`;
            }
            
            item.innerHTML = html;
            publicationsList.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading publications:', error);
    }
}

loadPublications();

