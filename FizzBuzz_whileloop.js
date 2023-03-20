var output = [];
var n = 1;

function fizzBuzz() {
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz");
        n++;
        return output;
    } else if (n % 3 === 0) {
        output.push("Fizz");
        n++;
        return output;
    } else if (n % 5 === 0) {
        output.push("Buzz");
        n++;
        return output;
    } else {
        output.push(n++);
        return output;
    }
}

var chosenNumber = Number(prompt("Choose a number:"));

while (n !== (chosenNumber + 1)) {
    fizzBuzz();
}