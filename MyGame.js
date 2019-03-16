var left = 400;
var tops = 400;
var leftspeed=1;
var topspeed=1;
var x = 0;
var key_press;
var mousex = 0;
var mousey =0;
var win = true;
var buttn;
var dif;
var buttn1;
var buttn2;
function start() {
    buttn =document.getElementById("bu");
    dif = document.getElementById('dd');
    dif.innerHTML='the difficulty level is '+ leftspeed;
    buttn1 =document.getElementById("incress");
    buttn2 =document.getElementById("incress");
    document.onkeydown = function (e) {
        key_press = e.code;
        console.log(key_press);
        if(key_press == "Space"){
            document.location.href = ""
        }
    };

    buttn.addEventListener('click',startGame,false);


}
function startGame() {
    buttn.style.display="none";
    buttn1.style.display="none";
    buttn2.style.display="none";
    if(win)
        window.setInterval('doit()', 1);

}
function doit() {
    var cube = document.getElementById('cube');
    var bordertop = document.getElementById('border');

    cube.setAttribute('style', 'left:' + left + 'px;top:' + tops + 'px;');


    bordertop.onmousemove = function h(e) {
        mousex = e.clientX;
        mousey = e.clientY;
    };
    if (tops + 40 > mousey) {
        tops -= topspeed;
    }
    if (tops + 40 < mousey) {
        tops += topspeed;
    }
    if (left + 40 < mousex) {
        left += leftspeed;
    }
    if (left + 40 > mousex) {
        left -= leftspeed;
    }
    if (mousex < left + 80 && mousex > left && mousey < tops + 80 && mousey > tops) {
        var co = document.getElementById('cor');
        co.innerHTML = "YOU LOST!"
        document.body.style.backgroundColor="black";
        win = false;
    }
    key_press = 0;
    console.log("MX = " + mousex);
    console.log("MY = " + mousey);
    console.log("top = " + tops);
    console.log("left = " + left);
    window.setInterval(function () {
        if (win) {
        document.getElementById('corr').innerHTML = "your score: " + x/1000;
        x++;}
    }, 1000);

}
function incres(){
    leftspeed++;
    topspeed++;
    dif.innerHTML='the difficulty level is '+ leftspeed;
}
function decress() {
    if(leftspeed>1&&topspeed>1) {
        leftspeed--;
        topspeed--;
        dif.innerHTML = 'the difficulty level is ' + leftspeed;
    }
}
window.addEventListener('load',start,false);