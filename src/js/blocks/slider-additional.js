
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
