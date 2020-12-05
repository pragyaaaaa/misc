let form = document.querySelector("#trial");
let inputStateSelect = form.querySelector("#inputState");
let inputZip = form.querySelector("#inputZip");
let gridCheck = form.querySelector("#gridCheck");
let inputCity = form.querySelector("#inputCity");
let formsub = form.querySelector("#formsub");
let inputAddress2 = form.querySelector("#inputAddress2");
let inputAddress = form.querySelector("#inputAddress");
let inputStateSelectBtn = form.querySelector("#inputStateAdd");
let stateChips = form.querySelector("#stateChips");
let progress = form.querySelector("#progresstest");
let progressbar = document.createElement("div");
let success = document.querySelector("success");
let successbar = document.querySelector("div");
inputStateSelectBtn.addEventListener("click", (e) => {
  let temp = inputStateSelect.value;
  let chip = document.createElement("span");
  chip.setAttribute("type", "button");
  chip.classList.add("badge", "badge-danger", "ml-4");
  chip.innerText = temp;
  stateChips.append(chip);
  let idx = inputStateSelect.selectedIndex;
  if (temp === "1") {
    inputStateSelect.setAttribute("disabled", true);
  } else {
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
    successBar();
  }, 9000);
  e.preventDefault();
});

function progressTest() {
  progressbar.innerHTML =
    '<div style="opacity: 1;" class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div> </div>';
  progressbar.style.opacity = "unset";
  progress.append(progressbar);
}
function progressEndTest() {
  progressbar.innerHTML = " ";
}

function successBar() {
  successbar.innerHTML =
    '<div class="alert alert-success alert-dismissible fade show" role="alert"> <strong>Holy guacamole!</strong> You should check in on some of those fields below. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>';
  success.append(successbar);
}

function formValidate() {
  preventDefault();
  if (
    inputStateSelect.value === "" ||
    inputAddress2.value === "" ||
    inputAddress2.value === "" ||
    inputCity === "" ||
    inputEmail === "" ||
    inputpass === ""
  ) {
    formsub.disabled = true;
    return false;
  } else {
    formsub.disabled = false;
    return true;
  }
}
