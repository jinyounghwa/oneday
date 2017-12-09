

window.onload = window.onresize = function(){
    var box = document.getElementById("elem");
    var style = window.getComputedStyle(box,null);
    
    var height = parseInt(style.getPropertyValue("height"));
    var width = parseInt(style.getPropertyValue("width"));

    var x = width / 2;
    var y = height / 2;

    var circleRadius = Math.min(width,height) / 2;

    var circ = document.getElementById("circ");
    circ.setAttribute("r",circleRadius);
    circ.setAttribute("cx",x);
    circ.setAttribute("cy",y);;
}