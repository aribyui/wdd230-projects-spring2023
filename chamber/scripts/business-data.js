const url = "json/data.json";

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.business);
  displayBusiness(data.business);
}

getBusinessData();

const displayBusiness = (businessList) => {
  const cards = document.querySelector(".grid"); // select the output container element

  businessList.forEach((element) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");
    let p3 = document.createElement("p");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the business name
    h2.textContent = `${element.name}`;
    p1.textContent = `${element.address}`;
    p2.textContent = `${element.phone}`;
    a.textContent = `${element.url}`;
    p3.textContent = `${element.membershipLevel}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", element.image);
    portrait.setAttribute("alt", `${element.name} logo`)
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "160");
    portrait.setAttribute("height", "160");
    // Adding 'href' attribute to the 'a' elelment
    a.setAttribute("href", `${element.url}`);
    // a.setAttribute("style", "font-weight:700;");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
    card.appendChild(p3);

    cards.appendChild(card);

    // cards.setAttribute("class", "grid");
  }); // end of forEach loop
}; // end of function expression

// layout view selection
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
gridButton.addEventListener("click", () => {
  //example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
