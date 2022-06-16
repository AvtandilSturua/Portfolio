var open = document.getElementById("open");
var close = document.getElementById("close");
var mobileNav = document.getElementById("mobilenav");

open.addEventListener("click", function () {
  mobileNav.classList.add("active");
});

close.addEventListener("click", function () {
  mobileNav.classList.remove("active");
});

