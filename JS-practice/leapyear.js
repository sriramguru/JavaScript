function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Year ${year} is a leap year`);
  }
  // else {
  //     return;
  //   }
}
checkLeapYear(1900);
