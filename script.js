// DARK MODE TOGGLE
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  // JOKE GENERATOR
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
