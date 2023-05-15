const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const seconds = d.getSeconds();



document.querySelector(".base-footer").innerHTML = `<p>&copy;${year} Nuevo León Chamber | Lizandro Arizpe | WDD 230 Project | Last Modification: ${day}/${month}/${year} ${hour}:${minute}:${seconds}</p>`;