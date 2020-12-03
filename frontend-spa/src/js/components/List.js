export default function List() {
  return `
  <h1>Favorites</h1>;
  <section class="user__info__container">
    <li>
        <h2>${park.fullName}</h2>
        <button class="user__delete__park" id="${park.id}">Delete</button>
        <input class="user__park-id" type="hidden" value="${park.id}"></input>
    </li>
  </section>
  `;
}
