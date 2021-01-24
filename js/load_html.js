//remove surrounding div of imports
window.onload = () => {
    //adds html dynamically from files inside html
    if (document.querySelector(".import")) {
        for (let elem of document.querySelectorAll(".import")) {
            addFileToDOM(`../html/${elem.classList[1]}.html`);
        }
    }
}

function addFileToDOM(url) {
    fetch(url)
    .then(req => req.text())
    .then(text => {
        let div = document.createElement("div");
        div.innerHTML = text;
        document.querySelector(".import").parentNode.replaceChild(div, document.querySelector(".import"));
    });
}