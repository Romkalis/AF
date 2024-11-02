const sliderList = document.querySelector(".product__picture-list");

// сработает если найден элемент и ширина экрана больше 520 пикселей.

if (sliderList && window.innerWidth > 520) {
  sliderList.addEventListener("click", (evt) => {
        const modal = document.getElementById('pictureModal')
        const picture = modal.querySelector('.product-picture')

        picture.src = evt.target.src

        modal.showModal()

        const closeModal = () => {
            modal.close()
            modal.removeEventListener('click', closeModal)
        }
        modal.addEventListener('click', closeModal)

  });
}
