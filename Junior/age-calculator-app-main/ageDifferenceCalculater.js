const monthsIndex = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageDifferenceCalculater(day, month, year) {
  console.log(day, month, year);
  // set starting month (array of #days in a month)
  const daysInMonth = [
    ...monthsIndex.slice(month - 1),
    ...monthsIndex.slice(0, month - 1),
  ];

  let totalDays = (new Date() - new Date(`${month}-${day}-${year}`)) / 86400000; // miliseconds to days
  let days = Math.floor(totalDays % 365.25);
  let months = 0; // assigned in for loop
  const years = Math.floor(totalDays / 365.25);

  // take days (>365) and reduce value by each month's days in sequence
  for (let i = 0; i < 12; i++) {
    if (days - daysInMonth[i] <= 0) {
      months = i;
      break;
    } else {
      days -= daysInMonth[i];
    }
  }

  console.log(days, months, years);
  return { days, months, years };
}

export { ageDifferenceCalculater };
