const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function () {
  const desiredPosition = 950;
  window.scrollTo({
    top: desiredPosition,
    behavior: "smooth",
  });
});
