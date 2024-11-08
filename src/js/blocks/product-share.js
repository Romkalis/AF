const shareButton = document.querySelector('.main__heading-share')

if (shareButton) {
    shareButton.addEventListener('click', () => {
        const share = document.querySelector('.product__share')
        share.classList.toggle('product__share--show')
    })
}