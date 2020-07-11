let button = document.getElementById("btn");
let footer = document.getElementById("contact");
let projects = document.getElementById("projects-container");

window.onscroll = function () {
    // scrollReveal();
    projectsAnimationOnReveal();
};




// affiche button de retour si viewport > 425
// function scrollReveal() {
//     if (document.documentElement.clientWidth > 425) {
//         if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//             button.style.display = "block";
//         } else {
//             button.style.display = "none";
//         }
//     }
// }

//si click, retour en haut de page
// button.addEventListener("click", function topReturn() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;

// });


let stackLink = document.querySelector(".stackLink");
let stack = document.querySelector(".stack");
stackLink.addEventListener("click", function (Event) {
    Event.preventDefault();
    console.log('what?');
    stack.classList.toggle("toggle");
});


//is an element visible in the viewport?
function isElementInViewport(element) {
    let elementBouding = element.getBoundingClientRect();
    let clientHeight = document.documentElement.clientHeight;
    // console.log(elementBouding.top);
    // console.log(clientHeight);
    if (clientHeight > elementBouding.top) {
        return true
    } else {
        return false;
    }
}


function projectsAnimationOnReveal(){
    if(isElementInViewport(projects)){
        projects.classList.add("revealAnimation");
    } else {
        projects.classList.remove("revealAnimation");
    }
}