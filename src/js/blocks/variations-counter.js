const counterBlocks = document.querySelectorAll(".variations__cart-counter");

if (counterBlocks.length > 0) {
  counterBlocks.forEach((block) => {
    block.addEventListener("click", (evt) => {
      const inputField = block.querySelector(".variations__counter-text");

      inputField.addEventListener('change', (evt) => {
        if (evt.target.value == 0) {
          evt.target.value = 1
        } else if (evt.target.value < 0) {
          evt.target.value = Math.abs(evt.target.value)
        } else if( typeof evt.target.value !== number) {
          evt.target.value = 1
        }
      })

      if (evt.target.classList.contains("variations__counter--remove")) {
        evt.preventDefault();
        if (inputField.value > 1) {
          inputField.value--;
        }
      } else if (evt.target.classList.contains("variations__counter--add")) {
        evt.preventDefault();
        inputField.value++;
      }
    });
  });
}
