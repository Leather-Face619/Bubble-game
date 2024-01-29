var bubble = "";
var time = 60;
var hit = 5;
var score = 0;
function bubbleBanaoBC() {
    for (var i = 1; i <= 190; i++) {
        var mt = Math.floor(Math.random() * 20);
        bubble += `<div class="bubble">${mt}</div>`

    }
    document.querySelector("#pbtm").innerHTML = bubble;
    bubble = "";
}
function clockHuMai() {
    var timeup = setInterval(function () {
        time--;
        if (time >= 0) {
            document.querySelector("#tt").textContent = time;
        }
        else {
            clearInterval(timeup);
            document.querySelector("#pbtm").innerHTML=  `<h1>Game over😉👌score = ${score}</h1>`
        }

    }, 1000)
}
function hitHuMai() {
    hit = Math.floor(Math.random() * 20);
    document.querySelector("#hit").textContent = hit;
}
function scored() {
    score += 10;
    document.querySelector("#sc").innerHTML = score;
}
document.querySelector("#pbtm").addEventListener("click", function (fnum) {
    var fn = Number(fnum.target.textContent);
    if (fn == hit) {
        scored();
       

    }
    
        hitHuMai();
        bubbleBanaoBC();
    
});

hitHuMai();
clockHuMai();
bubbleBanaoBC();

