const aboutSection = document.querySelector(".product__about");

if (aboutSection) {
  const showMoreButton = aboutSection.querySelector(
    ".product__about-info--showmore"
  );

  showMoreButton.addEventListener("click", () => {
    
    showMoreButton.textContent = ''

    const aboutInfoBlocks = aboutSection.querySelectorAll(
      ".product__about-info"
    );

    aboutInfoBlocks.forEach((block) => {

      if (block.classList.contains("desktop-view")) {
        block.classList.remove("desktop-view");
      }
    });
  });
}
