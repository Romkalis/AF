const counterBlocks = document.querySelectorAll('.variations__cart-counter')

if (counterBlocks.length > 0) {
    counterBlocks.forEach( block => {
        block.addEventListener('click', (evt) => {
            
            const inputField = block.querySelector('.variations__counter-text')
            
            if(evt.target.classList.contains('variations__counter--remove')) {
                evt.preventDefault()
                if (inputField.value > 0) {
                    inputField.value --
                }
            } else if (evt.target.classList.contains('variations__counter--add')) {
                evt.preventDefault()
                    inputField.value ++
            }
        })
    })
}

