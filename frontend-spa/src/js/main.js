const API_KEY = "yLyZjsEKQn7yqwa5Ejn0yNBAxbH604yYhN95sMCs"
const API_URL = `https://developer.nps.gov/api/v1/parks?api_key=${API_KEY}`

import Header from "./components/Header"
import Parks from "./components/Parks"
import Footer from "./components/Footer"

export default () => {
  header()
  getParks()
  footer()
}

const main = document.querySelector(".main-content")

function header() {
  const header = document.querySelector(".header")
  header.innerHTML = Header()
}

function getParks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(parks => {
      console.log(parks)
      main.innerHTML = Parks(parks.data)
    })
    .catch(err => console.log(err))
}

function footer() {
  const footer = document.querySelector(".footer")
  footer.innerHTML = Footer()
}
