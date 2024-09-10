var prompt = require('prompt-sync')();
console.log(" _____  ____  _____  _____      ____   __ __  _____  _____");
console.log("|     ||    ||     ||     |    |    \ |  |  ||     ||     |");
console.log("|   __| |  | |__/  ||__/  |    |  o  )|  |  ||__/  ||__/  |");
console.log("|  |_   |  | |   __||   __|    |     ||  |  ||   __||   __|");
console.log("|   _]  |  | |  /  ||  /  |    |  O  ||  :  ||  /  ||  /  |");
console.log("|  |    |  | |     ||     |    |     ||     ||     ||     |");
console.log("|__|   |____||_____||_____|    |_____| \__,_||_____||_____|");
var number = Number(prompt("Enter the Number:"));
try {
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZBUZZ", i);
        } else if (i % 5 == 0) {
            console.log("BUZZ", i);
        } else if (i % 3 == 0) {
            console.log("FIZZ", i);
        } else {
            console.log(i);
        }
    }
}
catch {
    console.log("Error Accured");
}