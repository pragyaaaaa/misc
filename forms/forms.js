let form = document.querySelector("#trial");
let inputStateSelect = form.querySelector("#inputState");
let notifSelect = form.querySelector("#notif");
let inputZip = form.querySelector("#inputZip");
let gridCheck = form.querySelector("#gridCheck");
let inputCity = form.querySelector("#inputCity");
let formsub = document.querySelector("#formsub");
let inputAddress2 = form.querySelector("#inputAddress2");
let inputAddress = form.querySelector("#inputAddress");
let inputStateSelectBtn = form.querySelector("#inputStateAdd");
let notifAddBtn = form.querySelector("#notifAdd");
let stateChips = form.querySelector("#stateChips");
let notifChips = form.querySelector("#notifChips");
let progress = form.querySelector("#progresstest");
let progressbar = document.createElement("div");
let success = document.querySelector("#success");
let successbar = document.querySelector("div");
let zipcode = document.querySelector("#zipcode");
let fillbtn = document.querySelector("#fillit");
let inputEmail = document.querySelector("#inputEmail4");
let inputpass = document.querySelector("#inputPassword4");

function emailret() {
  inputEmail.value === "";
}
function passwordret() {
  inputpass.value === "";
}
/* form.addEventListener("onload", (e) => {
  formValidate(emailret, passwordret);
}); */
//form.onkeyup = formValidate(emailret, passwordret);
/* function enableZip() {
  if (stateChips.textContent.trim() === "Administrator") {
    zipcode.classList.add("is-invalid");
  }
}
function enableZipSelect() {
  if (inputStateSelect.value.trim() === "Administrator") {
    zipcode.classList.add("is-invalid");
  }
}
function enableNotifSelect() {
  if (inputStateSelect.value.trim() === "Administrator") {
    notifSelect.classList.add("is-invalid");
  }
}
function enableNotif() {
  if (stateChips.textContent.trim() === "Administrator") {
    notifSelect.classList.add("is-invalid");
  }
} */

function selectState(selectdrop, chiparea, callfn) {
  let temp = selectdrop.value;
  let chip = document.createElement("span");
  chip.setAttribute("type", "button");
  chip.classList.add("badge", "badge-danger", "ml-4");
  chip.innerText = temp;
  chiparea.append(chip);
  let idx = selectdrop.selectedIndex;
  if (temp === "1") {
    selectdrop.setAttribute("disabled", true);
  } else {
    selectdrop.options[selectdrop.selectedIndex].setAttribute("disabled", true);
  }
  chip.addEventListener("click", () => {
    chip.remove();
    selectdrop.removeAttribute("disabled");
    selectdrop.options[idx].removeAttribute("disabled");
  });
  callfn();
}
/* inputStateSelect.addEventListener("input", (e) => {
  enableNotifSelect();
});
notifSelect.addEventListener("input", (e) => {
  enableZipSelect();
});
inputStateSelectBtn.addEventListener("click", (e) => {
  selectState(inputStateSelect, stateChips, enableNotif);
});
notifAddBtn.addEventListener("click", (e) => {
  selectState(notifSelect, notifChips, enableZip);
});
 */
fillbtn.addEventListener("click", (e) => {
  form.style.opacity = 0.3;
  setTimeout(() => {
    progressTest();
  }, 3000);
  setTimeout(() => {
    inputpass.value = "pragyasabstracts@gmail.com";
    inputEmail.value = "pragyasabstracts@gmail.com";
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

/* function formValidate(emailval, passval) {
  //preventDefault();
  if (emailval() || passval()) {
    formsub.disabled = true;
  } else {
    formsub.disabled = false;
  }
} */
