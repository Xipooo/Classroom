(function () {
    const $c = (element) => document.createElement(element);
    const $t = (tag) => document.getElementsByTagName(tag);
    const $id = (id) => document.getElementById(id);

    const addChild = () => {
        let newElem = $c("div");
        newElem.innerHTML = "This is a new Element created by append.";

        let example = $id("example");
        example.appendChild(newElem);
        console.log("addChild was called");
    }

    let clickMeButton = $id("clickMeButton");
    clickMeButton.addEventListener("click", addChild);

})();