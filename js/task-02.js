const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsRef = document.querySelector("#ingredients");

function makeIng(options) {
  return options.map((option) => {
    const optionEl = document.createElement("li");

    optionEl.classList.add("item");
    optionEl.textContent = option;

    return optionEl;
  });
}

ingredientsRef.append(...makeIng(ingredients));
