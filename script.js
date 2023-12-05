const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const resetbtn = document.querySelector(".reset-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Oh, I like you too";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

resetbtn.addEventListener("click", function() {
    question.innerHTML = "Hey Cutie! Do You Like Me?";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
