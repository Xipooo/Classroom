$(document).ready(function () {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let myObj = JSON.parse(this.responseText);
            document.getElementById("example").innerHTML = myObj.name;
        }
    }
    newRequest.open("GET", "https://api.github.com/users/IgnacioLuciano", true);
    newRequest.send();
});