function displayWeatherForecast(city) {
  const weatherForecastEndpoint = getForecastEndpoint(city);

  fetch(weatherForecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      console.log(data);
      const weatherForecastSection =
        document.querySelector(".weather-forecast");

      weatherForecastSection.innerHTML = "";

      // Create the new format of the data: an object with key-days of the week, and value-an array with objects(forecasts)
      const forecastPerDay = {};

      list.forEach((element) => {
        const { dt } = element;
        const day = getDay(dt);
        // If the key forecastPerDay[day]- (the day) exist in object forecastPerDay
        if (forecastPerDay[day] !== undefined) {
          forecastPerDay[day].push(element);
        } else {
          // Daca nu exista cheia forecastPerDay[day], adaug-o cu valuarea unui array cu prima ora(element)
          // Else create a day with value- array
          forecastPerDay[day] = [element];
        }
      });

      for (const key in forecastPerDay) {
        // Display only the day
        weatherForecastSection.innerHTML += `<h3 class="text-primary">${key}</h3>`;
        // Iterate through the value (the array) of the day

        forecastPerDay[key].forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const hours = getHours(dt);
          const iconUrl = getIconUrl(weather[0].icon);
          const temperature = Math.round(main.temp);
          const description = firstLetterToUpperCase(weather[0].description);
          const realFeel = Math.round(main.feels_like);

          weatherForecastSection.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
            <div> ${hours}</div>
            <div><img src="${iconUrl}" /></div>
            <div class="fs-3"> <strong>${temperature}°C</strong></div>
            <p>${description}</p>
            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
            `;
        });
      }
    });
}
