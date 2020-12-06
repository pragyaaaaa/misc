let searchBtn = document.querySelector("#searchbtn");
let searchtext = document.querySelector("#searchtext");
let titles = document.getElementsByTagName("h5");
let divs = document.getElementsByTagName("div");
let para = document.getElementsByTagName("p");
let spans = document.getElementsByTagName("span");
let resultshtml = document.querySelector("#searchresults");
let resultshtmlret = document.createElement("div");
let titlearray = [];
let divsarray = [];
let paraarray = [];
let spansarray = [];
let clone;

let searched;
function getSearchText() {
  searched = searchtext.value.toLowerCase();
  for (let i = 0; i < titles.length; i++) {
    titlearray.push(titles[i]);
    console.log(titles[i].innerText);
  }
  for (let i = 0; i < divs.length; i++) {
    divsarray.push(divs[i]);
    console.log(divs[i].innerText);
  }
  for (let i = 0; i < para.length; i++) {
    paraarray.push(para[i]);
    console.log(para[i].innerText);
  }
  for (let i = 0; i < spans.length; i++) {
    spansarray.push(spans[i]);
    console.log(spans[i].innerText);
  }
  console.log(searched);
}
searchBtn.addEventListener("click", () => {
  resultshtmlret.innerHTML = "";
  getSearchText();
  searchTitle(searchtext.value.toLowerCase());
  searchtext.value = "";
});

function searchTitle(searchcontent) {
  resultshtmlret = document.createElement("div");
  if (searchcontent === "") {
    return;
  } else {
    for (let i = 0; i < titlearray.length; i++) {
      //console.log(titlearray[i].innerText);
      if (titlearray[i].innerText.toLowerCase().match(searched)) {
        clone = titlearray[i].offsetParent.cloneNode(true);
        resultshtmlret.append(clone);
        resultshtml.append(resultshtmlret);
      }
    }
  }
}

function clearResults() {
  resultshtml.innerHTML = "";
}
