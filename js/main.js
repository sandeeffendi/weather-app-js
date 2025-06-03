import {
  searchValue,
  city,
  temperature,
  description,
  clouds,
  humidity,
  pressure,
  weatherApp,
  form,
} from "./modules/domRefs.js";

import { fetchWeather } from "./modules/fetchWeather.js";
import { renderWeather } from "./modules/renderWeather.js";
import { showError } from "./modules/handleError.js";
import { renderHourlyForecast } from "./modules/renderHourlyForecast.js";
import { fetchHourlyForecast } from "./modules/fetchHourlyForecast.js";

const API_KEY = "80e3a26da5e62f9ef329644062374f3e";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!searchValue.value) return;

  try {
    const data = await fetchWeather(url, searchValue.value);
    const forecastData = await fetchHourlyForecast(
      forecastUrl,
      searchValue.value
    );

    if (data.cod == 200) {
      renderWeather(data, {
        city,
        temperature,
        description,
        pressure,
        humidity,
        clouds,
      });
    } else {
      showError(weatherApp);
    }

    if (data.cod == 200) {
      renderHourlyForecast(forecastData);
    } else {
      showError(weatherApp);
    }
  } catch (error) {
    showError(weatherApp);
  } finally {
    searchValue.value = "";
  }
});
