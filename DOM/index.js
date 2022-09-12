function onButtonClick() {
  let content = document.getElementById("para1");

  if (content.style.color === "aqua") content.style.color = "green";
  else content.style.color = "aqua";
}

function artOnSelect() {
  let fontchange = document.getElementsByClassName("art");
  for (i = 0; i < fontchange.length; i++) {
    let fontChangeElements = fontchange[i];
    fontChangeElements.style.fontSize = "3rem";
  }
}

function listAbc() {
  console.log("hi");
  let fontStyles = document.querySelectorAll(".list");
  for (i = 0; i < fontStyles.length; i++) {
    let fontStyleChange = fontStyles[i];
    fontStyleChange.style.fontFamily = "helvetica";
    console.log("a");
  }
}
