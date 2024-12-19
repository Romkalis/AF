const questionsList = document.querySelector(".questions__form-list");
const modalBlock = document.getElementById("modalQuestion");


export const toggleQuestionsVisibility = (question) => {
  const replies = question.querySelectorAll(".question__reply");
  const questionBlock = question.querySelector(".question__answers");

  if (questionBlock) {
    questionBlock?.classList.toggle("question__answers--visible");
  }
  replies.forEach((reply) => reply.classList.toggle("question__reply--open"));
};

if (questionsList) {
  const questions = questionsList.querySelectorAll(".questions__question");

  questions?.forEach((question) => {
    const showReplyButton = question.querySelector(".answer__modal");

    // Используем стрелочную функцию, чтобы сохранялся контекст
    showReplyButton?.addEventListener("click", () => {
      toggleQuestionsVisibility(question); // передаем сам элемент вопроса
    });
  });
} 
