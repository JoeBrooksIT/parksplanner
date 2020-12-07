export default function Favorites(parks) {
  console.log(parks)
  return `
  <h1 class="button">Favorites</h1>
  <ol>
  ${parks
    .map(park => {
      return `
      <li class="favorites__name">
        <p>${park.parkName}</p>
        <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
      </li>
      `
    })
    .join("")}
  </ol>
  `
}
