
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

setCanvas()
window.onresize = function () {
    setCanvas()
}
function drawCircle(x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(x1, y1);
    ctx.lineWidth = 10;
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}
function setCanvas() {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}
var mouseIsDown = false;
var lastPoint = { 'x': undefined, 'y': undefined }

if (document.body.ontouchstart !== undefined) {
    //触屏设备
    canvas.ontouchstart = function (event) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        lastPoint = { 'x': x, "y": y }
        drawCircle(x, y, 5)
    }

    canvas.ontouchmove = function (event) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        var newPoint = { 'x': x, "y": y }
        drawCircle(x, y, 5);
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint;
    }
} else {
    canvas.onmousedown = function (event) {
        var x = event.clientX;
        var y = event.clientY;
        lastPoint = { 'x': x, "y": y }
        drawCircle(x, y, 5)
        mouseIsDown = true;
    }
    canvas.onmousemove = function (event) {
        if (mouseIsDown) {
            var x = event.clientX;
            var y = event.clientY;
            var newPoint = { 'x': x, "y": y }
            drawCircle(x, y, 5);
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint;
        }

    }
    canvas.onmouseup = function (event) {
        mouseIsDown = false;
    }
}





