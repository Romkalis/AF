const showQuestionsModal = () => {
  const questionsList = document.getElementById("questions-slider-list");

  if (questionsList && window.innerWidth <= 521) {
    questionsList.addEventListener("click", (evt) => {
      
      const showModalButton = evt.target.closest(".answers__menu");

      if (showModalButton) {
        const questionBlock = showModalButton.closest(".questions__question");
        const questionChildren = Array.from(questionBlock.children);

        // создаем контейнер для модалки
        const modalContainer = document.createElement("div");
        modalContainer.id = "modalQuestion";

        questionChildren.forEach((child) => {

          if (child.type === "checkbox") {
            child.checked = false; 
            // флаг будут ли вопросы сразу открыты при открытии модалки false - да, будут.
          }
          
          if (child.classList.contains('question__answers')) {
            child.classList.remove('visually-hidden')
            child.classList.add('question__answers--visible')
            child.querySelectorAll('.question__reply')
                 .forEach(children => children.classList.add('question__reply--open'))
          }

          modalContainer.appendChild(child);
        });

        // создаем кнопку для закрытия контейнера
        modalContainer?.insertAdjacentHTML(
          "afterbegin",
          `
                    <button class='question__close-modal'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <line x1="17" y1="7" x2="7" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <line x1="7" y1="7" x2="17" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    `
        );
        document.body.appendChild(modalContainer);



        const closeModalButton = modalContainer.querySelector(
          ".question__close-modal"
        );
        const changedChildren = Array.from(modalContainer.children);
        const closeModal = () => {

          // ..закрываем форму ответа, если она открыта
          const modalForm = modalContainer.querySelector('.question__answer-form')
          modalForm?.classList.remove('answer-form--showed')

          changedChildren.forEach((child) => {
            // делаем проверку что выпадающий список будет закрыт
            if (child.classList.contains("show-modal-checkbox")) {
              child.checked = false;
            }
            // закрываем все вложенные вопросы и их рожительский блок
            if (child.classList.contains('question__answers')) {
              child.classList.add('visually-hidden')
              child.classList.remove('question__answers--visible')
              child.querySelectorAll('.question__reply')
                   .forEach(children => children.classList.remove('question__reply--open'))
            }

            // не копируем кнопку закрытия модалки
            if (child.classList.contains("question__close-modal")) {
              return;
            }
            questionBlock.appendChild(child);
          });
          showModalFormButtons.forEach(button => button.removeEventListener("click", toggleShowReplyForm));
          modalContainer.remove();
        };
        
        const showModalFormButtons = modalContainer.querySelectorAll('.question__answer-reply')
        const toggleShowReplyForm = () => {
          const modalForm = modalContainer.querySelector('.question__answer-form')
          modalForm.classList.toggle('answer-form--showed')
        }

        // запускаем функцию показа формы
        showModalFormButtons.forEach(button => button.addEventListener("click", toggleShowReplyForm));
        closeModalButton.addEventListener("click", closeModal);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", showQuestionsModal);
