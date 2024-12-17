import { replyForm } from "./product-answer-form";
// import { toggleQuestionsVisibility } from "./product-question-open";

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
            child.cheked = null;
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

        const toggleForm = (evt) => {
          if (evt.target.classList.contains("question__answer-reply")) {
          
            const question = evt.target.closest("#modalQuestion");
        
            
            const form = question.querySelector(".question__answer-form");
        
            form.classList.toggle("answer-form--showed");
        
            const closeForm = () => {
              form.classList.remove("answer-form--showed");
              closeFormButton.removeEventListener("click", closeForm);
            };
        
            const closeFormButton = form.querySelector(".answer-form__cancel");
            closeFormButton.addEventListener("click", closeForm);
          }
        };
          
          if (questionList) {
            questionList.addEventListener("click", replyForm);
          }
          
        }
        // запускаем функцию показа формы
        modalContainer?.addEventListener('click', (e) =>{
          replyForm(e)
          console.log('click')
        })

        

        const closeModalButton = modalContainer.querySelector(
          ".question__close-modal"
        );
        const changedChildren = Array.from(modalContainer.children);
        const closeModal = () => {
          changedChildren.forEach((child) => {
            // делаем проверку что выпадающий список будет закрыт
            if (child.classList.contains("show-modal-checkbox")) {
              child.checked = false;
            }
            // не копируем кнопку закрытия модалки
            if (child.classList.contains("question__close-modal")) {
              return;
            }
            questionBlock.appendChild(child);
          });

          modalContainer.removeEventListener('click', replyForm)
          modalContainer.remove();

        };



        closeModalButton.addEventListener("click", closeModal);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", showQuestionsModal);
