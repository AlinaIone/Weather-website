function displayCurrentWeather(city) {
  // The server link, based on the city
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  // Selection of the Weather Section
  const currentWeatherSection = document.querySelector(".current-weather");

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   Object (server response) destructuring
      const { dt, main, name, weather, wind } = data;
      const hours = getHours(dt);
      const day = getDay(dt);
      const temperature = Math.round(main.temp);
      const iconUrl = getIconUrl(weather[0].icon);
      const windSpeed = Math.round(transformMpsToKmph(wind.speed));
      const realFeel = Math.round(main.feels_like);
      const description = firstLetterToUpperCase(weather[0].description);

      //   Display weather info on the screen
      currentWeatherSection.innerHTML = `
      <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${iconUrl}" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
          <p class="fs-5 text-capitalize">${description}</p>
          <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
        </div>
      `;
    });
}
// displayCurrentWeather();
