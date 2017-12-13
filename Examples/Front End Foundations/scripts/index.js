const numbers = [2, 6, 8, 9];
var total = 0;
var i = 45;

const settings = {
    firstNumber: 2,
    secondNumber: 6,
    thirdNumber: 8,
    fourthNumber: 9,
    number: 12,
    time: "noon"
};

for (var i = 0;i < numbers.length; i++){
    total += numbers[i];
}

console.log("Total: " + total + " Value Of I: " + i);
console.log("The time is " + settings["number"] + " o'clock " + settings.time);