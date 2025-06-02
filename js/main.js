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

const API_KEY = "04d9717542bdbe12532691fb8af1aad8";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!searchValue.value) return;

  try {
    const data = await fetchWeather(url, searchValue.value);

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
  } catch (error) {
    showError(weatherApp);
  } finally {
    searchValue.value = "";
  }
});
