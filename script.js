// =========================================================
// Theme toggle (dark by default, persisted)
// =========================================================
const modeToggle = document.getElementById("modeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  modeToggle.checked = false;
} else {
  modeToggle.checked = true;
}

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

// =========================================================
// Status bar: clock + uptime
// =========================================================
const clockEl = document.getElementById("clock");
const uptimeEl = document.getElementById("uptime");
const startTime = Date.now();

function updateClock() {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], { hour12: false });

  const seconds = Math.floor((Date.now() - startTime) / 1000);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  uptimeEl.textContent = m > 0 ? `${m}m ${s}s` : `${s}s`;
}
updateClock();
setInterval(updateClock, 1000);

// =========================================================
// Mobile sidebar drawer
// =========================================================
const navToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

function closeDrawer() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  backdrop.classList.toggle("show", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
backdrop.addEventListener("click", closeDrawer);
sidebar.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

// =========================================================
// Copy-to-clipboard (support links)
// =========================================================
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

document.querySelectorAll(".copybtn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const value = btn.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(value);
      showToast(`Copied "${value}"`);
    } catch {
      showToast("Couldn't copy — long press to select");
    }
  });
});

// =========================================================
// Joke generator
// =========================================================
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I told my computer I needed a break, and it froze.",
  "There are 10 types of people: those who understand binary, and those who don't.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "I would tell you a UDP joke, but you might not get it.",
  "A SQL query walks into a bar, sees two tables, and asks: 'Can I join you?'",
  "Why did the developer go broke? Because he used up all his cache.",
  "!false — it's funny because it's true.",
  "Why was the JavaScript developer sad? Because he didn't know how to null his feelings.",
  "My code doesn't have bugs. It just develops random features.",
  "Why do football coaches love the internet? For all the wide receivers.",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
];

const jokeButton = document.getElementById("jokeButton");
const jokeDisplay = document.getElementById("jokeDisplay");
let lastJokeIndex = -1;

jokeButton.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * jokes.length);
  } while (index === lastJokeIndex && jokes.length > 1);
  lastJokeIndex = index;

  jokeDisplay.style.opacity = 0;
  setTimeout(() => {
    jokeDisplay.textContent = jokes[index];
    jokeDisplay.style.transition = "opacity 0.3s ease";
    jokeDisplay.style.opacity = 1;
  }, 120);
});

// =========================================================
// Clicker game
// =========================================================
const clickerButton = document.getElementById("clickerButton");
const clickCountEl = document.getElementById("clickCount");
const highScoreEl = document.getElementById("highScore");
const resetButton = document.getElementById("resetButton");

let clicks = 0;
let highScore = parseInt(localStorage.getItem("clickerHighScore") || "0", 10);
highScoreEl.textContent = highScore;

clickerButton.addEventListener("click", () => {
  clicks++;
  clickCountEl.textContent = clicks;

  if (clicks > highScore) {
    highScore = clicks;
    highScoreEl.textContent = highScore;
    localStorage.setItem("clickerHighScore", String(highScore));
  }

  clickerButton.style.transform = "scale(0.94)";
  setTimeout(() => (clickerButton.style.transform = "scale(1)"), 90);
});

resetButton.addEventListener("click", () => {
  clicks = 0;
  clickCountEl.textContent = clicks;
});

// =========================================================
// Scroll reveal
// =========================================================
const revealTargets = document.querySelectorAll(".section, .hero");
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
