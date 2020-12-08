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
          <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
        </li>
        `
      })
      .join("")}
    </ol>
  </div>
  `
}
