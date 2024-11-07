const questionList = document.querySelector(".questions__form-list");

if (questionList) {
  //   const form = `
  //     <form action="#" class="question__answer-form answer-form--showed answer-form" method="POST">

  //         <label class="answer-form__reply-label answer-form-label" for="reply">Ответить пользователю AgroForsunka.ru</label>

  //         <textarea class="answer-form__reply answer-form__field" id="reply" name="reply" rows="4"
  //             cols="50" placeholder="Ваш ответ *" required></textarea>

  //         <label class="answer-form__name-label answer-form-label" for="name">Вы отвечаете как:</label>
  //             <input class="answer-form__name answer-form__field" type="text" id="name" name="name"
  //             placeholder="Имя *" required>

  //         <label class="answer-form__email-label answer-form-label" for="email">
  //         <input class="answer-form__email answer-form__field" type="email" id="email" name="email"
  //             placeholder="E-mail (не будет виден другим пользователям)" required>
  //         </label>

  //         <div class="answer-form__buttons">
  //             <button class="answer-form__submit button button--small"
  //                 type="submit">Отправить</button>
  //             <button class="answer-form__cancel button--light"
  //                 type="reset">Отменить</button>
  //         </div>
  //     </form>
  //     `;

  questionList.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("question__answer-reply")) {
      const answerBlock = evt.target.parentElement;

      //   answerBlock.insertAdjacentHTML('beforeend', form)

      const form = questionList.querySelector(".question__answer-form");
      form.classList.add("answer-form--showed");

      const closeForm = () => {
        form.classList.remove("answer-form--showed");
        closeFormButton.removeEventListener("click", closeForm);
      };

      const closeFormButton = form.querySelector(".answer-form__cancel");
      closeFormButton.addEventListener("click", closeForm);
    }
  });
}
