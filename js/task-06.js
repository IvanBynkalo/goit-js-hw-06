const input = document.querySelector("#validation-input");
const inputLength = Number(input.attributes["data-length"].value);

input.addEventListener("blur", () => {
  if (inputLength !== input.value.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
