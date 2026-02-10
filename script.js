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

    // 💖 Si está en la pantalla de la pregunta (Sí)
    if (current === 2) {
      for (let i = 0; i < 7; i++) {
        createHeart();
      }
    }

    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 80 + 10 + "%";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
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
