function addCard() {
  let contactCardSection = document.querySelector("#userCards");
  let contactCardTable = contactCardSection.querySelector("#userCardTable");
  let contactCardTableBody = contactCardTable.querySelector("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let cardDiv = createCard();
  td.appendChild(cardDiv);
  tr.appendChild(td);
  contactCardTableBody.appendChild(tr);
  contactCardTable.appendChild(contactCardTableBody);
}

function createCard() {
  let titleText = "this is title text";
  let cardDiv = document.createElement("div");
  let cardBodyDiv = document.createElement("div");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  let cardBtn = document.createElement("button");
  //cardDiv.style.width = "1000px";

  cardDiv.classList.add("card", "m-4");
  cardBodyDiv.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");
  cardBtn.classList.add("btn", "btn-success");
  cardBtn.innerText = "Reactivate";
  cardText.innerText = "This is card text.";
  cardTitle.innerText = titleText;

  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(cardBtn);
  cardDiv.appendChild(cardBodyDiv);
  return cardDiv;
}

let reactivateBtn = document.querySelector(".reactivateBtn");
let badge = document.querySelectorAll(".badge-danger");
let anchor = document.createElement("a");
let isDeactivated = true;
let badgePlace = document.querySelector(".card-body span");
reactivateBtn.addEventListener("click", () => {
  if (isDeactivated === true) {
    reactivateBtn.innerText = "Deactivate";
    let localbadge = document.querySelector(".badge-danger");
    reactivateBtn.classList.add("btn-danger");
    badge[0].remove();
    localbadge.remove();
    isDeactivated = false;
  } else {
    console.log("Already active.");
    reactivateBtn.innerText = "Reactivate";
    reactivateBtn.classList.remove("btn-danger");
    reactivateBtn.classList.add("btn-success");
    badgePlace.append(anchor);
    anchor.classList.add("badge", "badge-danger");
    anchor.innerText = "Deactivated";
    isDeactivated = true;
  }
});
