const userInput = document.querySelector("input");
const addButton = document.querySelector("button");
const bookList = document.querySelector("#list");

addButton.addEventListener("click", function() {
  const input = document.querySelector("input").value;  
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  
  li.textContent = input; 
  deleteButton.textContent = "❌";
  
  bookList.appendChild(li);
  bookList.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    li.remove();
    deleteButton.remove();
    document.querySelector("input").focus();
  });
  
  userInput.value = "";
  document.querySelector("input").focus();
});

