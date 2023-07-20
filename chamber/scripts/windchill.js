const currentTemperature = document.querySelector("#current-temperature");
const currentCondition = document.querySelector("#current-condition");
const weatherIcon = document.querySelector("#weather-icon");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Monterrey&units=imperial&appid=93ad6ff91162822dfb00dcdea498e2c2";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemperature.innerHTML = `${weatherData.main.temp.toFixed(0)}&deg;F`;
  windSpeed.innerHTML = weatherData.wind.speed;
  
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const temp = weatherData.main.temp.toFixed(0);
  const speed = weatherData.wind.speed.toFixed(0);
  
 
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  // JavaScript Capitalize First Letter: How to make strings and arrays sentence case
  let capitalizeFirstWordEachLetter = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
  const letters = desc.split(" ").map(capitalizeFirstWordEachLetter);
  const capitalizeLetters = letters.join(" ");
  currentCondition.innerHTML = capitalizeLetters;

  computeWindChill(temp, speed);
}


function computeWindChill(t, s) {

  if (t <= 50 && s > 3){
    const f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * s ** 0.16);
    windChill.innerHTML = parseInt(f);
  }  else {
    windChill.innerHTML = `N/A`;
  }
}







