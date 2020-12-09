export default function Favorites(parks) {
  console.log(parks);
  return `
  <div class="container fave-container">
    <ol>
    ${parks
      .map((park) => {
        return `
        <li class="favorites__name">
          <h2><strong>${park.parkName}</strong></h2>
          <div class="date-container">
              <div>
                <label for="date-input">Date</label>
                <input type="text" name="trip-date" id="dateInput-${park.id}" value="${park.tripDate}" />
              </div>
              <input type="button" value="Set Trip Date" class="date-button button-primary" id="${park.id}">
          </div> 
          <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
        </li>
        <hr>
        `;
      })
      .join("")}
    </ol>
  </div>
  `;
}
