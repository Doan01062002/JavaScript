var button = document.getElementById("addRowButton");
button.style.height = "50px";
button.style.width = "150px";
button.style.backgroundColor = "blue";
button.style.borderRadius = "10px";

const myTable = document.getElementById("myTable");
const addRowButton = document.getElementById("addRowButton");

function addRow() {
  const newRow = document.createElement("tr");

  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");

  cell1.textContent = "Cell 1";
  cell2.textContent = "Cell 2";
  cell3.textContent = "Cell 3";

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  myTable.appendChild(newRow);
}

addRowButton.addEventListener("click", addRow);

