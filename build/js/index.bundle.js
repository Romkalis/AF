/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 852:
/***/ (function() {

let cultureSplide = null; // Переменная для хранения экземпляра слайдера

const startCultureSlider = () => {
  let windowSize = window.innerWidth; 
  const cultureSplideBlock = document.querySelector('.catalog-culture')
  let cultureList = cultureSplideBlock?.querySelector('.catalog-culture__list');
  
  if (cultureList && windowSize < 769) { // Если есть элемент списка и размер окна меньше 769
    cultureSplideBlock.classList.add('splide')
      if (!cultureSplide) { // Инициализируем слайдер, если он еще не был создан
          const splideOptions = {
              type: "loop", // зацикливание слайдера сейчас отключено
              arrows: true,
              pagination: true,
              drag: true,
              paginationKeyboard: true,
              paginationDirection: true,
              mediaQuery: "min",
              perPage: 2,
              breakpoints: {
                768: {
                  destroy: true,
                },
              },
          };

          cultureList.classList.add('splide__list'); 
          cultureSplide = new Splide("#splide-culture", splideOptions);

          const bar = cultureSplideBlock.querySelector( '.my-slider-progress-bar');

          // Updates the bar width whenever the carousel moves:
          cultureSplide.on( 'mounted move', function () {
            let end  = cultureSplide.Components.Controller.getEnd() + 1;
            let rate = Math.min( ( cultureSplide.index + 1 ) / end, 1 );

            bar.style.width = String( 100 * rate ) + '%';
          } );


          cultureSplide.mount();
      }
      
      window.addEventListener('resize', startCultureSlider); 

  } else {
    if (cultureSplide) { // Если слайдер был инициализирован, уничтожаем его
      cultureSplide.destroy();
      cultureSplideBlock?.classList.remove('splide')
      cultureList?.classList.remove('splide__list'); // Удаляем класс, если был добавлен
      cultureSplide = null; // Обнуляем переменную слайдера
    }
  }
};

document.addEventListener('DOMContentLoaded', startCultureSlider);


/***/ }),

/***/ 655:
/***/ (function() {

let forsunkiSplide = null; // Переменная для хранения экземпляра слайдера

const startForsunkiSlider = () => {
  let windowSize = window.innerWidth; 
  const forsunkiSplideBlock = document.querySelector('.catalog-forsunki');

  const forsunkiList = forsunkiSplideBlock?.querySelector('.catalog-forsunki__list');
  
  if (forsunkiList && windowSize < 769) { // Если есть элемент списка и размер окна меньше 769
    forsunkiSplideBlock.classList.add('splide')
      if (!forsunkiSplide) { // Инициализируем слайдер, если он еще не был создан

          const splideOptions = {
              type: "loop", // отключил зацикливание
              arrows: true,
              pagination: false,
              drag: true,
              paginationKeyboard: true,
              paginationDirection: true,
              mediaQuery: "min",
              perPage: 1,
              breakpoints: {
                768: {
                  destroy: true,
                },
              },
          };

          forsunkiList.classList.add('splide__list'); 
          forsunkiSplide = new Splide("#splide-forsunki", splideOptions);

          const bar = forsunkiSplideBlock.querySelector( '.my-slider-progress-bar');

          // настройки прогрессбара
          forsunkiSplide.on( 'mounted move', function () {
            let end  = forsunkiSplide.Components.Controller.getEnd() + 1;
            let rate = Math.min( ( forsunkiSplide.index + 1 ) / end, 1 );

            bar.style.width = String( 100 * rate ) + '%';
          } );

          forsunkiSplide.mount();

          window.addEventListener('resize', startForsunkiSlider); 

      }
  } else {
    if (forsunkiSplide) { // Если слайдер был инициализирован, уничтожаем
      forsunkiSplide.destroy();
      forsunkiSplideBlock?.classList.remove('splide')
      forsunkiList?.classList.remove('splide__list'); // Удаляем класс
      forsunkiSplide = null; // Обнуляем флаг слайдер
    }
  }
};

document.addEventListener('DOMContentLoaded', startForsunkiSlider);


/***/ }),

/***/ 44:
/***/ (function() {

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


/***/ }),

