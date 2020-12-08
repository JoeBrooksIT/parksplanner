import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Results from "./components/Results";
import Park from "./components/Park";
import Favorites from "./components/Favorites";

export default () => {
  displayHeader();
  displayForm();
  displayResults();
  displayFooter();
};

const resultsMain = document.querySelector(".results-main");

function displayHeader() {
  const theHeader = document.querySelector(".header");
  theHeader.innerHTML = Header();
}

function displayForm() {
  const theForm = document.querySelector(".form-content");
  theForm.innerHTML = Form();
  navListButton();
  watchForm();
}

function displayResults() {
  resultsMain.innerHTML = Results();
}

function displayFooter() {
  const theFooter = document.querySelector(".footer");
  theFooter.innerHTML = Footer();
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${[encodeURIComponent(key)]}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

function displayingResults(responseJson, maxResults) {
  displayResults();
  const resultsList = document.querySelector(".results-list");
  resultsList.innerHTML = "";
  const results = document.querySelector(".results");

  for (let i = 0; (i < responseJson.data.length) & (i < maxResults); i++) {
    const divElement = document.createElement("div");
    divElement.className = "result-list-item";
    divElement.innerHTML = `<h3 class="list-item" id="${i}"> ${responseJson.data[i].fullName}</h3>
    <p>${responseJson.data[i].description}</p>`;
    resultsList.appendChild(divElement);
  }
  results.classList.remove("hidden");

  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element) => {
    element.addEventListener("click", () => {
      const listIndex = parseInt(element.id);
      resultsMain.innerHTML = Park(responseJson.data[listIndex]);
      addPark();
    });
  });
}

function getParks(API_URL, stateArr, maxResults, API_KEY) {
  const params = {
    stateCode: stateArr,
    limit: maxResults,
  };

  const queryString = formatQueryParams(params);
  const url = API_URL + "?" + queryString + "&api_key=" + API_KEY;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusTest);
    })
    .then((responseJson) => displayingResults(responseJson, maxResults))
    .catch((err) => {
      console.log(err);
    });
}

function watchForm() {
  const form = document.querySelector(".form");
  const stateEntered = document.querySelector(".state-entered");
  const resultAmt = document.querySelector(".result-amt");
  form.addEventListener("submit", function () {
    console.log("submit button pressed");
    event.preventDefault();
    const API_URL = "https://developer.nps.gov/api/v1/parks";
    const stateArr = stateEntered.value.split(",");
    const maxResults = resultAmt.value;

    const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs";
    getParks(API_URL, stateArr, maxResults, API_KEY);
  });
}

function navListButton() {
  const appElement = document.querySelector(".results-main");
  const listElement = document.querySelector(".nav__list");
  listElement.addEventListener("click", function () {
    fetch(`https://localhost:44346/api/park/`)
      .then((response) => response.json())
      .then((parks) => {
        appElement.innerHTML = Favorites(parks);
        deletePark();
      })
      .catch((err) => console.log(err));
  });
}

function addPark() {
  const appElement = document.querySelector(".results-main");
  const addParkButton = document.querySelector(".add__favorite__button");
  addParkButton.addEventListener("click", function () {
    const parkId = addParkButton.id;
    const parkName = appElement.querySelector(".park__name").innerHTML;
    const requestBody = {
      ApiId: parkId,
      ParkName: parkName,
    };

    fetch(`https://localhost:44346/api/park`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((parks) => {
        appElement.innerHTML = Favorites(parks);
        deletePark();
      })
      .catch((err) => console.log(err));
  });
}

function deletePark() {
  const appElement = document.querySelector(".results-main");
  const deleteParkButton = document.querySelectorAll(".user__delete__park");
  deleteParkButton.forEach((button) => {
    button.addEventListener("click", function () {
      const parkId = button.id;
      fetch(`https://localhost:44346/api/park/${parkId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((parks) => {
          appElement.innerHTML = Favorites(parks);
          deletePark();
        })
        .catch((err) => console.log(err));
    });
  });
}
