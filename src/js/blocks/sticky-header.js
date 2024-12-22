const stickyBlock = document.querySelector('.sticky');

if (stickyBlock && window.innerWidth > 1024) {
    window.addEventListener('scroll', () => {
        
        const headerHeight = document.querySelector('.header')?.offsetHeight;
        
        const scrollHeight = window.scrollY

        if (scrollHeight > headerHeight) {
            stickyBlock.classList.add('sticky--visible')
        } else {
            stickyBlock.classList.remove('sticky--visible')
        }
    })
}