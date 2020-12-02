export default function Park(park) {
  console.log(park);
  return `
  <h4>${park.fullName}</h4>
  <h4>${park.states}</h4>
  <h3>Designation</h3>
  <h4>${park.designation}</h4>
  <h3>Description:</h3>
  <h4>${park.description}</h4>
  <h3>Weather</h3>
  <h4>${park.weatherInfo}</h4>
  
  `;
  console.log(park.images[0].title);
}