/***/ 7:
/***/ (function() {

const navigationCards = document.querySelector('.navigation__cards')
const cards = document.querySelectorAll(".navigation__card");

navigationCards?.addEventListener('click', (evt) => {
    
    const showMoreButton = evt.target.closest('.navigation__showmore');
    
    if(showMoreButton) {
        const card = evt.target.closest('.navigation__card')
        const form = card.querySelector('.navigation__card-form')
        const closedButtonText = card.querySelector('.navigation__showmore--closed')
        const openedButtonText = card.querySelector('.navigation__showmore--open')

        form.classList.toggle("navigation__card-form--showed")



        // показываем текст у кнопки, в зависимости от состояния меню
        if (form.classList.contains('navigation__card-form--showed')) {
            closedButtonText.style = "display: none;"
            openedButtonText.style = "display: inline;"
        } else {
            closedButtonText.style = "display: inline;"
            openedButtonText.style = "display: none;"
        }
    }
})


/***/ }),

/***/ 432:
/***/ (function() {

const popup = document.querySelector('.popup')
// const openPopupButton = document.querySelector('.main__heading-button')
const openPopupButtons = document.querySelectorAll('.main__heading-button')

if (popup && openPopupButtons.length >= 1) {

    openPopupButtons.forEach( openPopupButton => {
        openPopupButton.addEventListener('click', () => {
            popup.classList.toggle('popup--open')

            const closeButton = document.querySelector('.popup__close-button')
            closeButton.addEventListener('click', () => {
                popup.classList.remove('popup--open')
            })
        })
    })



}

/***/ }),

/***/ 842:
/***/ (function() {

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


/***/ }),

/***/ 544:
/***/ (function() {

const sliderList = document.querySelector(".product__picture-list");

// сработает если найден элемент и ширина экрана больше 520 пикселей.

if (sliderList && window.innerWidth > 520) {

  sliderList.addEventListener("click", (evt) => {

        const modal = document.getElementById('pictureModal')

        const additional = evt.target.cloneNode(true)

        if (additional.classList.contains('product__picture-image')) {
            
            additional.classList.remove('product__picture-image')
            additional.classList.add('product-view')

        } else if (additional.classList.contains('product__picture-video')) {
            
            additional.classList.remove('product__picture-video')
            additional.classList.add('product-view')
        }

        modal.appendChild(additional)
 

        modal.showModal()

        const closeModal = () => {

            modal.close()
            modal.removeChild(additional)
            modal.removeEventListener('click', closeModal)
        }
        modal.addEventListener('click', closeModal)

  });
}


/***/ }),

/***/ 581:
/***/ (function() {

const startProductPhotoSlider = () => {

  const splideMainPhotoOptions = {
    arrows: true,
    pagination: true,
    drag: true,
    paginationKeyboard: true,
    paginationDirection: true,
    mediaQuery: "min",
    lazyLoad: true,
    omitEnd: true,
    perPage: 1,
    gap: '5px',
  };
  const splideCarouselPhotoOptions = {
    fixedWidth: '8vw', // Ширина каждой миниатюры
    fixedHeight: '8vw', // Высота каждой миниатюры
    isNavigation: true, // Включаем навигационную функцию
    rewind: false,
    gap: '5px', // Пробелы между миниатюрами
    pagination: true, // Отключаем стандартную пагинацию
    cover: true, // Убедитесь, что изображения покрывают миниатюры
    arrows: true, // Отключаем стрелки у карусели миниатюр
  };

  let productPhotoSplide = new Splide(
    "#product-photo-slider",
    splideMainPhotoOptions
  );
  let productCarouselSplide = new Splide(
    "#product-carousel-slider",
    splideCarouselPhotoOptions
  );

  productPhotoSplide.sync(productCarouselSplide)// синхронизируем карусель со слайдером

  productPhotoSplide.mount();
  productCarouselSplide.mount();
};

if(document.getElementById('product-photo-slider')) {
    document.addEventListener("DOMContentLoaded", startProductPhotoSlider);
}
// window.addEventListener('resize', startProductPhotoSlider);


/***/ }),

/***/ 605:
/***/ (function() {

const form = document.getElementById('question-form')

if (form) {
    const showButton = document.querySelector('.questions__help-button')
    const showForm = () => {
        form.showModal()
    }
    const closeForm = () => {
        form.close()
    }

    showButton.addEventListener('click', () => {
        showForm()

        const backButton = form.querySelector('.question__button--back')
        const closeButton = form.querySelector('.question__button--close')
        const cancelButton = form.querySelector('.question-form__cancel')

        backButton.addEventListener('click', closeForm)
        closeButton.addEventListener('click', closeForm)
        cancelButton.addEventListener('click', closeForm)

    })
}

/***/ }),

