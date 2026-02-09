let current = 0;
const screens = document.querySelectorAll(".screen");

const noTexts = [
  "¿Estás segura? 👀",
  "Piénsalo otra vez 🙈",
  "Eso no vale 😌",
  "Dale di que sí 🥹",
  "Bubu se pondrá triste 🐻"
];

let noIndex = 0;

function nextScreen(force = false) {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

function changeNoText() {
  const noBtn = document.querySelector(".no");
  noBtn.textContent = noTexts[noIndex];
  noIndex = (noIndex + 1) % noTexts.length;
}
