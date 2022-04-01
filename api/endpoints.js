const API_KEY = "8a41e477cb0ee59409a6b87db08183aa";

// Endpoints
// Query params: lang=ro & units=metric
function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
