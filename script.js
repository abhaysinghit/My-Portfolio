
const nav = document.querySelector("nav");

window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", window.scrollY > 0);
})

var typed = new Typed(".typing",{
    strings: [ "Designer", "Developer", "Freelancer"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
 });
//  var typed = new Typed(".typing",{
//     strings: [ "Designer", "Developer", "Freelancer"],
//     typeSpeed: 70,
//     backSpeed: 40,
//     loop: true
//  }); 