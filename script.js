let lastScrollTop = 0;

window.addEventListener("scroll", function () {
let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector(".sticky-header").style.top = "-80px";           // Adjust the value as needed
  } else {
    // Scrolling up
    document.querySelector(".sticky-header").style.top = "0";
  }

  lastScrollTop = currentScroll;
});