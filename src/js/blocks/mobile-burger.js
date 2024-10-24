const showBurgerButton = document.querySelector(".header__burger-button");

if (showBurgerButton && window.innerWidth <= 768) {
  const burgerMenu = document.querySelector(".header__burger-menu");

  const overlay = document.createElement('div')
  overlay.classList.add('header__burger-overlay')
  
  const showBurgerMenu = () => {

    document.body.appendChild(overlay)
    // добавляем оверлей
    
    burgerMenu.classList.add("header__burger-menu--show");
    burgerMenu.addEventListener("click", showBurgerSubmenu);

    window.addEventListener("click", closeBurgerMenu);
  };
  const showBurgerSubmenu = (evt) => {
    if (evt.target.classList.contains("burger__submenu")) {
      const submenu = evt.target;
      const sublist = submenu.nextElementSibling;
      const backButton = sublist.querySelector(".header__submenu-back");

      sublist.classList.add("burger__products-sublist--show");

      const closeSubmenu = () => {
        sublist.classList.remove("burger__products-sublist--show");
      };

      backButton.addEventListener("click", closeSubmenu);
    }
  };
  const closeBurgerMenu = (evt) => {
    if (
      !burgerMenu.contains(evt.target) &&
      !showBurgerButton.contains(evt.target)
    ) {
      document.body.removeChild(overlay)
      // убираем оверлей

      burgerMenu.classList.remove("header__burger-menu--show");
    }
  };

  showBurgerButton.addEventListener("click", showBurgerMenu);
}
