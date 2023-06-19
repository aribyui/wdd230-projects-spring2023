const t = 104; //92
const s = 2; //2

const temperature = document.getElementById("temperature").textContent = `${t}°F`;
const windSpeed = document.getElementById("wind-speed").textContent = `${s} mph`;
const windChill = document.getElementById("wind-chill");

computeWindChill(t, s);

function computeWindChill(t, s) {

  if (t <= 50 && s > 3){
    const f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * s ** 0.16);
    windChill.textContent = parseInt(f);
  }  else {
    windChill.textContent = `N/A`;
  }
 
}







