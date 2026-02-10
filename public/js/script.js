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

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");

// Floating hearts container
const heartsContainer = document.querySelector(".hearts");

// Function to create hearts randomly
function createHeart() {
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
setInterval(createHeart, 300);

// No button click
noBtn.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";
  index = (index + 1) % answers_no.english.length;
  noBtn.textContent = answers_no.english[index];

  size += 10;
  yesBtn.style.height = size + "px";
  yesBtn.style.fontSize = size / 4 + "px";
});

// Yes button click
yesBtn.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".message").style.display = "block";

  // Confetti effect
  for (let i = 0; i < 150; i++) {
    createHeart();
  }
});
