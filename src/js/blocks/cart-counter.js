const cartList = document.querySelector('.cart__orders-list')

if (cartList) {

    cartList.addEventListener('click', (evt) => {
        
        // обработка счетчиков по нажатию на кнопку

        if (evt.target.classList.contains('cart__card-counter-button')) {

            const goods = evt.target.closest('.cart__card-counter')
            
            const currentInput = goods.querySelector('.cart__card-counter-field')
            
            switch (evt.target.textContent) {
                case "+": {
                    currentInput.value = +currentInput.value + 1
                    break
                }
                case "-": {
                    if(currentInput.value > 0) {
                    currentInput.value = +currentInput.value - 1
                    }
                    break
                }

            }
        }

        // удаление товара

        if (
            evt.target.classList.contains('cart__card-delete-icon') || 
            evt.target.classList.contains('cart__card-delete-button')
        ) {
            const elem = evt.target.closest('.cart__card')
            elem.remove()
        }
    })
}