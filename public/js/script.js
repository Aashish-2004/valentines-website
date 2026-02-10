const answers_no = {
  english: [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, let's just start over.."
  ]
};

const answers_yes = {
  english: "Yes"
};

let index = 0;
let size = 40;

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");

noBtn.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";

  index = (index + 1) % answers_no.english.length;
  noBtn.textContent = answers_no.english[index];

  size += 10;
  yesBtn.style.height = size + "px";
  yesBtn.style.fontSize = size / 4 + "px";
});

yesBtn.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".message").style.display = "block";
});
