export default function Favorites(parks) {
  console.log(parks);
  return `
  <h1>Favorites</h1>
  <ol>
  ${parks
    .map((park) => {
      return `
      <li>
      <p>${park.parkName}</p>
      <button class="user__delete__park" id="${park.id}">Remove from favorites</button>
      </li>
      `;
    })
    .join("")}
  </ol>
  `;
}
