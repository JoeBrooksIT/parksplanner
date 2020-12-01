export default function Form() {
  return `
  <form class="form">
    <label for="search-term">Search by state abreviation: </label>
    <input type="text" name="search-term" class="state-entered" required />
    <label for="max-results">Max amount: </label>
    <input type="number" name="max-results" class="result-amt" value="10" />

    <input type="submit" value="Go!" />
  </form>
  `
}
