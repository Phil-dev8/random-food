const contentMenus = document.querySelectorAll(".content-menu");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentIndex = 0;

const showContentMenu = (index) => {
  contentMenus.forEach((menu, i) => {
    if (i !== index) {
      menu.classList.add("hidden");
    } else {
      menu.classList.remove("hidden");
    }
  });
};

const handleLeftButtonClick = () => {
  currentIndex = (currentIndex - 1 + contentMenus.length) % contentMenus.length;
  showContentMenu(currentIndex);
};

const handleRightButtonClick = () => {
  currentIndex = (currentIndex + 1) % contentMenus.length;
  showContentMenu(currentIndex);
};

leftButton.addEventListener("click", handleLeftButtonClick);
rightButton.addEventListener("click", handleRightButtonClick);
