var output = [];

function fizzBuzz() {
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz");
        return output;
    } else if (n % 3 === 0) {
        output.push("Fizz");
        return output;
    } else if (n % 5 === 0) {
        output.push("Buzz");
        return output;
    } else {
        output.push(n);
        return output;
    }
}

var chosenNumber = Number(prompt("Choose a number:"));

for (var n = 1; n !== (chosenNumber + 1); n++) {
    fizzBuzz();
}