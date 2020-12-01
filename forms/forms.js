/*for (let button in buttons) {
  console.log(button.value());
} */
function validateForm() {
  let buttons = document.getElementsByTagName("button");
  let inputs = document.querySelectorAll("input");
  for (input in inputs) {
    if (input.value !== "") {
      buttons[0].setAttribute("disabled", false);
    } else {
      console.log("Fields are not filled properly.");
    }
  }
}

function reactivate() {
  let signInButton = document.querySelector("button");
  if (signInButton.innerText === "Sign in") {
    signInButton.setAttribute("innerText", "Sign Out");
    //signInButton.innerText = "Sign Out";
  } else {
    signInButton.setAttribute("innerText", "Sign in");
    console.log("It works.");
  }
}
