document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // Crée le nom
    const nom = document.createElement('div');
    nom.textContent = 'Votre Nom';
    nom.style.fontSize = '1.5em';
    nom.style.marginBottom = '10px';
    
    // Crée l'image de profil
    const img = document.createElement('img');
    img.src = 'images/profil.jpg';
    img.style.width = '70px';
    img.style.height = '70px';
    img.style.borderRadius = '50%';
    img.style.position = 'absolute';
    img.style.top = '10px';
    img.style.left = '50%';
    img.style.transform = 'translateX(-50%)';
    img.style.border = '3px solid #7FDBFF';
    
    // Insère les éléments
    header.insertBefore(nom, header.firstChild);
    header.appendChild(img);
    header.style.position = 'relative';
    header.style.paddingTop = '80px';
});