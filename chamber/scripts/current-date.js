const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const d = new Date();
const day = d.getDate();
const dayOftheWeek = d.getDay();
const month = d.getMonth() + 1;
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const fulldate = `<p>${dayName}, ${day} ${monthName} ${year}<p>`;

document.querySelector("#date").innerHTML = fulldate;
document.getElementById("last-info").innerHTML = `<p>&copy;${year} Nuevo León Chamber | <span id="name">Lizandro Arizpe</span> | WDD 230 Project | Last Modification: ${day}/${month}/${year} ${hour}:${minutes}:${seconds}</p>`

// banner
const bannerElement = document.getElementById("banner");
if (dayOftheWeek === 1 || dayOftheWeek === 2) {
  bannerElement.style.display = "block";
}