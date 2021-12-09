const elementComparsa = document.querySelector("fa-bars");
const elementScomparsa = document.querySelector(".close");
const elementHamburger = document.querySelector("hamburger-menu");

elementComparsa.addEventListner('click',function(){
    elementHamburger.classList.add("active");
});

elementScomparsa.addEventListner('click',function(){
    elementHamburger.classList.remove("active");
});