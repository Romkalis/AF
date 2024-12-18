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
  // при загрузке данных проверяем товары кол-во которых больше условия, и показываем плашку со скидкой
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
          if (currentInput.value > 1) {
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
      elem?.remove();
    }
  });
  
  cartList.onchange = function (evt) {
    const target = evt.target;
    // Проверяем, что изменение произошло на поле ввода
    if (target.classList.contains("cart__card-counter-field")) {
      const input = target;
      // Корректируем значение инпута (если оно отрицательное или не числовое)
      if (+input.value < 0) {
        input.value = Math.abs(input.value); // Присваиваем минимальное значение
      }
      isDiscount(input); // Проверяем скидку
    }
  };

  cartItems.forEach((item) => {
    item.addEventListener("change", (evt) => isDiscount(evt.target));
  });
}
