let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById("item").value;

  // Create a new li
  let li = document.createElement("li");
  // Add Class
  li.className = "list-group-item";
  // Append the text
  li.appendChild(document.createTextNode(newItem));

  // Del btn
  let del = document.createElement("button");

  del.className = "btn btn-danger btn-sm float-right delete";

  del.appendChild(document.createTextNode("X"));

  li.appendChild(del);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
