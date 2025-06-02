# Realtime Weather App

Welcome to **Realtime Weather App**, a simple and responsive web application that displays real-time weather information based on city names around the world. Built using HTML, CSS, and Vanilla JavaScript, this app is lightweight, fast, and easy to deploy.

> 🔗 **Live Demo** : [https://weather-app-js-seven.vercel.app/](https://weather-app-js-seven.vercel.app/)  

---

## 📌 Overview

**Realtime Weather App** allows users to enter a city name and retrieve live weather information including:

- Temperature  
- Humidity  
- Pressure  
- Cloud coverage  

All data is fetched from the [OpenWeatherMap API](https://openweathermap.org/api).

---

## Features

- **Search by City**: Get real-time weather for any city worldwide  
- **Input Validation**: Ensures users enter valid city names  
- **Error Handling**: Shows feedback when API fails or input is invalid  
- **Unit Testing**: Using Bun for fast and lightweight testing  

---

## Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript (ES Modules)  
- [Bun](https://bun.sh/) – for testing & runtime  

---

## Installation & Setup

To run the app locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/weather-app-js.git
   cd weather-app-js

2. **Install Bun (if not installed)**

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Initialize the project**
   If you don’t have `package.json`:

   ```bash
   bun init
   ```

4. **Run the App**
   Just open `index.html` in your browser:

   ```
   file:///your-path/weather-app-js/index.html
   ```

---

## ✅ Running Tests with Bun

To execute tests:

1. Make sure Bun is installed (`bun -v`)
2. From project root, run:

   ```bash
   bun test
   ```

The tests include:

* ✅ Valid API call with real city
* ✅ Invalid fetch handling
* ✅ DOM update verification for weather rendering

---

## 🖼 Screenshots
![Weather App Screenshot](./assets/img/Screenshot%202025-06-03%20010047.png)
```
assets/images/screenshot.png
```

```html
<img src="assets/img/Screenshot 2025-06-03 010047.png" alt="Weather App UI" width="600" />
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a Pull Request

---

## API Reference

* [OpenWeatherMap API](https://openweathermap.org/current)

```

---