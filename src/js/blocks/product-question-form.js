const form = document.getElementById('question-form')

if (form) {
    const showButton = document.querySelector('.questions__help-button')
    const showForm = () => {
        form.showModal()
    }
    const closeForm = () => {
        form.close()
    }

    showButton.addEventListener('click', () => {
        showForm()

        const backButton = form.querySelector('.question__button--back')
        const closeButton = form.querySelector('.question__button--close')
        const cancelButton = form.querySelector('.question-form__cancel')

        backButton.addEventListener('click', closeForm)
        closeButton.addEventListener('click', closeForm)
        cancelButton.addEventListener('click', closeForm)

    })
}