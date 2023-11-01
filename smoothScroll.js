const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      console.log(targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
