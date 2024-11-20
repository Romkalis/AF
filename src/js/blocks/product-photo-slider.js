import Splide from '@splidejs/splide';

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
