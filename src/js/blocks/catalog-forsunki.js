import Splide from '@splidejs/splide';

let forsunkiSplide = null; // Переменная для хранения экземпляра слайдера

const startForsunkiSlider = () => {
  let windowSize = window.innerWidth; 
  const forsunkiSplideBlock = document.querySelector('.catalog-forsunki');

  const forsunkiList = forsunkiSplideBlock?.querySelector('.catalog-forsunki__list');
  
  if (forsunkiList && windowSize < 769) { // Если есть элемент списка и размер окна меньше 769
    forsunkiSplideBlock.classList.add('splide')
      if (!forsunkiSplide) { // Инициализируем слайдер, если он еще не был создан

          const splideOptions = {
              type: "loop", // вкл зацикливание
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