/***/ 171:
/***/ (function() {


const startQuestionSlider = () => {
  let questionsSlider = null;
    const questionsSplideBlock = document.querySelector(".questions__form");
    if (questionsSplideBlock) {
      const questionsList = questionsSplideBlock.querySelector(
        ".questions__form-list"
      );

      questionsSplideBlock.classList.add("splide");
      questionsList.classList.add("splide__list");

      const splideOptions = {
        arrows: true,
        pagination: false,
        drag: true,
        paginationKeyboard: true,
        paginationDirection: true,
        mediaQuery: "min",
        perPage: 1,
        gap: '5px',
        breakpoints: {
          520: {
            destroy: true,
          },
        },
      };

      questionsSlider = new Splide("#questions-slider", splideOptions);

      questionsSlider.mount();
    }
  
};

document.addEventListener('DOMContentLoaded', startQuestionSlider)




/***/ }),

/***/ 794:
/***/ (function() {

const shareButton = document.querySelector('.main__heading-share')

if (shareButton) {
    shareButton.addEventListener('click', () => {
        const share = document.querySelector('.product__share')
        share.classList.toggle('product__share--show')
    })
}

/***/ }),

/***/ 408:
/***/ (function() {


const startAdditionalSlider = () => {
  let additionalSplideBlock = document.getElementById("slider-additional");

  if (additionalSplideBlock) {
    const splideAdditionalOptions = {
      arrows: true,
      pagination: false,
      drag: true,
      paginationKeyboard: true,
      paginationDirection: true,
      mediaQuery: "min",
      lazyLoad: true,
      omitEnd: true,
      gap: "10px",
      breakpoints: {
        1200: {
          perPage: 5, // Для экранов <= 1200px показываем 3 слайда
          gap: "20px", // Устанавливаем отступы между слайдами
        },
        768: {
          perPage: 4, // Для экранов <= 768px показываем 2 слайда
          gap: "15px",
        },
        520: {
          perPage: 2, // Для экранов <= 480px показываем 1 слайд
          gap: "10px",
        },
      },
    };

    let additionalSplider = new Splide(
      additionalSplideBlock,
      splideAdditionalOptions
    );

    additionalSplider.mount();
  }
};

document.addEventListener("DOMContentLoaded", startAdditionalSlider);


/***/ }),

/***/ 568:
/***/ (function() {

const startViewedSlider = () => {

  const viewedSplider = document.getElementById("slider-viewed")

    if (viewedSplider) {

      const splideViewedOptions = {
        arrows: true,
        pagination: false,
        drag: true,
        paginationKeyboard: true,
        paginationDirection: true,
        mediaQuery: "min",
        lazyLoad: true,
        omitEnd: true,
        gap: "10px",
        breakpoints: {
            1200: {
              perPage: 4, // Для экранов <= 1200px показываем 3 слайда
              gap: '20px', // Устанавливаем отступы между слайдами
            },
            768: {
              perPage: 3, // Для экранов <= 768px показываем 2 слайда
              gap: '15px',
            },
            480: {
              perPage: 1, // Для экранов <= 480px показываем 1 слайд
              gap: '10px',
            },
          },
      };
    
      let productPhotoSplide = new Splide(
        viewedSplider,
        splideViewedOptions
      );
    
      productPhotoSplide.mount();

    }
  

}

document.addEventListener('DOMContentLoaded', startViewedSlider);


/***/ }),

/***/ 314:
/***/ (function() {

const stickyBlock = document.querySelector('.sticky');

if (stickyBlock && window.innerWidth > 1024) {
    window.addEventListener('scroll', () => {
        
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        const scrollHeight = window.scrollY

        if (scrollHeight > headerHeight) {
            stickyBlock.classList.add('sticky--visible')
        } else {
            stickyBlock.classList.remove('sticky--visible')
        }
    })
}

/***/ }),

