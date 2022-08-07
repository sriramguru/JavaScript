//Simple if
a = 5;
if (a > 10) {
  console.log("a is bigger");
}

a = 20;
if (a > 10) {
  console.log("a is bigger");
}
//if else

a = 5;
b = 20;
if (a > b) {
  console.log("a is bigger");
} else {
  console.log("b is bigger");
}

//if else ladder ; to check the greatest of 3 numbers

//
num1 = 10;
num2 = 20;
num3 = 5;
if (num1 > num2 && num1 > num3) {
  console.log("num1 is bigger");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is bigger");
} else {
  console.log("num3 is bigger");
}

//falsy conditions --> 0,false,'',undefined,null,NaN
if (10) {
  console.log("ten");
}

if (-1) {
  console.log("neg-one");
}

if (console.log("aaa")) {
  console.log("zero");
}

if (0) {
  console.log("zero");
}
