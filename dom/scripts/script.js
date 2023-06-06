const userInput = document.querySelector("input");
const addChapter = document.querySelector("button");
const bookList = document.querySelector("ul");

addChapter.addEventListener("click", function() {
  const input = document.querySelector("input").value;  
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  li.appendChild(span);
  li.appendChild(button);

  span.textContent = input; 
  button.textContent = "❌";

  bookList.appendChild(li);
  
  userInput.value = "";
  document.querySelector("input").focus();

  button.addEventListener("click", function() {
    li.remove();
    deleteButton.remove();
    document.querySelector("input").focus();
  });
});

