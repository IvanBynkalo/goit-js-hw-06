const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = document.body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
