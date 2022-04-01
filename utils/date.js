function getHours(utc) {
  let date = new Date(utc * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}

function getDay(utc) {
  let date = new Date(utc * 1000);
  let dayIndex = date.getDay();
  let day;
  switch (dayIndex) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }

  return day;
}
