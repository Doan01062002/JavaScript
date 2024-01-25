window.addEventListener("load", function() {
    var countTwitter = document.getElementById("countTwitter");
    var countYoutube = document.getElementById("countYoutube");
    var countFacebook = document.getElementById("countFacebook");

    countTwitter.style.fontSize = "30px";
    countFacebook.style.fontSize = "30px";
    countYoutube.style.fontSize = "30px";
    countTwitter.style.marginLeft = "30px";
    countFacebook.style.marginLeft = "30px";
    countYoutube.style.marginLeft = "30px";
  
    var countTw = 0;
    var countYo = 0;
    var countFa = 0;
    var duration = 2000; 
    var interval = duration / 100;
  
    function displayCountTwitter() {
      countTwitter.textContent = countTw;
  
      if (countTw < 12000) {
        countTw+= 100;
        setTimeout(displayCountTwitter, interval);
      }
    }

    function displayCountYoutube() {
      countYoutube.textContent = countYo;
  
      if (countYo < 5000) {
        countYo+= 100;
        setTimeout(displayCountYoutube, interval);
      }
    }

    function displayCountFacebook() {
      countFacebook.textContent = countFa;
  
      if (countFa < 7500) {
        countFa+= 100;
        setTimeout(displayCountFacebook, interval);
      }
    }

    displayCountFacebook();
    displayCountYoutube();
    displayCountTwitter();
  });