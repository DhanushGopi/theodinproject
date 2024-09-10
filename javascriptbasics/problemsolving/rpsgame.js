var prompt = require('prompt-sync')();

var human = 0;
var ai = 0;
let rpsinput = () => {
    var gameelement = ['rock', 'paper', 'scissors'];
    var humanval = prompt("Enter the Value: ").toLowerCase();
    var ailogic = Math.round(Math.random() * 2);
    var aival = gameelement[ailogic]
    rpsgameval(humanval, aival);
}


let rpsgameval = (val, cval) => {
    if (val == "rock") {
        if (val == "rock" && cval == "scissors") {
            human += 1;
            console.log("The Rock Won");
        } else if (val == "rock" && cval == "rock") {
            human += 1;
            ai += 1;
            console.log("Tie - Rock");
        } else {
            ai += 1;
            console.log("The Paper Won");
        }
    } else if (val == "scissors") {
        if (val == "scissors" && cval == "paper") {
            human += 1;
            console.log("The Scissors Won");
        } else if (val == "scissors" && cval == "scissors") {
            human += 1;
            ai += 1;
            console.log("Tie - Scissors");
        } else {
            ai += 1;
            console.log("The Rock Won");
        }
    } else if (val == "paper") {
        if (val == "paper" && cval == "rock") {
            human += 1;
            console.log("The Paper Won");
        } else if (val == "paper" && cval == "paper") {
            human += 1;
            ai += 1;
            console.log("Tie - paper");
        } else {
            ai += 1;
            console.log("The Scissors Won");
        }
    } else {
        console.log("invalid input");
    }
}


let rpsmain = () => {

    while (human < 3 && ai < 3) {
        rpsinput();
    }
    rpsresult();
}

let rpsresult = () => {
    console.log("The human", human, "The AI", ai);

    if (human > ai) {
        console.log("You won the Game");
    } else {
        console.log("You Lost, But u can try again!");
    }
}

rpsmain();