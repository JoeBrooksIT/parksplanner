function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    (key) => `${[encodeURIComponent(key)]}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

function displayResults(responseJson, maxResults) {
  console.log(responseJson);

  $(".error").empty();
  $(".results-list").empty();

  for (let i = 0; (i < responseJson.data.length) & (i < maxResults); i++) {
    $(".results-list")
      .append(`<li><h3><a href="/park.html">${responseJson.data[i].fullName}</a></h3>
    <p>${responseJson.data[i].description}</p>
    </li>`);
  }
  $(".results").removeClass("hidden");
}

function parkDetails() {
  $(".park-details").append(`<h2>hello</h2>`);
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
    .then((responseJson) => displayResults(responseJson, maxResults))
    .catch((err) => {
      $(".error").text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $(".form").on("submit", function () {
    event.preventDefault();
    const API_URL = "https://developer.nps.gov/api/v1/parks";
    const stateArr = $(".state-entered").val().split(",");
    const maxResults = $(".result-amt").val();

    const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs";
    getParks(API_URL, stateArr, maxResults, API_KEY);
  });
}

$(watchForm);
parkDetails();
