const navigationCards = document.querySelector('.navigation__cards')
const cards = document.querySelectorAll(".navigation__card");

if (navigationCards) {
    
    navigationCards?.addEventListener('click', (evt) => {
    
        const showMoreButton = evt.target.closest('.navigation__showmore');
        
        if(showMoreButton) {
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
        
}
