const otherLinks = document.getElementById("other-links");
const megaMenu = document.getElementById("mega-menu");

document.addEventListener("click", function (event) {
  // If the click is not on the "Other Links" link or inside the submenu, hide the submenu
  if (event.target !== otherLinks && !megaMenu.contains(event.target)) {
    megaMenu.classList.remove("show"); // remove "show" class to hide the menu
  }
});

otherLinks.addEventListener("click", function (event) {
  event.preventDefault();
  megaMenu.classList.toggle("show"); // toggle "show" class to display/hide the menu
});

//////////////////////////////////////
// DARK THEME

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "imgs/sun.png";
  } else {
    icon.src = "imgs/moon.png";
  }
};