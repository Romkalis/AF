import Splide from "@splidejs/splide";

let cultureSplide = null; // Переменная для хранения экземпляра слайдера

const startCultureSlider = () => {
  let windowSize = window.innerWidth; 
  const cultureSplideBlock = document.querySelector('.catalog-culture')
  let cultureList = cultureSplideBlock?.querySelector('.catalog-culture__list');
  
  if (cultureList && windowSize < 769) { // Если есть элемент списка и размер окна меньше 769
    cultureSplideBlock.classList.add('splide')
      if (!cultureSplide) { // Инициализируем слайдер, если он еще не был создан
          const splideOptions = {
              // type: "loop", // зацикливание слайдера сейчас отключено
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
          console.log(bar)

          // Updates the bar width whenever the carousel moves:
          cultureSplide.on( 'mounted move', function () {
            let end  = cultureSplide.Components.Controller.getEnd() + 1;
            let rate = Math.min( ( cultureSplide.index + 1 ) / end, 1 );

            bar.style.width = String( 100 * rate ) + '%';
          } );


          // ищем по событиям первый и последний слайд
          cultureSplide.on('move', () => {
            const currentIndex = cultureSplide.index; 
            const totalSlides = cultureSplide.Components.Controller.getEnd() + 1; 
    
            // Проверка первый слайд
            if (currentIndex === 0) {
              console.log('Первый слайд - добавить логику по навеске на кнопку  влево disabled');
            }
    
            // Проверка последний слайд
            if (currentIndex === totalSlides - 1) {
              console.log('Последний слайд - добавить логику по навеске на кнопку  вправо disabled');
            }
          });

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
