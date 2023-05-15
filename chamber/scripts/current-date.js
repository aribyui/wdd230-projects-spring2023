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
const month = d.getMonth() + 1;
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const fulldate = `${dayName}, ${day} ${monthName} ${year}`;

document.querySelector(".current-date").textContent = fulldate;
document.querySelector("#year").textContent = year;
document.querySelector("#last-modification").textContent = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;