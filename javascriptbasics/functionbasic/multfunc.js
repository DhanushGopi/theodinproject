function inputval() {
    var prompt = require('prompt-sync')();
    //need to install the prompt-sync package in npm.
    let val1 = prompt("Enter the value : ");
    return (val1)
}

const mult = (a, b = 7) => {
    console.log("The multiples of ", a, " x ", b, " is ", Number(a) * Number(b));
    return (Number(a) * Number(b));
}

const main = () => {
    return (mult(inputval(), inputval()));
}

main();