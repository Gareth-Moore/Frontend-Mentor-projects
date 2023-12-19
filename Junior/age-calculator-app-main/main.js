import { ageDifferenceCalculater } from "./ageDifferenceCalculater.js";

const form = document.querySelector("form");
const errorMessages = document.querySelectorAll(".error-message");
const results = document.querySelectorAll(".result-data"); // [day, month, year]

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputDay = parseInt(e.target[0].value);
  const inputMonth = parseInt(e.target[1].value);
  const inputYear = parseInt(e.target[2].value);

  if (
    inputDay <= 31 &&
    inputDay >= 1 &&
    inputMonth <= 12 &&
    inputMonth >= 1 &&
    inputYear <= 2023
  ) {
    errorMessageDisplay("none");

    const ageDifference = ageDifferenceCalculater(
      inputDay,
      inputMonth,
      inputYear
    );

    // update results
    results[0].innerHTML = ageDifference.days;
    results[1].innerHTML = ageDifference.months;
    results[2].innerHTML = ageDifference.years;
  }
  // error handling
  else {
    errorMessageDisplay("block");

    if (inputDay <= 31 && inputDay >= 1) {
      document.getElementById("day-error-message").style.display = "none";
    }
    if (inputMonth <= 12 && inputMonth >= 1) {
      document.getElementById("month-error-message").style.display = "none";
    }
    if (inputYear <= 2023) {
      document.getElementById("year-error-message").style.display = "none";
    }
  }
});

function errorMessageDisplay(value) {
  errorMessages.forEach((element) => {
    element.style.display = `${value}`;
  });
}
