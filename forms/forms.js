let form = document.querySelector("#trial");
let inputStateSelect = form.querySelector("#inputState");
let inputStateSelectBtn = form.querySelector("#inputStateAdd");
let stateChips = form.querySelector("#stateChips");
inputStateSelectBtn.addEventListener("click", (e) => {
  let temp = inputStateSelect.value;
  let chip = document.createElement("span");
  chip.setAttribute("type", "button");
  chip.classList.add("badge", "badge-danger", "ml-4");
  chip.innerText = temp;
  stateChips.append(chip);
  if (temp === "1") {
    inputStateSelect.setAttribute("disabled", true);
  } else {
    let idx = inputStateSelect.selectedIndex;
    inputStateSelect.options[inputStateSelect.selectedIndex].setAttribute(
      "disabled",
      true
    );
  }

  chip.addEventListener("click", () => {
    chip.remove();
    inputStateSelect.removeAttribute("disabled");
    inputStateSelect.options[idx].removeAttribute("disabled");
  });
});
