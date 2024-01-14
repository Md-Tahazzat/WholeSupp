const navlist = document.querySelector("#primary-nav-list");

const closeButton = document.querySelector(".nav-menu-close-btn");
closeButton.addEventListener("click", toggleMenu);

const menuOpenButton = document.querySelector(".nav-menu-btn");
menuOpenButton.addEventListener("click", () => toggleMenu("open"));

const navlinks = document.querySelectorAll("#primary-nav-list li");
navlinks.forEach((link) => link.addEventListener("click", toggleMenu));

function toggleMenu(action) {
  if (action === "open") return (navlist.style.transform = "translateX(0)");
  navlist.style.transform = "translateX(-100%)";
}

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    toggleMenu("open");
  }
});
