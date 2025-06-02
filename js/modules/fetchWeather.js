export const fetchWeather = async (url, query) => {
  try {
    const response = await fetch(`${url}&q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetch API gagal");
  }
};
