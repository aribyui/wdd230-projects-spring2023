const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,units=imperial,&appid=93ad6ff91162822dfb00dcdea498e2c2"; 

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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  // JavaScript Capitalize First Letter: How to make strings and arrays sentence case
  let capitalizeFirstWordEachLetter = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
  const letters = desc.split(" ").map(capitalizeFirstWordEachLetter);
  const capitalizeLetters = letters.join(" ");  
  captionDesc.textContent = capitalizeLetters;
}