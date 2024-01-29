if (typeof(Storage) !== "undefined") {
    var keys = Object.keys(localStorage);

    displayLocalStorageValues();

    function displayLocalStorageValues() {
      var localStorageValues = document.getElementById("localStorageValues");
      localStorageValues.innerHTML = "";

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = localStorage.getItem(key);

        var listItem = document.createElement("li");
        listItem.textContent = key + ": " + value;
        localStorageValues.appendChild(listItem);
      }
    }
  } else {
    document.write("Trình duyệt của bạn không hỗ trợ local storage.");
  }