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