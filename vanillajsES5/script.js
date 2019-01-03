//  Code for adding delete option to existing list

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");

var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = removeItem;
}

function removeItem() {
  var element = this.parentElement;
  element.parentNode.removeChild(element);
}

// Create a new list item when clicking on the "Add" button
function newItem() {
  var li = document.createElement("li");
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
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = removeItem;
  }
}