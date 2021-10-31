var lf = document.getElementsByClassName("slide")[0]
var sl = document.getElementsByClassName("sl")[0]
var big = document.getElementsByClassName("big")[0]
console.log(lf, sl, big)
for (var i = 0; i < sl.length; i++) {
    sl[i].index = i
    sl[i].onclick = function () {
        var index = this.index
        for (var j = 0; j < big.length; j++) {
            big[j].style.display = "none"
            console.log(j, index)
        }
        big[index].style.display = "block"
    }
}

var sh = document.getElementsByClassName("shadow")[0]
var box = document.getElementsByClassName("big")[0]
var pic = document.getElementsByClassName("pic")[0]
box.onmouseenter = function () {
    sh.style.display = "block"
}
box.onmouseleave = function () {
    sh.style.display = "none"
    pic.style.display = "none"
}
box.onmousemove = function (event) {
    pic.style.display = "block"
    var e = event
    var oldx = e.clientX - box.parentNode.offsetLeft
    var oldy = e.pageY - box.parentNode.offsetTop
    oldx = oldx - sh.offsetWidth * 0.5
    oldy = oldy - sh.offsetHeight * 0.5
    console.log(oldx,oldy)
    //限制阴影在框内移动
    if (oldx < 0) {
        oldx = 0
    }
    if (oldx > box.offsetWidth - sh.offsetWidth) {
        oldx = box.offsetWidth - sh.offsetWidth
    }
    if (oldy < 0) {
        oldy = 0
    }
    if (oldy > box.offsetHeight - sh.offsetHeight) {
        oldy = box.offsetHeight - sh.offsetHeight
    }
    sh.style.left = oldx + "px"
    sh.style.top = oldy + "px"
    //计算比例的公式(大图宽/高 - 大图盒子宽/高) ÷ (盒子宽/高 - 阴影宽/高)
    var b = (800 - pic.offsetWidth) / (box.offsetWidth - sh.offsetWidth)
    //console.log(b)
    pic.style.backgroundPositionX = oldx * b + "px"
    pic.style.backgroundPositionY = oldy * b + "px"
}