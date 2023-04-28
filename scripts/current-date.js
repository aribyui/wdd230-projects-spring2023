const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();

document.querySelector("#year").textContent = year;
document.querySelector("#date-hour").textContent = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;