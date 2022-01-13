// window.addEventListener('scroll', function () {
//     let header = document.querySelector('header');
//     let windowPosition = window.scrollY > 0;
//     header.classList.toggle('scrolling-active', windowPosition);
// })

window.onscroll = function() {myFunction()};

var navheader = document.getElementById("navSticky");
var sticky = navheader.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navheader.classList.add("navSticky");
  } else {
    navheader.classList.remove("navSticky");
  }
}