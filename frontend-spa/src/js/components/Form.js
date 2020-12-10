export default function Form() {
  return `
  <div class="container fave-container">
    <button class="nav__list button-primary">Favorites</button>
  </div>
  
  <div class="form-container">
    <form class="form">
      <div>
        <label for="search-term">Search by State: </label>
        <input type="text" name="search-term" class="state-entered" required />
      </div>
      <div>
        <label for="max-results">Max Amount: </label>
        <input type="number" name="max-results" class="result-amt" value="10" />
      </div>
      <input type="Submit" value="Search" class="button-primary" />
    </form>
  </div>
  `
}
