const popup = document.querySelector('.popup')
const openPopupButton = document.querySelector('.main__heading-button')

if (popup && openPopupButton) {

    openPopupButton.addEventListener('click', () => {
        popup.classList.add('popup--open')
    })


    const closeButton = document.querySelector('.popup__close-button')
    closeButton.addEventListener('click', () => {
        popup.classList.remove('popup--open')
    })
}