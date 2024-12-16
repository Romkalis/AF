const clearButton = document.querySelector('.cart__total-clear')

if (clearButton) {
    clearButton.addEventListener('click', () => {
        const cartList = document.querySelector(".cart__orders-list")
        cartList.textContent = null
        cartList.insertAdjacentHTML('afterbegin', `
            <li style="text-align: center; font-size: 1.5rem; padding: 4rem 0;"> В корзине ничего нет</li>
            `)
    })
}