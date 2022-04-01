const bucharest = document.querySelector(".bucharest");
const brasov = document.querySelector(".brasov");
const arad = document.querySelector(".arad");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function changeCity(city) {
  // Change city from current city
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}
// Function that display all the weather informations about selected city
function updateWeather(city) {
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  // Update localStorage city
  localStorage.setItem("city", city);
  // Update city
  changeCity(city);
}

// Dropdown button events
bucharest.addEventListener("click", () => {
  updateWeather("București");
});

brasov.addEventListener("click", () => {
  updateWeather("Brașov");
});

arad.addEventListener("click", () => {
  updateWeather("Arad");
});

timisoara.addEventListener("click", () => {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", () => {
  updateWeather("Oradea");
});
