import { hourlyForecast } from "./domRefs.js";

export const renderHourlyForecast = (data) => {
  const container = hourlyForecast;
  container.innerHTML = "";
  let hourlyItemHtml = "";

  const data24hours = data.slice(0, 8);

  data24hours.forEach((item) => {
    const dateTime = new Date(item.dt * 1000);
    const hour = dateTime.getHours();
    const temperature = Math.round(item.main.temp);
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    hourlyItemHtml += `
        <figure class="hourly-item">
          <figcaption>
            <span>${hour}</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}</span>
            <sup>o</sup>
          </figcaption>
        </figure>
    `;
  });
  container.innerHTML = hourlyItemHtml;
};
