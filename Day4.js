// conditional statements
// if, if - else, else if ladder, switch

// let age = 12;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible to vote");
// }

// let num1 = 15;
// let num2 = 10;
// // greatest of 2 nums
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greater");
// }

// logical operators
// && -> logical and
// || -> logical or
// ! -> logical not

// let age = 13;
// let isVoterIDAvailable = true;
// if (age >= 18 && isVoterIDAvailable) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible to vote");
// }

// let isAadharAvailable = false;
// let isVoterIDAvailable = false;
// if (isAadharAvailable || isVoterIDAvailable) {
//   console.log("Eligible to get passport");
// } else {
//   console.log("Not Eligible to get passport");
// }

// let num1 = 15;
// let num2 = 10;
// let num3 = 20;
// greatest of 3 nums
// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("num1 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// } else {
//   if (num2 > num3) {
//     console.log("num2 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// }

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greater");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is greater");
// } else {
//   console.log("num3 is greater");
// }

// practice
// if (10) {
//   console.log("aa");
// }

// if (-10) {
//   console.log("aa");
// }

// if (0) {
//   console.log("aa");
// }

// if ("aa") {
//   console.log("aa");
// }

// if ("") {
//   console.log("aa");
// }

// if (undefined) {
//   console.log("aa");
// }

// if (null) {
//   console.log("aa");
// }

// if (NaN) {
//   console.log("aa");
// }

// #############################################
// falsy values
// 0, false, '', undefined, null, NaN
// #############################################

// console.log(1 > 2 > 3); // false
// console.log(3 > 2 > 1); // false

// console.log(console.log("aa"));

// short circuiting
// let age = 20;
// if (age > 18 && console.log("aa")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// let age = 20;
// if (age > 18 || console.log("aa")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// if (console.log("aa")) {
//   console.log("dabjkanfkaba");
// }

// logical Not !
// true -> false
// false -> true

// if (!(10 < 5)) {
//   console.log(10);
// } else {
//   console.log("5");
// }

// practice
// console.log(!10, !"dadada"); // false
// console.log(!null, !0, !""); // true
