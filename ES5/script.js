// Global declaration of list 
var myNodelist = document.getElementsByTagName("li");

function removeItem(i) {
  var element = document.querySelectorAll("[data-delete-id=" + "'" + i + "'" + "]")[0];
  element.parentNode.removeChild(element);
  toggleEmptyState()
}

function toggleEmptyState() {
  var element = document.getElementsByClassName('help')[0];
  if (myNodelist.length > 0) {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

// Create a new list item when clicking on the "Add" button
function newItem() {
  var newIter = myNodelist.length + 1;
  var li = document.createElement("li");
  li.setAttribute('data-delete-id', newIter)
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("For Gods Sake Just type something before adding anything!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("todo-input").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = removeItem.bind(null, newIter);
  li.appendChild(span);
  toggleEmptyState()
}