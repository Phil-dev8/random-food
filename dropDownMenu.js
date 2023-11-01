const dropdownToggle = document.querySelector(".dropdown-toggle");
const menuItems = document.querySelector(".menu-items");

dropdownToggle.addEventListener("click", function () {
  menuItems.classList.toggle("active");
});
