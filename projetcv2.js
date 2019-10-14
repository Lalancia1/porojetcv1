alert("hello!");
function start() {
    var idListeyy = document.getElementById("listeyy").classList.add("laClassListeyy");
   /* var idlaDivDuClick = document.getElementById("liste2");*/

    interId = setInterval(function () {
        if (idListeyy.style.opacity === 0) {
            idListeyy.style.opacity = 0.1;
            idListeyy.style.animation = "formation 7s ease";
        }
        if (idListeyy.style.opacity > 0) {
            idListeyy.style.opacity = 1;
            idListeyy.style.animation = "formation 7s ease";

        } else {
            clearInterval(interId);
        }
    }, 200);
}