document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("modeToggle");

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  // Joke generator
  const jokeButton = document.getElementById("jokeButton");
  const jokeDisplay = document.getElementById("jokeDisplay");

  const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the computer go to therapy? It had too many bugs.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "I would tell you a joke about UDP... but you might not get it.",
    "Debugging: Being the detective in a crime movie where you are also the murderer."
  ];

  jokeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
  });
});
let count = 0;
let highScore = localStorage.getItem('clickerHighScore') || 0;

const clickerButton = document.getElementById('clickerButton');
const clickCount = document.getElementById('clickCount');
const highScoreDisplay = document.getElementById('highScore');
const resetButton = document.getElementById('resetButton');

clickCount.textContent = count;
highScoreDisplay.textContent = highScore;

clickerButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;

  if (count > highScore) {
    highScore = count;
    highScoreDisplay.textContent = highScore;
    localStorage.setItem('clickerHighScore', highScore);
  }
});

resetButton.addEventListener('click', () => {
  count = 0;
  clickCount.textContent = count;
});

