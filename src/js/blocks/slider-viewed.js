import Splide from '@splidejs/splide';

function startViewedSlider () {

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
