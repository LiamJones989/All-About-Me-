// Dark Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// Joke Button Logic
const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the computer go to therapy? It had too many bugs.",
  "I told my laptop it was getting too hot... now it's giving me the cold shoulder.",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "I would tell you a joke about UDP... but you might not get it."
];

jokeButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeDisplay.textContent = jokes[randomIndex];
});
