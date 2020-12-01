function createCard() {
  var titleText = "this is title text";
  var bodyContainer = document.querySelector(".container");
  var cardDiv = document.createElement("div");
  var cardBodyDiv = document.createElement("div");
  var cardTitle = document.createElement("h5");
  var cardText = document.createElement("p");
  var cardBtn = document.createElement("button");
  cardDiv.style.width = "1000px";

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
  bodyContainer.appendChild(cardDiv);
}

function putDeactivateLabel() {
  var deactivated = false;
  var userLabel = document.createElement("span");
  var bodyContainer = document.querySelector(".container");
  userLabel.classList.add("badge", "badge-danger");
  userLabel.innerText = "Deactivated";
  if (deactivated) {
    bodyContainer.appendChild(userLabel);
  } else {
    console.log("working still.");
  }
}
