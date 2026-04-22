// IMPORTS
import { initGame } from "./game.js";

// WARTEN BIS SEITE GELADEN
window.onload = () => {

const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {

// Menü aus
document.getElementById("menu").style.display = "none";

// UI an
document.getElementById("gameUI").style.display = "block";

// Spiel starten
initGame();

};

};
