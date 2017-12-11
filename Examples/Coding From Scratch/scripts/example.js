//This will write to the console window the product of two values
function doAlert() {
    var myFruits = ["Apples", "Oranges", "Pears", "Bananas"];

    //var i = 0;
    // while (i < 3) {
    //     console.log(myFruits[i]);
    //     ++i;
    // }

    //for (var i = 0; i < myFruits.length; ++i){
    //     var fruit = myFruits[i];
    //     console.log(fruit);
    // }

    // for (var fruit of myFruits){
    //     console.log(fruit);
    // }

    myFruits.forEach(function(fruit) {
        return console.log(fruit);
    });
}

function getFirstValue() {
    return parseInt(document.getElementById("firstValue").value);
}
function getSecondValue() {
    return parseInt(document.getElementById("secondValue").value);
}