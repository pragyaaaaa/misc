let stated = document.querySelector("#targetSelect");
let donate = document.querySelector("#donate-form");
let ipbtn = document.querySelector("#ipbtn");
ipbtn.addEventListener("click", (e) => {
  e.preventDefault();
});
let isnec = stated.options[stated.selectedIndex].innerText === "Admin";
let selectedVar;

function isRequiredBySelection() {
  console.log("I ran");
  selectedVar = $('select[name="targetSelect"]').val();
  return selectedVar === "admin" || selectedVar === "author";
}

$("#trial").validate({
  rules: {
    targetSelect: {
      required: true,
    },
    targetSelectDep: {
      required: {
        depends: function () {
          console.log("I ran");
          selectedVar = $('select[name="targetSelect"]').val();
          return selectedVar === "admin" || selectedVar === "author";
        },
      },
    },
  },
 
});
