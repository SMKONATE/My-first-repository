// Effet de survol sur les miniatures des projets
const projectImages = document.querySelectorAll('.prjtMiniature img');

projectImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Validation du formulaire de contact
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (nom === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs du formulaire.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        alert("Votre message a bien été envoyé !");
        form.reset(); // Réinitialise le formulaire après validation
    })
 });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Animation du menu au survol
    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease-in-out";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
// Animation de l'image de profil à l'entrée de la page
window.addEventListener('load', () => {
    const profileImage = document.querySelector('.profil img');
    profileImage.style.opacity = 0;
    profileImage.style.transition = 'opacity 2s ease-in';

    setTimeout(() => {
        profileImage.style.opacity = 1;
    }, 500);
});
function afficherBienvenue() {
    const bienvenueMessage = document.getElementById('bienvenueMessage');
    const now = new Date();
    const hours = now.getHours();
    let message;

    if (hours >= 5 && hours < 12) {
        message = "Bonjour et bienvenue sur mon portfolio !";
    } else if (hours >= 12 && hours < 18) {
        message = "Bon après-midi et bienvenue sur mon portfolio !";
    } else {
        message = "Bonsoir et bienvenue sur mon portfolio !";
    }

    bienvenueMessage.textContent = message;
}

// Appel de la fonction pour afficher le message
afficherBienvenue();