/***/ 813:
/***/ (function() {

const counterBlocks = document.querySelectorAll('.variations__cart-counter')

if (counterBlocks.length > 0) {
    counterBlocks.forEach( block => {
        block.addEventListener('click', (evt) => {
            
            const inputField = block.querySelector('.variations__counter-text')
            
            if(evt.target.classList.contains('variations__counter--remove')) {
                evt.preventDefault()
                if (inputField.value > 0) {
                    inputField.value --
                }
            } else if (evt.target.classList.contains('variations__counter--add')) {
                evt.preventDefault()
                    inputField.value ++
            }
        })
    })
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/js/blocks/catalog-culture.js
var catalog_culture = __webpack_require__(852);
// EXTERNAL MODULE: ./src/js/blocks/catalog-forsunki.js
var catalog_forsunki = __webpack_require__(655);
// EXTERNAL MODULE: ./src/js/blocks/product-photo-slider.js
var product_photo_slider = __webpack_require__(581);
// EXTERNAL MODULE: ./src/js/blocks/product-questions-slider.js
var product_questions_slider = __webpack_require__(171);
// EXTERNAL MODULE: ./src/js/blocks/slider-viewed.js
var slider_viewed = __webpack_require__(568);
// EXTERNAL MODULE: ./src/js/blocks/slider-additional.js
var slider_additional = __webpack_require__(408);
// EXTERNAL MODULE: ./src/js/blocks/product-about-show-more.js
var product_about_show_more = __webpack_require__(842);
;// CONCATENATED MODULE: ./src/js/blocks/product-answer-form.js
const questionList = document.querySelector(".questions__form-list");

const replyForm = (evt) => {
  if (evt.target.classList.contains("question__answer-reply")) {
    const form = document.querySelector(".question__answer-form");
    form.classList.toggle("answer-form--showed");

    const closeForm = () => {
      form.classList.remove("answer-form--showed");
      closeFormButton.removeEventListener("click", closeForm);
    };

    const closeFormButton = form.querySelector(".answer-form__cancel");
    closeFormButton.addEventListener("click", closeForm);
  }
};

if (questionList) {
  questionList.addEventListener("click", replyForm);
}

;// CONCATENATED MODULE: ./src/js/blocks/product-questions-mob-view.js


const showQuestionsModal = () => {
  const questionsList = document.getElementById("questions-slider-list");

  if (questionsList && window.innerWidth <= 521) {
    questionsList.addEventListener("click", (evt) => {
      const showModalButton = evt.target.closest(".answers__menu");

      if (showModalButton) {
        const questionBlock = showModalButton.closest(".questions__question");
        const questionChildren = Array.from(questionBlock.children);

        // создаем контейнер для модалки
        const modalContainer = document.createElement("div");
        modalContainer.id = "modalQuestion";

        questionChildren.forEach((child) => {
          if (child.type === "checkbox") {
            child.cheked = null;
          }
          modalContainer.appendChild(child);
        });

        // создаем кнопку для закрытия контейнера
        modalContainer.insertAdjacentHTML(
          "afterbegin",
          `
                    <button class='question__close-modal'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <line x1="17" y1="7" x2="7" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <line x1="7" y1="7" x2="17" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    `
        );

        document.body.appendChild(modalContainer);

        // запускаем функцию показа формы
        modalContainer.addEventListener('click', replyForm)


        const closeModalButton = modalContainer.querySelector(
          ".question__close-modal"
        );
        const changedChildren = Array.from(modalContainer.children);
        const closeModal = () => {
          changedChildren.forEach((child) => {
            // делаем проверку что выпадающий список будет закрыт
            if (child.classList.contains("show-modal-checkbox")) {
              child.checked = false;
            }
            // не копируем кнопку закрытия модалки
            if (child.classList.contains("question__close-modal")) {
              return;
            }
            questionBlock.appendChild(child);
          });

          modalContainer.removeEventListener('click', replyForm)
          modalContainer.remove();

        };


        closeModalButton.addEventListener("click", closeModal);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", showQuestionsModal);

// EXTERNAL MODULE: ./src/js/blocks/product-photo-modal.js
var product_photo_modal = __webpack_require__(544);
// EXTERNAL MODULE: ./src/js/blocks/product-question-form.js
var product_question_form = __webpack_require__(605);
// EXTERNAL MODULE: ./src/js/blocks/product-share.js
var product_share = __webpack_require__(794);
// EXTERNAL MODULE: ./src/js/blocks/navigation-showCardForm.js
var navigation_showCardForm = __webpack_require__(7);
// EXTERNAL MODULE: ./src/js/blocks/variations-counter.js
var variations_counter = __webpack_require__(813);
// EXTERNAL MODULE: ./src/js/blocks/popup.js
var popup = __webpack_require__(432);
// EXTERNAL MODULE: ./src/js/blocks/sticky-header.js
var sticky_header = __webpack_require__(314);
// EXTERNAL MODULE: ./src/js/blocks/mobile-burger.js
var mobile_burger = __webpack_require__(44);
;// CONCATENATED MODULE: ./src/js/index.js
// Libraries

//blocks

    // слайдеры
    
    
    
    
    
    
    


    //развернуть описание товара product.html
    
    
    
    
    
    

    //развернуть форму в карточке товара на наввигационной страничке
    
    
    //управление счетчиками добавления количества товара.
    
    

    
    //открытие и закрытие попап
    
    
    // липкий хедер
    

    // мобильное бургер-меню
    



    





}();
/******/ })()
;