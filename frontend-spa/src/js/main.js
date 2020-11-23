import Header from "./components/Header"

export default () => {
  header()
}

function header() {
  const header = document.querySelector(".header")
  header.innerHTML = Header()
}
