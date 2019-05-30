var left = 400;
var tops = 400;
var leftspeed = 1;
var topspeed = 1;
var x = 1;
var key_press;
var mousex = 0;
var mousey = 0;
var win = true;
var buttn;
var dif;
var buttn1;
var buttn2;
var box;
let name;

function start() {
    buttn = document.getElementById("bu");
    dif = document.getElementById('dd');
    dif.innerHTML = 'the difficulty level is ' + leftspeed;
    buttn1 = document.getElementById("incress");
    buttn2 = document.getElementById("incress");
    box = document.getElementById('checkbo');

    buttn.addEventListener('click', startGame, false);
}

function startGame() {
    buttn.style.display = "none";
    buttn1.style.display = "none";
    buttn2.style.display = "none";
    if (win)
        window.setInterval('doit()', 1);
    window.setInterval(function () {
        if (win) {
            x++;
            document.getElementById('corr').innerHTML = "your score: " + x;
        } else {

        }
    }, 10);

}

function doit() {
    if (win) {
        var cube = document.getElementById('cube');
        var bordertop = document.getElementById('border');

        cube.setAttribute('style', 'left:' + left + 'px;top:' + tops + 'px;');

        bordertop.onmousemove = function h(e) {
            mousex = e.clientX;
            mousey = e.clientY;
        };


        if (box.checked == true) {
            console.log("checked")
            if (x % 500 == 0) {
                console.log(x)
                leftspeed += 0.5
                topspeed += 0.5
                dif.innerHTML = 'the difficulty level is ' + leftspeed;

            }
        }
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
    }
    if (mousex < left + 80 && mousex > left && mousey < tops + 80 && mousey > tops || mousex > 600 || mousey > 800) {
        var co = document.getElementById('cor');
        co.innerHTML = "YOU LOST! <br>Enter any key to restart</br>";
        document.body.style.backgroundColor = "black";
        win = false;
    }
    key_press = 0;
    // console.log("MX = " + mousex);
    // console.log("MY = " + mousey);
    // console.log("top = " + tops);
    // console.log("left = " + left);


}

function showUser() {
    name = document.getElementById("nameof").value;
    console.log("the name is " + name);
    if (name == "") {
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("corr").innerHTML = this.responseText;
            }
        };

        xmlhttp.open("GET", "Database.php?name=" + name+"&score="+x+"&level="+leftspeed, true);
        xmlhttp.send();
        document.location.href = "";
    }
}

function incres() {
    leftspeed++;
    topspeed++;
    dif.innerHTML = 'the difficulty level is ' + leftspeed;
}

function decress() {
    if (leftspeed > 1 && topspeed > 1) {
        leftspeed--;
        topspeed--;
        dif.innerHTML = 'the difficulty level is ' + leftspeed;
    }
}

window.addEventListener('load', start, false);