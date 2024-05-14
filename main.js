let emojis = [
  "😊",
  "😊",
  "🌟",
  "🌟",
  "🎉",
  "🎉",
  "🍕",
  "🍕",
  "🌈",
  "🌈",
  "🐶",
  "🐶",
  "🎈",
  "🎈",
  "🚀",
  "🚀",
  "🍦",
  "🍦",
  "🎸",
  "🎸",
  "📚",
  "📚",
  "🌺",
  "🌺",
  "🏆",
  "🏆",
  "🎨",
  "🎨",
  "⚽",
  "⚽",
];

let shuffledEmojis;
let attempts;
let matchedPairs;
let canClick;

function handleAttempts() {
  attempts++;
  document.querySelector(".attempts").textContent = `Intentos: ${attempts}`;
}

function handleMatch() {
  matchedPairs++;
  if (matchedPairs === emojis.length / 2) {
    window.alert(`¡Ganaste con ${attempts} intentos!`);
  }
}

function resetGame() {
  attempts = -1;
  matchedPairs = 0;
  canClick = true;
  handleAttempts();

  shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

  const memoryGame = document.querySelector(".memory-game");
  memoryGame.innerHTML = "";

  for (let i = 0; i < emojis.length; i++) {
    let emojiBox = document.createElement("div");
    emojiBox.className = "emoji-box";
    emojiBox.innerHTML = shuffledEmojis[i];

    emojiBox.onclick = function () {
      if (canClick && !this.classList.contains("openedBox")) {
        this.classList.add("openedBox");

        let openedBoxes = document.querySelectorAll(".openedBox");

        if (openedBoxes.length === 2) {
          canClick = false;

          if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
            setTimeout(() => {
              openedBoxes.forEach((box) => {
                box.classList.add("matchedBox");
                box.classList.remove("openedBox");
              });
              handleMatch();
              canClick = true;
            }, 500);
          } else {
            setTimeout(() => {
              openedBoxes.forEach((box) => box.classList.remove("openedBox"));
              canClick = true;
            }, 500);
          }
          handleAttempts();
        }
      }
    };

    memoryGame.appendChild(emojiBox);
  }
}

resetGame();
