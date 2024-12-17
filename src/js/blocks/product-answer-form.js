const questionList = document.querySelector(".questions__form-list");

export const replyForm = (evt) => {
  if (evt.target.classList.contains("question__answer-reply")) {

    const question = evt.target.closest(".questions__question");

    
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
