var editButtons = document.getElementsByClassName("editButton");
    var editInput = document.getElementById("editInput");
    var editItemButton = document.getElementById("editItemButton");

    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", editItem);
    }

    function editItem() {
      var td = this.parentNode;
      var tr = td.parentNode;
      var name = tr.getElementsByTagName("td")[1].textContent;
      editInput.value = name;
    }

    editItemButton.addEventListener("click", updateItem);

    function updateItem() {
      var selectedRow = document.querySelector("tr.selected");
      if (selectedRow) {
        selectedRow.getElementsByTagName("td")[1].textContent = editInput.value;
        selectedRow.classList.remove("selected");
        editInput.value = "";
      }
    }

    var tableRows = document.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
      tableRows[i].addEventListener("click", function() {
        var selected = document.querySelector("tr.selected");
        if (selected) {
          selected.classList.remove("selected");
        }
        this.classList.add("selected");
      });
    }