import * as classes from './style.module.scss';

export const ANSWERS_COMPONENT_NAME = 'answers-component';

class Answers extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
  }

  connectedCallback() {
    this.answersElements = this.answers.map((answer) =>
      Answers.answerBuilder(answer, this.callback),
    );

    this.appendChild(this._contents);
  }

  static answerBuilder(answer, callback) {
    const ansewr = document.createElement('div');
    answer.className = classes.answer;
    ansewr.textContent = answer;
    answer.onClick = (mouseClickEvent) =>
      Answers.clickHandler(mouseClickEvent, rightAnswer, callback);

    return ansewr;
  }

  static clickHandler = (mouseClickEvent, rightAnswer, callback) => {
    const selectedAnswerElement = mouseClickEvent.target;
    const chosenAnswerText = selectedAnswerElement.textContent;
    const isRightAnswer = rightAnswer === chosenAnswerText;

    if (isRightAnswer) {
      selectedAnswerElement.classList.add(classes.sucess);
    } else {
      selectedAnswerElement.classList.add(classes.failure);
    }

    callback(isRightAnswer);
  };

  setAnswers(answers, rightAnswer) {
    this.answers = answers;
    this.rightAnswer = rightAnswer;
  }

  setCallback = (callback) => {
    this.callback = callback;
  };
}

customElements.define(PORTRAIT_COMPONENT_NAME, Portrait);
