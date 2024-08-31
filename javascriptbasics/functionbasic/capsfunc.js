function inputval() {
    var prompt = require('prompt-sync')();
    //need to install the prompt-sync package in npm.
    let val1 = prompt("Enter the value : ");
    return (val1)
}

const toCap = (a) => {
    let firstsent = a.split(' '); // to conver the sentence in to array string
    //console.log(firstsent);
    //console.log("the length ", firstsent.length);
    for (let i = 0; i < firstsent.length; i++) { // to access the each element in array
        let word = firstsent[i] // selecting each word
        let firstletter = word[0].toUpperCase(); //selecting the first letter and converting into an UpperLetter
        let remainletter = word.substring(1); // removing the first letter.
        firstsent[i] = firstletter + remainletter; // concat the first letter and remaining letter
        //console.log("the iteration ", i, " are ", firstsent[i]);
    }
    console.log("the final ", firstsent.join(" ")); // join the each word with a space.
    //let firstletter = a[0].toUpperCase();
    //let remainletter = a.substring(1);
    //let valCaps = firstletter + remainletter;
    //console.log("The Lower case of ", a, " is ", valCaps);
    //return (valCaps);
}

const main = () => {
    console.log(toCap(inputval()));
    return (toCap(inputval()));
}

main();