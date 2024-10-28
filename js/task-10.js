const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const elements = [];
  let i = 0;
  let width = 30;
  let height = 30;

  console.log(amount);

  do {
    i += 1;
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    width += 10;
    height += 10;
    elements.push(divEl);
  } while (i < amount);

  return boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const min = Number(input.value);
  const max = Number(input.value);
  const amount = Number(value);
  if (isNaN(amount) || amount < min || amount > max) {
    console.log("Please input a number between 1 and 100.");
  } else {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
