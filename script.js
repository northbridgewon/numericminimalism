var canvas = document.getElementById('staticBackground');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var haikuDiv = document.getElementById("haiku");
    haikuDiv.style.top = window.innerHeight / 2 + "px";
    haikuDiv.style.left = window.innerWidth / 2 + "px";
};
