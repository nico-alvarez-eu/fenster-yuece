// document.addEventListener("DOMContentLoaded", function() {
//   // Match the nav link that corresponds to the current page and highlight it
//     const currentPath = window.location.pathname;
//     const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1);
//     const navLinks = document.querySelectorAll(`a[href='${currentPage}']`);
//     for (let i = 0; i < navLinks.length; i++) {
//         navLinks[i].classList.add("active");
//     }
// });

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");

// // Display mobile menu
// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// // Close mobile menu when clicking on a nav link
// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

document.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelector(".hamburger-menu")
    .addEventListener("click", function () {
      const navbarLinks = document.querySelector(".navbar-links");
      navbarLinks.classList.toggle("show");
    });

  const dropdownButton = document.querySelector(".dropdown-button");
  const caret = dropdownButton.querySelector(".caret");
  dropdownButton.addEventListener("click", function () {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
    if (dropdownContent.classList.contains("show")) {
      caret.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="M7.247 4.86 11.952 10.34c.57.645.106 1.659-.753 1.659H1.608a1 1 0 0 1-.753-1.659L5.796 4.86a1 1 0 0 1 1.451 0z"/></svg>'; // up arrow when dropdown is open
    } else {
      caret.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>'; // down arrow when dropdown is closed
    }
  });
});
