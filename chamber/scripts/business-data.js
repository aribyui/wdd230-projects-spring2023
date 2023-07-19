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
    // let membership = document.createElement("p");
    let address = document.createElement("p")
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the business name
    h2.innerHTML= `${element.name}<br><p>${element.membershipLevel}<p>`;
    // membership.textContent = `${element.membershipLevel}`;
    address.innerHTML = `${element.address.avenue}<br>${element.address.neighborhood}`;
    phone.textContent = `${element.phone}`;
    url.textContent = `${element.url}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", element.image);
    portrait.setAttribute("alt", `${element.name} logo`)
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "160");
    portrait.setAttribute("height", "160");

    // Adding 'class' attribute to some elements
    h2.setAttribute("class", "business-grid")
    address.setAttribute("class", "address-grid")
    url.setAttribute("class", "url-grid");
    phone.setAttribute("class", "phone-grid");
    // membership.setAttribute("class", "membership-grid")

    // Adding 'href' attribute to the 'a' elelment
    url.setAttribute("href", `${element.url}`);    

    // Append the section(card) with the created elements
    card.appendChild(h2);
    // card.appendChild(membership);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);

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
