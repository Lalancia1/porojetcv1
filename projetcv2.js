alert("hello!");
var idListeYY = document.getElementById('listeYY');
var idlaDivDuClick = document.getElementById('liste2');
function start() {
    var idListeYY = document.getElementById('listeYY');

  var  interId = setInterval(function (){
          idListeYY.style.visibility='visible';
          idListeYY.display.animation='formation ease 7s';
      }
,200);}
