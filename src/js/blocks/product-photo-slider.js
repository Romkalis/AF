import Splide from '@splidejs/splide';

const startProductPhotoSlider = () => {

  const productSlidesCount = document.querySelector('.product__carousel-list').children.length

  const splideMainPhotoOptions = {
    type: "loop", // вкл зацикливание
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
    type: productSlidesCount >= 6 ? "loop" : "slide",    // вкл зацикливание
    fixedWidth: '8vw',                              // Ширина каждой миниатюры
    fixedHeight: '8vw',                             // Высота каждой миниатюры
    isNavigation: true,                             // Включаем навигационную функцию
    rewind: false,
    gap: '5px',                                     // Пробелы между миниатюрами
    pagination: true,                               // Отключаем стандартную пагинацию
    cover: true,                                    // Убедитесь, что изображения покрывают миниатюры
    arrows: true,                                   // Отключаем стрелки у карусели миниатюр
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
  

  // добавляем обводку к активному слайду в карусели.

  productCarouselSplide.on('active', (slide) => {
    // Убираем класс у всех слайдов
    document.querySelectorAll('#product-carousel-slider .splide__slide').forEach(slide => {
      slide.classList.remove('is-active');
    });
    // Добавляем класс активному слайду
    slide.slide.classList.add('is-active');
  });

  
  productPhotoSplide.mount();
  productCarouselSplide.mount();

};

if(document.getElementById('product-photo-slider')) {
    document.addEventListener("DOMContentLoaded", startProductPhotoSlider);
}
// window.addEventListener('resize', startProductPhotoSlider);
