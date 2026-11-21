// Sélection des éléments
const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Fonction pour jouer un son
function playSound(key) {

  const audio = document.getElementById(key);
  const pad = audio.parentElement;

  if (!audio) return;

  // Recommencer le son depuis le début
  audio.currentTime = 0;

  // Jouer le son
  audio.play();

  // Afficher le nom du son
  display.textContent = pad.id;

  // Animation du pad
  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

// Gestion des clics sur les pads
pads.forEach(pad => {

  pad.addEventListener("click", () => {

    const audio = pad.querySelector(".clip");

    playSound(audio.id);

  });

});

// Gestion des touches du clavier
document.addEventListener("keydown", event => {

  const key = event.key.toUpperCase();

  const allowedKeys = [
    "Q", "W", "E",
    "A", "S", "D",
    "Z", "X", "C"
  ];

  if (allowedKeys.includes(key)) {
    playSound(key);
  }

});

