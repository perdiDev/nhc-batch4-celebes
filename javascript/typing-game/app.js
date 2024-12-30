let points = 0;

const randomWords = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
];

const pointBoard = document.querySelector("#points");
const wrapper = document.querySelector(".wrapper");

pointBoard.textContent = points;

function getRandomWord() {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function boardWord(word) {
  for (let i = 0; i < word.length; i++) {
    const letter = document.createElement("div");

    letter.id = `box-${i}`;
    letter.textContent = word[i];
    letter.classList.add("box");

    wrapper.appendChild(letter);
  }
}

let word;
let index = 0;

function startGame() {
  word = getRandomWord();
  boardWord(word);
  changeActiveWord();
}

function changeActiveWord() {
  const active = document.querySelector(".active");

  if (active) {
    active.classList.remove("active");
  }

  const activeBox = document.getElementById(`box-${index}`);

  if (activeBox) activeBox.classList.add("active");
}

const typingGame = (e) => {
  const userType = e.key;

  if (index >= word.length) {
    if (e.key === "Enter") {
      wrapper.innerHTML = "";
      index = 0;
      startGame();
    }
    return;
  }

  const letter = document.getElementById(`box-${index}`);

  if (userType != word[index]) {
    letter.classList.add("wrong");
    points -= 1;
    pointBoard.textContent = points;
  } else {
    points += 1;
    pointBoard.textContent = points;
  }

  index++;
  changeActiveWord();
};

document.addEventListener("keydown", typingGame);

startGame();
