export const fetchHourlyForecast = async (url, query) => {
  try {
    const response = await fetch(`${url}&q=${query}`);
    const data = await response.json();
    console.log(data);
    return data.list;
  } catch (error) {
    throw new Error("Fething forecast data failed");
  }
};
