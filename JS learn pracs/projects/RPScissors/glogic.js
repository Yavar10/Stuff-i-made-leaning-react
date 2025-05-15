let cc = document.getElementById("cc");
let yc = document.getElementById("yc");
let r = document.getElementById("r");
var y;

// Load the losing sound
let loseSound = new Audio("losing-horn-313723.mp3"); // Make sure the file is in the same directory
let win=new Audio("win.mp3");

document.querySelector("#cont").addEventListener("click", function (e) {
    y = e.target.getAttribute("id");
    yc.innerText = y;
    gen();
});

function gen() {
    var c = Math.random();
    console.log(c);

    if (c > 0.66) {
        cc.innerText = "Rock";
        if (y == "Paper") {
            r.innerText = "You Won";
            win.play();
        } else if (y == "Scissors") {
            r.innerText = "You Lost";
            loseSound.play(); // Play sound when losing
        } else {
            r.innerText = "Draw";
        }
    } else if (c < 0.66 && c > 0.33) {
        cc.innerText = "Paper";
        if (y == "Scissors") {
            r.innerText = "You Won";
            win.play();
        } else if (y == "Rock") {
            r.innerText = "You Lost";
            loseSound.play(); // Play sound when losing
        } else {
            r.innerText = "Draw";
        }
    } else {
        cc.innerText = "Scissors";
        if (y == "Rock") {
            r.innerText = "You Won";
            win.play();
        } else if (y == "Paper") {
            r.innerText = "You Lost";
            loseSound.play(); // Play sound when losing
        } else {
            r.innerText = "Draw";
        }
    }
}
