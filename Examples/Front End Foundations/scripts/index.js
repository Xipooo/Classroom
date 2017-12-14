const renderName = () => {
    let textEnteredElement = document.getElementById("textEntered");
    textEnteredElement.innerHTML += document.getElementById("name").value;
    console.log(document.getElementById("name").value);
}