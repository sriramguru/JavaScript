//1.add two numbers
// let num1 = 10;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(`sum=${sum}`);

//2.maximum of two numbers
// let num1 = -1;
// let num2 = -20;
// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

//3.factorial of a number
// let num = 20;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

//4.simple interest

// let p = 10000;
// let n = 3;
// let r = 6;
// let simpleInterest = (p * n * r) / 100;
// console.log(simpleInterest);

//5.armstrong number
// let num = 153;
// let number = num;
// let sumOfCubes = 0;
// while (num > 0) {
//   digit = num % 10;
//   num = Math.floor(num / 10);
//   sumOfCubes = sumOfCubes + digit * digit * digit;
// }
// console.log(sumOfCubes);
// if (sumOfCubes === number) {
//   console.log("Armstrong number");
// } else {
//   console.log("not an armstrong number");
// }

//6.area of circle
// let pi = 3.14159;
// let r = 7;
// let areaOfCircle = pi * r * r;
// console.log(areaOfCircle);

//7.to print all prime numbers in an interval
//

//8.prime number or not
// let num = 2;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("prime number");
// } else {
//   console.log("not a prime number");
// }

//9.fibanacci number series
// let n = 10;
// let num1 = 0;
// let num2 = 1;
// console.log(num1);
// console.log(num2);
// for (let i = 2; i < n; i++) {
//   //   result = num1 = num2;
//   //   num2 = result;
//   let result = num1 + num2;
//   num1 = num2;
//   num2 = result;
//   console.log(result);
// }

//10.sum of squares of first n natural numbers
// let n = 25;
// sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
// console.log(sumOfSquares);

//11.sum of cubes of first n natural numbers
// let n = 4;
// sumOfCubes = (n * n * (n * n + 2 * n + 1)) / 4;
// console.log(sumOfCubes);

//12.to check whther the string is palindrome
// let str = "malayalam";
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("malayalam");

// console.log(reverseString("malayalam"));
// if (str === reverseString("malayalam")) {
//   console.log("given string is palindrome");
// } else {
//   console.log("not a palindrome");
// }

// let str = "Tamil";
// var splitArray = str.split("");
// console.log(splitArray);

// var reverseArray = splitArray.reverse();
// console.log(reverseArray);

// var reverseString = reverseArray.join("");
// console.log(reverseString);

// if (str === reverseString) {
//   console.log("palindrome");
// } else {
//   console.log("not");
// }
