const cartList = document.querySelector(".cart__orders-list");

if (cartList) {
  function isDiscount(elem) {
    const item = elem.closest(".cart__orders-item");
    const currentInput = item.querySelector(".cart__card-counter-field");
    const discountPrice = item.querySelector(".cart__discount-price");

    if (currentInput.value >= 100) {
      discountPrice.classList.remove("visually-hidden");
    } else {
      discountPrice.classList.add("visually-hidden");
    }
  }
  const cartItems = document.querySelectorAll(".cart__orders-item");

  cartItems.forEach((item) => isDiscount(item));

  cartList.addEventListener("click", (evt) => {
    // обработка счетчиков по нажатию на кнопку

    if (evt.target.classList.contains("cart__card-counter-button")) {
      // const
      const item = evt.target.closest(".cart__orders-item");
      const currentInput = item.querySelector(".cart__card-counter-field");

      switch (evt.target.textContent) {
        case "+": {
          
          if (currentInput.value < 0) {
            
            currentInput.value = Math.abs(currentInput.value)
          }

          currentInput.value = +currentInput.value + 1;
          isDiscount(evt.target);
          break;
        }
        case "-": {
          if (currentInput.value > 0) {
            currentInput.value = +currentInput.value - 1;
          }
          isDiscount(evt.target);
          break;
        }
      }
    }

    // удаление товара

    if (
      evt.target.classList.contains("cart__card-delete-icon") ||
      evt.target.classList.contains("cart__card-delete-button")
    ) {
      const elem = evt.target.closest(".cart__card");
      elem.remove();
    }
  });

  cartItems.forEach((item) => {
    item.addEventListener("change", (evt) => isDiscount(evt.target));
  });
}
