// let lastScrollTop = 0;

// window.addEventListener("scroll", function () {
// let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     // Scrolling down
//     document.querySelector(".sticky-header").style.top = "-90px";           // Adjust the value as needed
//   } else {
//     // Scrolling up
//     document.querySelector(".sticky-header").style.top = "0";
//   }

//   lastScrollTop = currentScroll;
// });



// Mobile header
// function myFunction(x) {
//   x.classList.toggle("change");
//   let dropdown = document.getElementById("myDropdown");
//   if (x.classList.contains("change")) { // Show the dropdown when the icon is displaying the X
//     dropdown.style.display = "block";
//   } else {
//     dropdown.style.display = "none";
//   }
// }

// Old up top new below

document.addEventListener('DOMContentLoaded', (event) => {
  let lastScrollTop = 0;
  let dropdown = document.getElementById("myDropdown");
  let hamburger = document.querySelector('.hamburger');

  window.addEventListener("scroll", function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
          // Scrolling down
          document.querySelector(".sticky-header").style.top = "-90px";           // Adjust the value as needed
      } else {
          // Scrolling up
          document.querySelector(".sticky-header").style.top = "0";
      }

      lastScrollTop = currentScroll;
  });

  // Mobile header
  hamburger.addEventListener('click', function() {
      this.classList.toggle("change");
      dropdown.style.display = this.classList.contains("change") ? "block" : "none";
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 750) {
          dropdown.style.display = 'flex'; // Or whatever your default display value is for desktop
      } else {
          dropdown.style.display = hamburger.classList.contains('change') ? 'block' : 'none';
      }
  });
});