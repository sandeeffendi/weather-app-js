export const renderWeather = (data, dom) => {
  const { city, temperature, pressure, humidity, clouds, description } = dom;

  city.querySelector("figcaption").innerText = data.name;
  city.querySelector(
    "img"
  ).src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
  temperature.querySelector(
    "img"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  pressure.innerText = data.main.pressure;
  humidity.innerText = data.main.humidity;
  clouds.innerText = data.clouds.all;
  temperature.querySelector("span").innerText = `${Math.floor(data.main.temp)}`;
  description.innerText = data.weather[0].description;
};