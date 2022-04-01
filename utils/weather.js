function getIconUrl(code) {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

function transformMpsToKmph(mps) {
  return 3.6 * mps;
}

function firstLetterToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
