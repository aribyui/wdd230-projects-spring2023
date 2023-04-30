const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const hour = d.getHours();
const minutes = d.getDate();
const seconds = d.getSeconds();

document.querySelector("#year").textContent = year;
document.querySelector("#date").textContent = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;