if (typeof(Storage) !== "undefined") {
  var players = JSON.parse(localStorage.getItem("players"));

  if (players === null) {
    players = {};
  }

  displayPlayers();

  function addPlayer() {
    var playerName = document.getElementById("playerNameInput").value;

    var playerId = Math.floor(Math.random() * 1000000);

    players[playerId] = playerName;

    localStorage.setItem("players", JSON.stringify(players));

    displayPlayers();

    document.getElementById("playerNameInput").value = "";
  }

  function deletePlayer() {
    var playerId = parseInt(document.getElementById("playerIdInput").value);

    delete players[playerId];

    localStorage.setItem("players", JSON.stringify(players));

    displayPlayers();

    document.getElementById("playerIdInput").value = "";
  }

  function displayPlayers() {
    var playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    for (var playerId in players) {
      var playerName = players[playerId];
      var listItem = document.createElement("li");
      listItem.textContent = playerName;
      playerList.appendChild(listItem);
    }
  }
} else {
  document.write("Trình duyệt của bạn không hỗ trợ local storage.");
}