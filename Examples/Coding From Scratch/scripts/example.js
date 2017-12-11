//This will write to the console window the product of two values
function doAlert(value1, value2) {
    var result = value1 + value2;

    if (result != 18) {
        if (result <= 21) {
            alert("Allowed");
            console.log("Allowed");
        }
        else {
            alert("Too old");
            console.log("Too old");
        }
    }
    else if (result >= 16) {
        alert("Restricted");
        console.log("Restricted");
    }
    else {
        alert("Not Allowed");
        console.log("Not Allowed");
    }

}

function getFirstValue() {
    return parseInt(document.getElementById("firstValue").value);
}
function getSecondValue() {
    return parseInt(document.getElementById("secondValue").value);
}