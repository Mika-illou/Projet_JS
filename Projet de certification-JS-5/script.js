async function getWeather(city) {
  try {
    const response = await fetch(
      "https://weather-proxy.freecodecamp.rocks/api/city/" + city
    );
    if (!response.ok) {
      throw new Error("Erreur HTTP " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// undefined -> "N/A", null -> 0
function formatValue(value, unit) {
  if (value === undefined) return "N/A";
  if (value === null) return "0";
  return value + (unit || "");
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data || typeof data !== "object" || data.err) {
    alert("Something went wrong, please try again later");
    return;
  }

  const weather = data.weather && data.weather[0] ? data.weather[0] : {};
  const main = data.main || {};
  const windData = data.wind || {};

  const icon = document.getElementById("weather-icon");
  if (weather.icon) {
    icon.src = weather.icon;
  } else {
    icon.removeAttribute("src");
  }

  document.getElementById("weather-main").textContent = formatValue(weather.main);
  document.getElementById("main-temperature").textContent = formatValue(main.temp, " °C");
  document.getElementById("feels-like").textContent = formatValue(main.feels_like, " °C");
  document.getElementById("humidity").textContent = formatValue(main.humidity, " %");
  document.getElementById("wind").textContent = formatValue(windData.speed, " m/s");
  document.getElementById("wind-gust").textContent = formatValue(windData.gust, " m/s");
  document.getElementById("location").textContent = formatValue(data.name);

  document.getElementById("weather-content").classList.remove("hidden");
}

document.getElementById("get-weather-btn").addEventListener("click", function () {
  const city = document.getElementById("city-select").value;
  if (!city) return;
  showWeather(city);
});
