(function () {
    let loadButton = document.getElementById("loadButton");
    loadButton.addEventListener("click", function () {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                document.getElementById("example").innerHTML = this.responseText;
            }
        }

        xhttp.open("GET", "info.txt", true);
        xhttp.send();
    });
})();
