export default function Favorites(parks) {
  console.log(parks)
  return `
  <div class="container fave-container">
    <ol>
    ${parks
      .map(park => {
        return `
        <li class="favorites__name">
          <h2>${park.parkName}</h2>
          <div class="date-container">
              <div>
                <label for="date-input">Date</label>
                <input type="text" name="trip-date" id="dateInput" />
              </div>
              <input type="button" value="Submit Date" class="date-button">
          </div> 
          <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
        </li>
        <hr>
        `
      })
      .join("")}
    </ol>
  </div>
  `
}
