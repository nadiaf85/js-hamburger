const elementComparsa = document.querySelector(".fa-bars");
const elementScomparsa = document.querySelector(".close");
const elementHamburger = document.querySelector(".hamburger-menu");

elementComparsa.addEventListener('click',function(){
    elementHamburger.classList.add("active");
});

elementScomparsa.addEventListener('click',function(){
    elementHamburger.classList.remove("active");
});