const menuButton = document.querySelector(".btn-menu");
const heroSection = document.querySelector(".hero-section");
const outerDiv = document.querySelector(".outer-div");
const navMenu = document.querySelector(".navigation-menu");

menuButton.addEventListener("click", () => {
  let visibility = navMenu.getAttribute("data-hidden");
  if (visibility === "true") {
    heroSection.style.backgroundImage = "none";
    heroSection.style.backgroundColor = "black";
    outerDiv.style.display = "none";
    navMenu.setAttribute("data-hidden", false);
    menuButton.setAttribute("aria-expanded", true);
  } else {
    navMenu.setAttribute("data-hidden", true);
    menuButton.setAttribute("aria-expanded", false);
    heroSection.style.backgroundImage = "url(images/mobile/image-hero.jpg)";
    heroSection.style.backgroundColor = "none";
    outerDiv.style.display = "block";
  }
});
