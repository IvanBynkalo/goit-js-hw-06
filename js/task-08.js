const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
});
