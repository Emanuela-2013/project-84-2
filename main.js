var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img_width = 300;
var img_height = 100;
var img_x = 100;
var img_y = 100;

function add(img_image) {
    var img_imgTag = new Image();
    img_imgTag.onload = function () {
        ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
    };
    img_imgTag.src = img_image;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
        alphabetkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED AN ALPHABET KEY";
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key";
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an arrow key";
    } else if (keyPressed == 17 || keyPressed == 18 || keyPressed == 27) {
        specialkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED A SPECIAL KEY";
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "you pressed an other key";
    }
}
function alphabetkey() {
    document.getElementById("alphabetKeyImage").src = "Alpkey.png";
    var img_image = "Alpkey.png";
    add(img_image);
}

function numberkey() {
    document.getElementById("numberKeyImage").src = "numkey.png";
    var img_image = "numkey.png";
    add(img_image);
}

function arrowkey() {
    document.getElementById("arrowKeyImage").src = "Arrkey.png";
    var img_image = "Arrkey.png";
    add(img_image);
}

function specialkey(){
    document.getElementById("specialKeyImage").src = "spkey.png";
    var img_image = "spkey.png";
    add(img_image);
}

function otherkey() {
    document.getElementById("otherKeyImage").src = "otherkey.png";
    var img_image = "otherkey.png";
    add(img_image);
}



