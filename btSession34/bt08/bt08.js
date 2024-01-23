var deleteButtons = document.getElementsByClassName("deleteButton");

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteRow);
}

function deleteRow() {
  var td = this.parentNode;
  var tr = td.parentNode;
  var tbody = tr.parentNode;
  tbody.removeChild(tr);
}