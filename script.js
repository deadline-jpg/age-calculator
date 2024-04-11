const day = document.querySelector("#day-input");
const month = document.querySelector("#month-input");
const year = document.querySelector("#year-input");
const inputs = [day, month, year];
const button = document.querySelector("#commitBtn");
let dateToday = new Date();
let printYears = document.querySelector("#print-years");
let printMonths = document.querySelector("#print-months");
let printDays = document.querySelector("#print-days");
const currentYear = dateToday.getFullYear();

// Deal with invalid input
function commit() {
  if (isNaN(parseInt(day.value)) || day.value < 0 || day.value > 31) {
    alert("Must include valid day!");
    return;
  }

  if (isNaN(parseInt(month.value)) || month.value < 0 || month.value > 13) {
    alert("Must include valid month!");
    return;
  }

  if (
    isNaN(parseInt(year.value)) ||
    year.value < 1850 ||
    year.value >= currentYear
  ) {
    alert("Must include valid year!");
    return;
  }

  const dob = new Date(year.value, month.value, day.value);
  const age = dateToday - dob;
  const yearsOld = age / 31536000000;
  const monthsOld = (yearsOld - Math.floor(yearsOld)) * 12;
  const daysOld = (monthsOld - Math.floor(monthsOld)) * 30;

  printAge(yearsOld, monthsOld, daysOld);

  inputs.forEach((input) => {
    input.disabled = true;
  });
}

// Defining function to print to screen
function printAge(years, months, days) {
  printYears.innerText = Math.floor(years);
  printMonths.innerText = Math.floor(months);
  printDays.innerText = Math.floor(days);
}

// Add event listener to button
button.addEventListener("click", () => {
  commit();
});
