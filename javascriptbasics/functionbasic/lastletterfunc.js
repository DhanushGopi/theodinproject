function inputval() {
    var prompt = require('prompt-sync')();
    //need to install the prompt-sync package in npm.
    let val1 = prompt("Enter the value : ");
    return (val1)
}

const lastltr = (a) => {
    let lastindex = a.length - 1;
    console.log("The last letter of the word ", a, " is ", a[lastindex]);
    return (a[lastindex]);
}

const main = () => {
    return (lastltr(inputval()));
}

main();