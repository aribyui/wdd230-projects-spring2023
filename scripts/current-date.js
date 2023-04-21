const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d1 = new Date();
const dayname = daynames[d1.getDay()];
const monthname = months[d1.getMonth()];
const year = d1.getFullYear();
document.querySelector("#year").textContent = year;

let lastmodified = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = lastmodified;
