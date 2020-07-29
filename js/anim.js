let button = document.getElementById("btn");
let footer = document.getElementById("contact");
let projects = document.getElementById("projects-container");
let studies = document.getElementById("formation-container");

window.onscroll = function () {
    // scrollReveal();
    projectsAnimationOnReveal(projects) ;
    projectsAnimationOnReveal(studies) ;
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


function projectsAnimationOnReveal(section){
    if(isElementInViewport(section)){
        section.classList.add("revealAnimation");
    } else {
        section.classList.remove("revealAnimation");
    }
}