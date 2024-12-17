const questionsList = document.querySelector(".questions__form-list");

export const toggleQuestionsVisibility = (question) => {
    const questionBlock = question.querySelector('.question__answers')
    questionBlock.classList.toggle('question__answers--visible')

  const replies = question.querySelectorAll(".question__reply");
  replies.forEach((reply) => reply.classList.toggle("question__reply--open"));
};

if (questionsList) {
  const questions = questionsList.querySelectorAll(".questions__question");

  questions.forEach((question) => {
    const showReplyButton = question.querySelector(".answer__modal-text");

    // Используем стрелочную функцию, чтобы сохранялся контекст
    showReplyButton?.addEventListener("click", () => {
      toggleQuestionsVisibility(question); // передаем сам элемент вопроса
    });
  });
}

