import Splide from '@splidejs/splide';

export const startQuestionSlider = () => {
  let questionsSlider = null;
    const questionsSplideBlock = document.querySelector(".questions__form");
    if (questionsSplideBlock) {
      const questionsList = questionsSplideBlock.querySelector(
        ".questions__form-list"
      );

      questionsSplideBlock.classList.add("splide");
      questionsList.classList.add("splide__list");

      const splideOptions = {
        arrows: true,
        pagination: false,
        drag: true,
        paginationKeyboard: true,
        paginationDirection: true,
        mediaQuery: "min",
        perPage: 1,
        gap: '5px',
        breakpoints: {
          520: {
            destroy: true,
          },
        },
      };

      questionsSlider = new Splide("#questions-slider", splideOptions);

      questionsSlider.mount();

      //блок скрытия ответов на вопросы, чтобы он не перекрывал интерфейс

      const questionAnswers = document.querySelectorAll('.question__answers')
      if(window.innerWidth <= 520) {
        questionAnswers?.forEach( question => question.classList.add('visually-hidden'))
      }
    }
  
};

document.addEventListener('DOMContentLoaded', startQuestionSlider)


