function addTwoValues(x, y){
    var result;
    
    result = x + y;

    return result;
}

function concatTwoValues(x, y){
    var result;
    result = x + " " + y;

    return result;
}

function getFirstName(){
    var firstName;
    firstName = document.getElementById('firstName');
    return firstName.value;
}
function getLastName(){
    var lastName;
    lastName = document.getElementById('lastName');
    return lastName.value;
}
