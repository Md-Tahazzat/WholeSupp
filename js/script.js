// country selector script
const navCountrySelector = document.getElementById("nav-country-selector");
const selectedCountryEl = document.getElementById("contry-value-reveiver");
// const navCountryOptions = document.querySelectorAll(".nav-country-option");
const countryOptionsContainer = document.querySelector(
  ".country-options-container"
);

navCountrySelector.addEventListener("click", () =>
  toggleCountryOptionDropdown("show")
);

countryOptionsContainer.addEventListener("click", setCountry);

function setCountry(event) {
  const liElement = event.target.closest("li");
  if (!liElement) return;

  const imgUrl = liElement.querySelector("img").getAttribute("src");
  const countryName = liElement.querySelector("span").innerText;

  selectedCountryEl.innerHTML = `
  <img src="${imgUrl}" alt="country flag"> <span>${countryName}</span>
  `;

  toggleCountryOptionDropdown();
}

function toggleCountryOptionDropdown(action) {
  if (action === "show") {
    countryOptionsContainer.style.display = "flex";
  } else {
    countryOptionsContainer.style.display = "none";
  }
}

// nav menu script
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

// global variable to check the current style
let menuOpen = true;
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    if (menuOpen) return;
    toggleMenu("open");
    menuOpen = true;
  } else {
    if (!menuOpen) return;
    toggleMenu();
    menuOpen = false;
  }
});
