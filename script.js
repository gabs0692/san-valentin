document.addEventListener("DOMContentLoaded", () => {

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

  function nextScreen() {
    if (current < screens.length - 1) {
      screens[current].classList.remove("active");
      current++;
      screens[current].classList.add("active");
    }
  }

  function changeNoText() {
    const noBtn = document.querySelector(".no");
    noBtn.textContent = noTexts[noIndex];
    noIndex = (noIndex + 1) % noTexts.length;
  }

  // Hacemos visibles las funciones para el HTML
  window.nextScreen = nextScreen;
  window.changeNoText = changeNoText;

});
