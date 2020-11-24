export default function Parks(parks) {
  return `
    <h1>List of Parks</h1>
    <ul>
      ${parks
        .map(park => {
          return `
          <li>
            <h4>${park.fullName}</h4>
          </li>
        `
        })
        .join("")}
    </ul>
  `
}
