const backButton = document.getElementById("go-back");
const playButton = document.getElementById("play-now");
const rulesButton = document.getElementById("how-to-play");
const gameButton = document.getElementById("game-buttons");
const instructions = document.getElementById("instructions");

playButton.onclick = (evt) => {
    location.href = "./game.html";
}

rulesButton.onclick = (evt) => {
    gameButton.style.display = "none";
    instructions.style.display = "inherit";

}
backButton.onclick = (evt) => {
    gameButton.style.display = "inherit";
    instructions.style.display = "none";

}