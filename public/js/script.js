// Yes/No button logic
const answers_no = {
  english: [
    "No",
    "Bebo!! Are you sure?",
    "Are you really sure??",
    "My Kanmaniiiii, Please?",
    "Are you really really sure???",
    "Beboooooo..Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance, Bebo!",
    "I am begging you to stop!",
    "Ok, let's just start over.."
  ]
};

const answers_yes = { english: "Yes" };

let index = 0;
let size = 40;
const MAX_YES_BUTTON_SIZE = 180;
const MAX_HEARTS_ON_SCREEN = 120;
let heartIntervalId;

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");

// Floating hearts container
const heartsContainer = document.querySelector(".hearts");

// Function to create hearts randomly
function createHeart() {
  if (heartsContainer.childElementCount >= MAX_HEARTS_ON_SCREEN) {
    return;
  }

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "%";
  heart.style.bottom = "-20px"; // start slightly below the screen
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.width = 15 + Math.random() * 15 + "px";
  heart.style.height = heart.style.width;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}


// Create hearts every 300ms
heartIntervalId = setInterval(createHeart, 300);

// No button click
noBtn.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  banner.alt = "Sad animated banner";
  noBtn.textContent = answers_no.english[index];
  index = (index + 1) % answers_no.english.length;

  size = Math.min(size + 10, MAX_YES_BUTTON_SIZE);
  yesBtn.style.height = size + "px";
  yesBtn.style.minWidth = size + "px";
  yesBtn.style.fontSize = size / 4 + "px";
});

// Yes button click
yesBtn.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  banner.alt = "Celebration animated banner";
  document.getElementById("question-heading").textContent = "Yay! It's a date ❤️";
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".message").style.display = "block";
  clearInterval(heartIntervalId);

  // Confetti effect
  for (let i = 0; i < 150; i++) {
    createHeart();
  }
});
