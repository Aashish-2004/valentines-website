// --- Yes/No button logic ---
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

// Buttons & banner
const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");
const questionHeading = document.getElementById("question-heading");

// Hearts container
const heartsContainer = document.querySelector(".hearts");

// Envelope & letter elements
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

// Function to create a floating heart
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const heartSize = 10 + Math.random() * 20;
  heart.style.width = heartSize + "px";
  heart.style.height = heartSize + "px";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.bottom = "-20px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

// Generate hearts continuously
setInterval(createHeart, 300);

// --- No button click ---
noBtn.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  index = (index + 1) % answers_no.english.length;
  noBtn.textContent = answers_no.english[index];

  size += 10;
  yesBtn.style.height = size + "px";
  yesBtn.style.fontSize = size / 4 + "px";
});

// --- Yes button click ---
yesBtn.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";

  // Hide buttons and question
  document.querySelector(".buttons").style.display = "none";
  questionHeading.style.display = "none";

  // Hide success message for now
  document.querySelector(".message").style.display = "none";

  // Show the envelope
  envelope.style.display = "block";

  // Create extra hearts/confetti
  for (let i = 0; i < 50; i++) {
    createHeart();
  }
});

// --- Envelope click ---
envelope.addEventListener("click", () => {
  // Hide envelope
  envelope.style.display = "none";

  // Show letter with sliding animation
  letter.classList.add("show");

  // Optional: show message after letter slides out
  setTimeout(() => {
    document.querySelector(".message").style.display = "block";
  }, 1000); // matches the CSS transition
});
