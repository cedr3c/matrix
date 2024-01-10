//meinText für Schreibmaschineneffekt
//text für chinesische Zeichen Effekt

/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.document = new JSDOM().window.document;
*/

function red() {
  var elements = document.getElementsByClassName("color");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
  localStorage.setItem("farbe", "red"); // Speichere die Farbe im localStorage
}

function blue() {
  var elements = document.getElementsByClassName("color");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
  }
  localStorage.setItem("farbe", "blue"); // Speichere die Farbe im localStorage
}

function green() {
  var elements = document.getElementsByClassName("color");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#32CD32";
  }
  localStorage.setItem("farbe", "#32CD32"); // Speichere die Farbe im localStorage
}

function violet() {
  var elements = document.getElementsByClassName("color");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "#9900ff";
  }
  localStorage.setItem("farbe", "#9900ff"); // Speichere die Farbe im localStorage
}

fetch("version.txt")
  .then((response) => response.text())
  .then((data) => {
    let elements = document.getElementsByClassName("version");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "Version    " + data;
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function updateTime() {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //document.getElementById('date').innerHTML = date;
  //document.getElementById('time').innerHTML = time;
  document.getElementById("date1").innerHTML = date;
  document.getElementById("time1").innerHTML = time;
}

// Aktualisieren Sie die Zeit und das Datum jede Sekunde
setInterval(updateTime, 1000);

//document.onload = function() {
//(function() {

/*var scrambleElements = document.getElementsByClassName("scramble");
for (var i = 0; i < scrambleElements.length; i++) {
  scrambleText(scrambleElements[i]);
}

function scrambleText(textElement) {
  var originalText = textElement.textContent;
  var i = 0;
  var intervalId;
  textElement.onmouseover = function () {
    clearInterval(intervalId);
    textElement.textContent = originalText;
  };
  textElement.onmouseout = function () {
    i = 0;
    intervalId = setInterval(function () {
      if (i < originalText.length) {
        textElement.textContent =
          textElement.textContent.substring(0, i) +
          String.fromCharCode(0x4e00 + Math.random() * (0x9fff - 0x4e00)) +
          textElement.textContent.substring(i + 1);
        i++;
        if (i === originalText.length) {
          i = 0;
        }
      }
    }, 1); // Zeit in Millisekunden einstellen
  };
  textElement.onmouseout();*/


  document.addEventListener("DOMContentLoaded", function() {
    var scrambleElements = document.getElementsByClassName("scramble");
    for (var i = 0; i < scrambleElements.length; i++) {
      scrambleText(scrambleElements[i]);
    }
  });
  
  function scrambleText(scrambleElement) {
    var originalText = scrambleElement.textContent;
    var i = 0;
    var intervalId;
    scrambleElement.onmouseover = function () {
      clearInterval(intervalId);
      scrambleElement.textContent = originalText;
    };
    scrambleElement.onmouseout = function () {
      i = 0;
      intervalId = setInterval(function () {
        if (i < originalText.length) {
          scrambleElement.textContent =
            scrambleElement.textContent.substring(0, i) +
            String.fromCharCode(0x4e00 + Math.random() * (0x9fff - 0x4e00)) +
            scrambleElement.textContent.substring(i + 1);
          i++;
          if (i === originalText.length) {
            i = 0;
          }
        }
      }, 1); // Zeit in Millisekunden einstellen
    };
    scrambleElement.onmouseout();
  }
  
  

  //Objekte mir der Class Close werden geschlossen beim Klicken
  var closeElements = document.getElementsByClassName("close");
  for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function () {
      window.close();
    });
  }

  // Farbwechsel
  var gespeicherteFarbe = localStorage.getItem("farbe"); // Lade die gespeicherte Farbe
  if (gespeicherteFarbe) {
    var elements = document.getElementsByClassName("color");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = gespeicherteFarbe;
    }
    var elements = document.getElementsByClassName("if");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = gespeicherteFarbe;
      elements[i].style.borderColor = gespeicherteFarbe;
    }
    var elements = document.getElementsByClassName("senden");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = gespeicherteFarbe;
    }
    var elements = document.getElementsByClassName("uploadbtn");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = gespeicherteFarbe;
    }
  }

  // Schreibmaschinen-Effekt1
  var text =
    "Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte.";
  var i = 0;
  function schreibmaschinenEffekt() {
    if (i < text.length) {
      document.getElementById("aa").innerHTML = text.substr(0, i + 1);
      i++;
      setTimeout(schreibmaschinenEffekt, 10); // Wartezeit in Millisekunden
    }
  }
  schreibmaschinenEffekt();

  // Schreibmaschinen-Effekt2
  var text2 =
    "Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte. Hier sind Informationen über diese Webseite ganz wichtige Inforamtionen, welche man sich nicht entgehen lassen sollte.";
  var i = 0;
  function schreibmaschinenEffekt2() {
    if (i < text2.length) {
      document.getElementById("ab").innerHTML = text2.substr(0, i + 1);
      i++;
      setTimeout(schreibmaschinenEffekt2, 10); // Wartezeit in Millisekunden
    }
  }
  schreibmaschinenEffekt2();

  // Scramble Text
  var texts = document.getElementsByClassName("text");
  for (var j = 0; j < texts.length; j++) {
    scrambleText(texts[j]);
  }
//}
//})();

//Class Color ist das man die Farbe bei Settings ändern kann

//ID Close macht es so das beim Klicken die Seite geschlossen wird

//date zeigt Datum

//time zeigt Zeit

//Objkete mit der Klasse Version werden die Version anzeigen

/*



*/


function closebtn() {
  window.close();
  window.location.href = "https://www.google.com";
}