let form = document.querySelector("#trial");
let inputStateSelect = form.querySelector("#inputState");
let inputStateSelectBtn = form.querySelector("#inputStateAdd");
let stateChips = form.querySelector("#stateChips");
let progress = form.querySelector("#progresstest");
let progressbar = document.createElement("div");
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

let fillbtn = document.querySelector("#fillit");
let inputEmail = document.querySelector("#inputEmail4");
let inputpass = document.querySelector("#inputPassword4");

fillbtn.addEventListener("click", (e) => {
  form.style.opacity = 0.3;
  setTimeout(() => {
    progressTest();
  }, 3000);
  setTimeout(() => {
    inputpass.value = "pragyasabstracts@gmail.com";
  }, 4000);
  setTimeout(() => {
    progressEndTest();
    form.style.opacity = 1;
  }, 9000);
  e.preventDefault();
});

function progressTest() {
  progressbar.innerHTML =
    '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div> </div>';
  progressbar.style.opacity = "unset";
  progress.append(progressbar);
}
function progressEndTest() {
  progressbar.innerHTML = " ";
}
