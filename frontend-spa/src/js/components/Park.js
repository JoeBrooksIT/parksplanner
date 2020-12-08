export default function Park(park) {
  console.log(park)
  return `
  <div class="container">
    <h1 class="park__name"><strong>${park.fullName}</strong></h1>
    <div class="park-container">
      <h2>State:</h2>
      <h4>${park.states}</h4>
    </div>
    <div class="park-container">
      <h2>Description:</h2>
      <h4>${park.description}</h4>
    </div>
    <div class="park-container">
      <h2>Weather:</h2>
      <h4>${park.weatherInfo}</h4>
    </div>
    <div class="park-container">
      <button class="add__favorite__button" id="${
        park.id
      }">Add to favorites</button>
    </div>
      <section class="image__container">
      ${park.images
        .map(image => {
          console.log(image.url)
          return `
        <img class="park__image" src="${image.url}">
        `
        })
        .join("")}
      </section>
  </div>
  `
}
