let display = document.getElementById("display");
let buttonsArr = document.getElementsByClassName("btns");
console.log("hi");
// buttonsArr = Array.from(buttonsArr);

let operatorsList = ["%", "*", "/", "+", "-", "."];
for (i = 0; i < buttonsArr.length; i++) {
  buttonsArr[i].addEventListener("click", (event) => {
    let key = event.target.innerText;

    if (
      (key === "%" || key === "/" || key === "*") &&
      display.innerText === "0"
    ) {
      return;
    }

    if (key === "A/c") {
      display.innerText = "0";
    } else if (key === "Del") {
      display.innerText = display.innerText.slice(0, -1);
      if (display.innerText === "") {
        display.innerText = 0;
      }
    } else if (key === "=") {
      if (
        display.innerText.length === 2 &&
        display.innerText.charAt(1) === "+"
      ) {
        display.innerText = "Hey";
      }
      display.innerText = eval(display.innerText);
    } else {
      if (display.innerText === "0" || display.innerText === "Hey") {
        display.innerText = key;
      } else {
        let lastKeyOfDisplay = display.innerText.charAt(
          display.innerText.length - 1
        );
        if (
          operatorsList.includes(lastKeyOfDisplay) &&
          operatorsList.includes(key)
        ) {
          return;
        }
        //     lastKeyOfDisplay !== key) ||
        //   !operatorsList.includes(lastKeyOfDisplay)
        //
        else {
          display.innerText += key;
        }
      }
    }
  });
}
