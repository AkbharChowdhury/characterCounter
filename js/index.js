const textarea = document.querySelector("#txtComments");
const counterLabel = document.querySelector("#counterLabel");
const charLeftLabel = document.querySelector("#charLeft");
const maxCharacters = 30;
charLeftLabel.textContent = maxCharacters;
const setMaxLength = (textarea) =>
  textarea.setAttribute("maxlength", maxCharacters);
const addClass = (e, className) => e.classList.add(className);
const removeClass = (e, className) => e.classList.remove(className);
const validateMaxLength = (textarea, maxLength) =>
  textarea.getAttribute("maxlength").length !== maxLength
    ? setMaxLength(textarea)
    : "";

setMaxLength(textarea);

const meter = new Map([
  ["medium", 20],
  ["low", 10],
]);

const colours = Object.freeze({
  warning: "text-warning",
  danger: "text-danger",
});

const countCharacters = (counter) => {
  const userInput = counter.target.value;
  const currentTotal = maxCharacters - userInput.length;

  charLeftLabel.textContent = currentTotal;
  currentTotal <= meter.get("medium")
    ? addClass(counterLabel, colours.warning)
    : removeClass(counterLabel, colours.warning);
  currentTotal <= meter.get("low")
    ? addClass(counterLabel, colours.danger)
    : removeClass(counterLabel, colours.danger);
};

textarea.addEventListener("input", (e) => countCharacters(e));
textarea.addEventListener("focus", () =>
  validateMaxLength(textarea, maxCharacters)
);
