export default function Favorites(parks) {
  console.log(parks);
  return `
  <h1>Favorites</h1>
  <ol>
  ${parks
    .map((park) => {
      return `
      <li class="favorites__name">
        <p>${park.parkName}</p>
        <div class="date-container">
          <form id="dateForm" class="form">
            <div>
              <label for="date-input">Date</label>
              <input type="text" name="trip-date" id="${park.tripDate}"/>
            </div>
          </form>
          <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
          </li>
          `;
    })
    .join("")}
    </ol>
  `;
}
