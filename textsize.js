var standartSize = 15;
function zoomIn(){
    standartSize = standartSize + 1;
     document.getElementById("metin").style.fontSize = standartSize + "px";
}
//with ES6
var zoomOut = () => {
    standartSize = standartSize - 1;
     document.getElementById("metin").style.fontSize = standartSize  + "px";
}