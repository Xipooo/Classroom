(function () {
    const $c = (element) => document.createElement(element);
    const $t = (tag) => document.getElementsByTagName(tag);
    const $id = (id) => document.getElementById(id);

    let container = $c("div");
    container.id = "container";

    let body = $t("body");
    body[0].appendChild(container);

    let head = $t("head");
    let title = $c("title");

    title.innerHTML = "This is a document";
    head[0].appendChild(title);

    const addChild = () => {
        let newElem = $c("div");
        newElem.innerHTML = "This is a new Element created by append.";

        let container = $id("container");
        container.appendChild(newElem);
        console.log("addChild was called");
    }

    let button = $c("button");
    button.style = "color: red; background-color: black;";
    button.innerHTML = "Click Me!";
    button.onclick = addChild;
    container.appendChild(button);
})();