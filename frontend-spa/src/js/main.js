const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs"
const API_URL = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${API_KEY}`

import Header from "./components/Header"

export default () => {
  header()
}

function header() {
  const header = document.querySelector(".header")
  header.innerHTML = Header()
}

function getParks() {}
