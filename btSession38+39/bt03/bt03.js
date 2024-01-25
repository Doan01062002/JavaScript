window.addEventListener("load", function() {
    var countElement = document.getElementById("count");
    var img = document.getElementById("img");
    img.style.opacity = "1";
  
    var count = 1;
    var duration = 3000; 
    var interval = duration / 100;
  
    function displayCount() {
      countElement.textContent = count + "%";
  
      if (count < 100) {
        count++;
        setTimeout(displayCount, interval);
      }
    }
  
    displayCount();
  });