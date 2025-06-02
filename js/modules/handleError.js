export const showError = (weatherApp) => {
  weatherApp.classList.add("error");
  setTimeout(() => {
    weatherApp.classList.remove("error");
  }, 300);
};
