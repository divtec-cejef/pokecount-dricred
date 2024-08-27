/**
 * Excercice PokeCount
 * @author Rédouane Drici <redouane.drici@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-08-20 (Date de création)
 */

"use strict";
let compteur = 0;

// Récupere l'élément avec l'id "compteur-el"
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
    sauvegardeEl.textContent +=  `${compteur} Pokémons | `;
    localStorage.setItem("captures", sauvegardeEl.textContent)
    compteur = 0;
    compteurEl.textContent = compteur;
}

document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures : ";
});