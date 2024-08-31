function inputval() {
    var prompt = require('prompt-sync')();
    //need to install the prompt-sync package in npm.
    let val1 = prompt("Enter the value");
    return (val1)
}

const add7 = (a) => {
    console.log("The value of ADD 7", Number(a) + 7)
    return ("The value of ADD 7", a + 7);
}


const main = () => {
    let valfunc = add7(inputval);
    return (valfunc);
}

main();
