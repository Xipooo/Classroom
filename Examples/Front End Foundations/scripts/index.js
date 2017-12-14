var variable = "Global Scope";

function myFunction(variable) {
    //let variable = "Function Scope";
    if (variable == "Global Scope") {
        var variable = "Local Scope";
        console.log(variable);
    }
    else {
        console.log(variable);
    }
    console.log(variable);
}

myFunction(variable);
console.log(variable);