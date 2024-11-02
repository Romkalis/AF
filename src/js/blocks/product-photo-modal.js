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
