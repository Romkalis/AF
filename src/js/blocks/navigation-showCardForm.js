const navigationCards = document.querySelector('.navigation__cards')
const cards = document.querySelectorAll(".navigation__card");

navigationCards?.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('navigation__showmore')) {
        console.log(evt.target)
        const card = evt.target.closest('.navigation__card')
        const form = card.querySelector('.navigation__card-form')
        const closedButtonText = card.querySelector('.navigation__showmore--closed')
        const openedButtonText = card.querySelector('.navigation__showmore--open')

        form.classList.toggle("navigation__card-form--showed")



        // показываем текст у кнопки, в зависимости от состояния меню
        if (form.classList.contains('navigation__card-form--showed')) {
            closedButtonText.style = "display: none;"
            openedButtonText.style = "display: inline;"
        } else {
            closedButtonText.style = "display: inline;"
            openedButtonText.style = "display: none;"
        }
    }
})
