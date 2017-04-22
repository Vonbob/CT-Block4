var maxX = window.innerWidth - 140;
var maxY = window.innerHeight - 50;

var bgColors = ["#2ecc71", "#1abc9c", "#3498db", "#9b59b6", "#34495e", "#f1c40f",
    "#e67e22", "#e74c3c", "#7f8c8d", "#f39c12", "#d35400", "#16a085",
    "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"];

var dreamElems = document.getElementsByClassName("dream");

var showHideDream = function () {
    var i = 0;
    var useColors = bgColors.slice();
    for (; i < dreamElems.length; ++i) {
        var el = dreamElems[i];

        var x = Math.floor(Math.random() * maxX);
        var y = Math.floor(Math.random() * maxY);

        var colorIndex = Math.floor(Math.random() * useColors.length);
        var color = useColors[colorIndex];
        useColors.splice(colorIndex, 1);
        if (useColors.length == 0)
            useColors = bgColors.slice();

        el.style.top = y + "px";
        el.style.left = x + "px";
        el.style.backgroundColor = color;
    }
};

showHideDream();
setInterval(showHideDream, 6000);