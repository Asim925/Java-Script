function dayOfProgrammer(year) {
  // Julian calendar
  if (year < 1918) {
    if (year % 4 === 0) return `12.09.${year}`;
    return `13.09.${year}`;
  }
  // Gregorian calendar
  else if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      return `12.09.${year}`;
    else return `13.09.${year}`;
  }
  // Transition year (if year is 1918 where the calendars were switched)
  else return `26.09.${year}`;
}
console.log(dayOfProgrammer(1900));
