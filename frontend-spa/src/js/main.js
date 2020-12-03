import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Results from "./components/Results";
import Park from "./components/Park";
import List from "./components/List";

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
  const resultsList = document.querySelector(".results-list");
  const results = document.querySelector(".results");
  console.log(responseJson);

  for (let i = 0; (i < responseJson.data.length) & (i < maxResults); i++) {
    const liElement = document.createElement("li");
    // liElement.innerHTML = `<h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3>
    liElement.innerHTML = `<h3 class="list-item" id="${i}"> ${responseJson.data[i].fullName}</h3>
    <p>${responseJson.data[i].description}</p>`;
    resultsList.appendChild(liElement);
  }
  results.classList.remove("hidden");

  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element) => {
    element.addEventListener("click", () => {
      const listIndex = parseInt(element.id);
      console.log(`clicked index id: ${listIndex}`);
      resultsMain.innerHTML = Park(responseJson.data[listIndex]);
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
  console.log(url);

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
    event.preventDefault();
    const API_URL = "https://developer.nps.gov/api/v1/parks";
    const stateArr = stateEntered.value.split(",");
    const maxResults = resultAmt.value;

    const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs";
    getParks(API_URL, stateArr, maxResults, API_KEY);
  });
}

function navListButton() {}

function addPark() {
  const appElement = document.querySelector(".results-main");
  const addParkButton = document.querySelector(".add__favorite__button");
  getParks(API_URL, stateArr, maxResults, API_KEY);
  addParkButton.addEventListener("click", function () {
    const parkId = addParkButton.id;
    const listName = event.target.parentElement.querySelector(
      ".user__info__container"
    ).value;
    console.log(`park id : ${parkId}, user list: ${listName}`);

    const requestBody = {
      Id: parkId,
    };

    fetch(
      `https://developer.nps.gov/api/v1/parks?&api_key=yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs`
    )
      .then((response) => response.json())
      .then((park) => {
        appElement.innerHTML = Park(park);
        addPark();
      })
      .catch((err) => console.log(err));
    console.log(addParkButton);
  });
}
