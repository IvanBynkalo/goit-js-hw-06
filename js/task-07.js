const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
