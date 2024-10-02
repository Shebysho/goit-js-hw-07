const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const inputValue = inputEl.value.trim();
  outputEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
