//PERFECT NUMBER
// let num = 6;
// fact = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     fact += i;
//   }
// }
// console.log(fact);
// if (num == fact) {
//   console.log("perfectNumber");
// } else {
//   console.log("No");
// }

//prime number
let num = 2;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("prime number");
} else {
  console.log("not a prime number");
}
