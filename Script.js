/**
 * Excercice PokeCount
 * @author Rédouane Drici <redouane.drici@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-08-20 (Date de création)
 */

"use strict";
let compteur = 0;

// Récupère l'élément avec l'id "compteur-el"
const compteurEl = document.getElementById('compteur-el');
const sauvegardeEl = document.getElementById('sauvegarde-el');

function capturer() {
    compteur++;
    compteurEl.textContent = compteur;

    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

function sauvegarder() {
    // Ajoute un élément de liste avec le compteur actuel
    sauvegardeEl.innerHTML += `<li>${compteur}</li>`;

    // Sauvegarde la liste de captures dans le localStorage
    localStorage.setItem("captures", sauvegardeEl.innerHTML);

    // Réinitialise le compteur
    compteur = 0;
    compteurEl.textContent = compteur;
}

function reset() {
    // Supprime les données du localStorage et réinitialise l'affichage
    localStorage.removeItem("captures");
    sauvegardeEl.innerHTML = "Mes captures : ";
}

window.addEventListener('load', () => {
    // Récupère l'historique des captures lors du chargement de la page
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || 'Mes captures : ';
});

document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
document.getElementById('reset-btn').addEventListener('click', reset);

