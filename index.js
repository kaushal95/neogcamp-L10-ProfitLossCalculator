const boughtElement = document.querySelector("#bought");
const currentElement = document.querySelector("#current");
const quantityElement = document.querySelector("#quantity");
const btnElement = document.querySelector(".btn");
const outputElement = document.querySelector(".output");

function calculate(boughtAt, current, quantity) {
  // const currentValue = current * quantity;
  let diffAmount = (current - boughtAt) * quantity;
  const status = diffAmount > 0 ? "Profit" : "Loss";
  diffAmount = Math.abs(diffAmount);
  const percentage = (diffAmount / boughtAt) * 100;
  return {
    status,
    percentage,
    diffAmount,
  };
}

btnElement.addEventListener("click", () => {
  hideMessage();
  const boughtAt = Number(boughtElement.value);
  const current = Number(currentElement.value);
  const quantity = Number(quantityElement.value);
  if (boughtAt && current && quantity) {
    const { status, percentage, diffAmount } = calculate(
      boughtAt,
      current,
      quantity
    );
    diffAmount == 0
      ? showMessage("No Pain😰 , No Gain 💪 !!")
      : showMessage(
          `Hey, the ${status} is ${diffAmount} and the percentage is ${parseFloat(
            percentage
          ).toFixed(2)}% !!`
        );
  } else {
    showMessage("Please enter all Values!!");
  }
});

function showMessage(message) {
  outputElement.style.display = "block";
  outputElement.innerText = message;
}
function hideMessage() {
  outputElement.style.display = "none";
}
