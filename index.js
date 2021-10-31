var right = document.getElementById("right")
var left = document.getElementById("left")
var banner = document.getElementsByClassName("banner")[0]
var wapper = document.getElementsByClassName("wapper")[0]
var pag = document.getElementsByClassName("pag")[0]
var point = pag.children//获取 pag 的子元素
console.log(point)
var n = 0;
var t;
left.onclick = function () {
    n--
    if (n < 0) {
        n = 3
    }
    move()
}
right.onclick = function () {
    n++
    if (n > 3) {
        n = 0
    }
    move()
}
//自动 ▶️ ⏹
banner.onmouseenter = function () {
    clearInterval(t)
}
left.onmouseenter = function () {
    clearInterval(t)
}
right.onmouseenter = function () {
    clearInterval(t)
}
pag.onmouseenter = function () {
    clearInterval(t)
}
banner.onmouseleave = function () {
    auto()
}
//封装
function auto() {//封装自动播放
    t = setInterval(function () {
        n++
        if (n > 3) {
            n = 0
        }
        move()
    }, 2000)
}
function move() {//封装图和点的移动
    wapper.style.left = -985 * n + "px"
    for (var i = 0; i < point.length; i++) {
        point[i].className = ""
    }
    point[n].className = "point"
}
//圆点切换图
for (var i = 0; i < point.length; i++) {
    point[i].index = i
    point[i].onclick = function () {
        for (var j = 0; j < point.length; j++) {
            point[j].className = ""
        }
        n = this.index
        this.className = "point"
        wapper.style.left = -985 * n + "px"
    }
}