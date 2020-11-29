import Header from "./components/Header";
import Parks from "./components/Parks";

export default () => {
  header();
  getParks();
};

const main = document.querySelector(".main-content");

function header() {
  const header = document.querySelector(".header");
  header.innerHTML = Header();
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${[encodeURIComponent(key)]}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

// function getParks() {
//   fetch(API_URL)
//     .then(res => res.json())
//     .then(parks => {
//       console.log(parks)
//       main.innerHTML = Parks(parks.data)
//     })
//     .catch(err => console.log(err))
// }

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
    .then((responseJson) => displayResults(responseJson, maxResults))
    .catch((err) => {
      ".error".text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  ".form".addEventListener("submit", function () {
    event.preventDefault();
    const API_URL = "https://developer.nps.gov/api/v1/parks";
    const stateArr = ".state-entered".value().split(",");
    const maxResults = ".result-amt".value();

    const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs";
    getParks(API_URL, stateArr, maxResults, API_KEY);
  });
}

function displayResults(respnseJson, maxResults) {
  console.log(responseJson);

  (".error" === ""(".results-list")) === "";

  for (let i = 0; (i < responseJson.data.length) & (i < maxResults); i++) {
    ".results-list"
      .append(`<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3>
    <p>{responseJson.data[i].description}</p>
    </li>`);
  }
  ".results".removeClass("hidden");
}

watchForm();
