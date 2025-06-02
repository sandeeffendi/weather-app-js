import { describe, it, expect } from "bun:test";
import { fetchWeather } from "../js/modules/fetchWeather.js";
import { renderWeather } from "../js/modules/renderWeather.js";

// Mock DOM
const figcaption = { innerText: "" };
const cityImg = { src: "" };

const city = {
  querySelector: (selector) => {
    if (selector === "figcaption") return figcaption;
    if (selector === "img") return cityImg;
    return null;
  },
};

const tempImg = { src: "" };
const tempSpan = { innerText: "" };

const temperature = {
  querySelector: (selector) => {
    if (selector === "img") return tempImg;
    if (selector === "span") return tempSpan;
    return null;
  },
};

const description = { innerText: "" };
const pressure = { innerText: "" };
const humidity = { innerText: "" };
const clouds = { innerText: "" };

const mockDom = { city, temperature, description, pressure, humidity, clouds };

describe("fetchWeather", () => {
  it("should return weather data for a valid city", async () => {
    const API_KEY = "04d9717542bdbe12532691fb8af1aad8";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

    // Test Calling the API
    const data = await fetchWeather(url, "Jakarta");

    expect(data).toHaveProperty("cod", 200);
    expect(data).toHaveProperty("name", "Jakarta");
  });

  it("should throw error on invalid fetch", async () => {
    // Error Handling
    await expect(
      fetchWeather("https://invalid-url.test", "test")
    ).rejects.toThrow();
  });
});

describe("renderWeather", () => {
  it("should update DOM elements with weather data", () => {
    const data = {
      name: "Test City",
      sys: { country: "TC" },
      weather: [{ icon: "01d", description: "Clear sky" }],
      main: { pressure: 1015, humidity: 55, temp: 25 },
      clouds: { all: 10 },
    };

    renderWeather(data, mockDom);

    // Checking DOM Element
    expect(mockDom.city.querySelector("figcaption").innerText).toBe(
      "Test City"
    );
    expect(mockDom.city.querySelector("img").src).toContain("TC");
    expect(mockDom.temperature.querySelector("img").src).toContain("01d");
    expect(mockDom.pressure.innerText).toBe(1015);
    expect(mockDom.humidity.innerText).toBe(55);
    expect(mockDom.clouds.innerText).toBe(10);
    expect(mockDom.description.innerText).toBe("Clear sky");
    expect(mockDom.temperature.querySelector("span").innerText).toBe("25");
  });
});
