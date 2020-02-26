window.onscroll = function () {
    scrollReveal()
};

let button = document.getElementById("btn");

// affiche button de retour si viewport > 425
function scrollReveal() {
    if (document.documentElement.clientWidth > 425) {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}

//si click, retour en haut de page
button.addEventListener("click", function topReturn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});


let stackLink = document.querySelector(".stackLink");
let stack = document.querySelector(".stack");
stackLink.addEventListener("click", function (Event) {
    Event.preventDefault();
    stack.classList.toggle("hide");
    stack.classList.toggle("show");
});