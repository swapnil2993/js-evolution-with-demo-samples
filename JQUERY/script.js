// Global declaration of list 
function removeItem() {
  $(this).closest('li').remove()
  toggleEmptyState();
}

function toggleEmptyState() {
  debugger
  if ($("li").length > 0) {
    $('.help').css('display', 'none');
  } else {
    $('.help').css('display', 'block');
  }
}

// Create a new list item when clicking on the "Add" button
function newItem() {
  var newIter = $("li").length + 1;
  var inputValue = $("#todo-input").val();
  if (inputValue === '') {
    alert("For Gods Sake Just type something before adding anything!");
  } else {
    var li = "<li data-delete-id='" + newIter + "'>" + inputValue + "</li>";
    $('#myUL').append(li);
    $("#todo-input").val("");
    var span = "<span class='close'>\u00D7</span>";
    $("[data-delete-id='" + newIter + "']").append(span);
    $('.close').off('click').on('click', removeItem);
  }
  toggleEmptyState()
}