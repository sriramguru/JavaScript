// Default FUnction Parameters
// function add(num1, num2 = 5) {
//   console.log("hi");
//   return num1 + num2;
// }

// console.log(add(4, 4));

// Destructuring function parameters
// let players = ["Ronaldo", "Bruno", "Rashford", "Antony", "Kane"];
// // console.log(players[3]);
// function details([cr7, hk10]) {
//   console.log(cr7);
//   console.log(hk10);
// }
// details([players[0], players[4]]);

// function details({ Name, country }) {
//   console.log(Name);
//   console.log(country);
// }
// details({ Name: "Ronaldo", Age: 38, position: "striker", country: "Portugal" });

// function passed as a paramter
function welcome() {
  console.log("Hello World");
}
function goodbye() {
  console.log("See you later");
}

function greet(choice) {
  choice();
}

greet(welcome);
greet(goodbye);
