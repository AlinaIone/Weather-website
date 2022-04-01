// Select the city name from current city
const currentCity = document.querySelector(".current-city");

// Get the city from localeStorage
let localStorageCity = localStorage.getItem("city");

// Set the city in localStorage and update the weather info for that city
if (localStorageCity === null) {
  localStorage.setItem("city", "București");
  displayCurrentWeather("București");
  displayWeatherForecast("București");
} else {
  displayCurrentWeather(localStorageCity);
  displayWeatherForecast(localStorageCity);
  currentCity.innerHTML = localStorageCity;
}
