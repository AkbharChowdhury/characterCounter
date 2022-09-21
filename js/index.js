const textarea = document.querySelector("#txtComments");
const counterLabel = document.querySelector("#counterLabel");
const charLeftLabel = document.querySelector("#charLeft");
const maxCharacters = 30;
charLeftLabel.textContent = maxCharacters;
textarea.setAttribute("maxlength", maxCharacters);

const meter = new Map([
  ["medium", 20],
  ["low", 10],
]);

const colours = {
  warning: "text-warning",
  danger: "text-danger",
};
const addClass = (e, className) => e.classList.add(className);
const removeClass = (e, className) => e.classList.remove(className);

const countCharacters = (counter) => {
  const currentTotal = maxCharacters - counter.target.value.length;
  charLeftLabel.textContent = currentTotal;
  currentTotal <= meter.get("medium") ? addClass(counterLabel, colours.warning) : removeClass(counterLabel, colours.warning);
  currentTotal <= meter.get("low") ? addClass(counterLabel, colours.danger) : removeClass(counterLabel, colours.danger);

};

textarea.addEventListener("input", (e) => countCharacters(e));