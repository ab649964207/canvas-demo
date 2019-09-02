
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var defaultColor = 'black';
var currentColor = defaultColor;
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
var eraserEnabled = false;

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
    //电脑设备
    canvas.onmousedown = function (event) {
        mouseIsDown = true;
        if (eraserEnabled) {
            return;
        } else {
            var x = event.clientX;
            var y = event.clientY;
            lastPoint = { 'x': x, "y": y }
            drawCircle(x, y, 5)

        }

    }
    canvas.onmousemove = function (event) {

        if (eraserEnabled && mouseIsDown) {
            var x = event.clientX;
            var y = event.clientY;
            var newPoint = { 'x': x, "y": y }
            ctx.clearRect(x - 5, y - 5, 30, 30);
            lastPoint = newPoint;
        } else if (mouseIsDown) {
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

eraser.onclick = function () {
    eraserEnabled = true;
    this.classList.add('active');
    pen.classList.remove('active');
    colors.classList.remove('active');
    clear.classList.remove('active');


}
pen.onclick = function () {
    eraserEnabled = false;
    this.classList.add('active');
    eraser.classList.remove('active');
    colors.classList.add('active');
    clear.classList.remove('active');

}
clear.onclick = function () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    this.classList.add('active');
    eraser.classList.remove('active');
    pen.classList.remove('active');
    colors.classList.remove('active');
}
save.onclick = function () {
    var url = canvas.toDataURL('image/png');
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    name = prompt('输入文件名');

    if (name !== 'null') {
        a.download = name;
        a.target = '_blank';
        a.click()
        
        return
    }
    
}


var currentSelected;    
currentSelected = black;
currentSelected.classList.add('active');

red.onclick = function () {
    currentColor = this.id;
    ctx.fillStyle = currentColor;
    ctx.strokeStyle = currentColor;
    currentSelected.classList.remove('active');
    this.classList.add("active");
    currentSelected = this;
}
green.onclick = function () {
    currentColor = this.id;
    ctx.fillStyle = currentColor;
    ctx.strokeStyle = currentColor;
    currentSelected.classList.remove('active');
    this.classList.add("active");
    currentSelected = this;
}
blue.onclick = function () {
    currentColor = this.id;
    ctx.fillStyle = currentColor;
    ctx.strokeStyle = currentColor;
    currentSelected.classList.remove('active');
    this.classList.add("active");
    currentSelected = this;
}
black.onclick = function () {
    currentColor = this.id;
    ctx.fillStyle = currentColor;
    ctx.strokeStyle = currentColor;
    currentSelected.classList.remove('active');
    this.classList.add("active");
    currentSelected = this;
}





