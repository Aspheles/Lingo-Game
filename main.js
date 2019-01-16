// Design website

// page wrap
var pagewrap = document.createElement("div");
pagewrap.id = "page-wrap";
document.body.append(pagewrap);

// main

var main = document.createElement("div");
main.setAttribute("class", "main");
pagewrap.append(main);

// wrapper


var wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");
main.append(wrapper);


// header

var header = document.createElement("div");
header.setAttribute("class", "header");
wrapper.append(header);

// logo

var logo = document.createElement("img");
logo.setAttribute("src", "images/logo.png");
header.append(logo)
logo.id = "logo";

// grid layout

var four = document.createElement("div");
four.setAttribute("class", "four");
wrapper.append(four);

var container = document.createElement("div");
container.setAttribute("id", "container");
four.append(container);


var body = document.body;


// removing the game
container.style.display = "none";
four.style.display = "none";
header.style.display = "none";

// buttons

var startGame = document.createElement("div");
startGame.setAttribute("class", "starting");
wrapper.append(startGame);


// start screen

var startbutton = document.createElement("button");
startbutton.setAttribute("class", "button");
startGame.append(startbutton);
startbutton.innerHTML = "Start";

// var options = document.createElement("button");
// options.setAttribute("class", "button");
// startGame.append(options);
// options.innerHTML = "Options";



// starting game


startbutton.onclick = createUI;



// gets the word from the lingo script
var number = Math.floor(Math.random() * words.length) + 1;
var theword = words[number];
var split = theword.split("");
var copysplit = theword.split("");

// create the squares and giving attributes

var countFocus = 1;
var countInput = 0;
var row = 1;
var attempt = 0;
gameOverr = false;
win = false;

function createUI() {
    body.style.backgroundColor = "#af274e";
    startGame.style.display = "none";
    startbutton.style.display = "none";
    options.style.display = "none";
    container.style.display = "inline";
    four.style.display = "inline";
    header.style.display = "inline";

    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var input = document.createElement("input");
            input.type = "text";
            input.setAttribute("class", "square");
            input.setAttribute("id", "box_" + i + "." + j);
            input.name = "member" + i;
            input.setAttribute("maxLength", "1");
            container.append(input);

            input.addEventListener("keypress", function (evt) {
                if (!((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122))) {
                    evt.preventDefault();
                    countFocus--;
                }
            });
        }
    }

    // gives first letter of word and set focus on second square

    document.getElementById("box_1.1").value = theword[0];
    document.getElementById("box_1.2").focus();
}
var correct = 0;
// checking if input value is the word value
function check() {
    var copysplit = [];

    console.log(split);
    console.log(j)
    for (i = 1; i < split.length; i++) {
        copysplit[i] = split[i];
    }
    for (j = 1; j < 6; j++) {
        woord = document.getElementById("box_" + row + "." + j).value;
        if (document.getElementById("box_" + row + "." + j).value == split[j - 1]) {
            document.getElementById("box_" + row + "." + j).style.backgroundColor = "green";
            copysplit[j - 1] = "*";
            if (document.getElementById("box_" + row + "." + j).style.backgroundColor = "green") {
                correct++;
            }
            for (t = 1; t < 6; t++) {
                let win = document.getElementById("box_" + row + "." + t);
                console.log(document.getElementById("box_" + row + "." + t));
            }
        }
        else {
            document.getElementById("box_" + row + "." + j).style.backgroundColor = "red";
            if (document.getElementById("box_" + row + "." + j).style.backgroundColor == "red") {
                attempt = row;
                if (attempt == 5 && document.getElementById("box_" + row + "." + j).style.backgroundColor == "red") {
                    gameOverr = true;
                }
            }
        }
    }
    for (k = 1; k < 6; k++) {
        word = document.getElementById("box_" + row + "." + k).value;
        if (copysplit.indexOf(word) > -1) {
            document.getElementById("box_" + row + "." + k).style.backgroundColor = "yellow";
            copysplit[copysplit.indexOf(word)] = "*";
        }
    }
    // checking win condition
    if (gameOverr == true) {
        myFunction();
    }
    if (correct >= 5) {
        myFunctions();
    }
    correct = 0;
}

function myFunction() {
    setTimeout(function () { gameOver() }, 1000);
    gameOverr = false;
}
function myFunctions() {
    setTimeout(function () { won() }, 1000);
    win = false;
}
function won() {
    alert("You won");
    won = false;
    location.reload();
}
function gameOver() {
    alert("Game over");
    gameOverr = false;
    location.reload();
}




var box = document.getElementById("box_" + row + "." + countFocus);
document.addEventListener("keydown", nextFocus);




function nextFocus(event) {
    console.log(row)
    console.log(countFocus);

    if (countFocus < 0) {
        countFocus = 0;
    }
    if (event.keyCode == 8) {
        if (countFocus <= 5) {
            document.getElementById("box_" + row + "." + countFocus).focus();
            countFocus--;
        }
    } else {
        if (countFocus <= 4) {
            countFocus++;
            document.getElementById("box_" + row + "." + countFocus).focus();
        }
    }
    if (event.keyCode == 13) {
        check();
        if (row < 6) row++;
        countFocus = 0;
        document.getElementById("box_" + row + "." + countFocus).focus();
    }
    if (event.keyCode == 13) {
        countFocus--;
    }
}

start();










