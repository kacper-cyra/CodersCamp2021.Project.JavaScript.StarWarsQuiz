import * as classes from './style.module.scss';

export const END_OF_GAME_CONTENTS = 'end-of-game-contents';

class EndOfGame extends HTMLElement {
  constructor() {
    super();
    let paragraph = null;
    let scrollList = null;
    let textInput = null;
    let humanCorrect = 0;

    this._contents = new DocumentFragment();
    this.endOfGame = EndOfGame.endOfGameBuilder();
    this._contents.appendChild(this.endOfGame);

    this.answers = [];
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static endOfGameBuilder() {
    const endOfGame = document.createElement('div');
    const detailedAnsers = EndOfGame.detailedAnserwerBuilder();
    const header = document.createElement('h2');
    header.innerText = 'GAME OVER';
    paragraph = document.createElement('p');
    paragraph.innerText =
      'The force is strong in you young Padawan! During 1 minute you have answered 10 / 23 questions. And Computer quessed 5 / 23.';

    const header3 = document.createElement('h3');
    header3.innerText = 'Detailed answers';

    endOfGame.className = classes.gameOverWin;
    endOfGame.append(header, paragraph, header3, detailedAnsers);

    return endOfGame;
  }

  static detailedAnserwerBuilder() {
    const detailAnsers = document.createElement('div');
    const yodaImage = document.createElement('img');
    yodaImage.src = '../../../../static/assets/ui/MasterYodaLeft.png';
    yodaImage.className = classes.yoda;
    const scrolDiv = document.createElement('div');
    scrolDiv.className = classes.scrollableList;

    scrollList = document.createElement('ul');

    const firstItem = document.createElement('li');
    firstItem.innerHTML =
      '<div></div> <div>You</div> <div>Computer</div> <div>Answer</div>';

    scrolDiv.append(firstItem);
    scrolDiv.append(scrollList);

    textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.required = true;
    textInput.placeholder = 'Your name';

    const inputDescription = document.createElement('p');
    inputDescription.innerHTML =
      'Please fill your name in order to receive eternal glory in whole Galaxy!';

    detailAnsers.append(yodaImage, scrolDiv, textInput, inputDescription);

    return detailAnsers;
  }

  setAnswers(answers) {
    this.answers = answers;

    humanCorrect = this.answers.filter((ans) => ans.human === ans.correct);
    const computerCorrect = this.answers.filter(
      (ans) => ans.computer === ans.correct,
    );
    paragraph.innerText = `The force is strong in you young Padawan! During 2 minutes you have answered ${humanCorrect.length} / ${this.answers.length} questions. And Computer guessed ${computerCorrect.length} / ${answers.length}.`;

    this.answers.forEach((ans) => {
      li = document.createElement('li');
      img = document.createElement('img');
      img.setAttribute('src', `data:image/png;base64,${ans.image}`);
      divHuman = document.createElement('div');
      divHuman.className =
        ans.human === ans.correct ? classes.correct : classes.wrong;
      divHuman.innerText = ans.human;
      divComputer = document.createElement('div');
      divComputer.className =
        ans.computer === ans.correct ? classes.correct : classes.wrong;
      divComputer.innerText = ans.computer;
      divCorrect = document.createElement('div');

      divCorrect.innerText = ans.correct;

      li.append(img, divHuman, divComputer, divCorrect);

      scrollList.append(li);
    });
  }

  setCallbackFunction(callback) {
    const submitButton = document.createElement('button');
    submitButton.addEventListener('click', (e) => {
      callback;

    });
    submitButton.innerHTML = 'MAY THE FORCE BE WITH YOU!';
    submitButton.className = classes.submitBtn;
    this.endOfGame.append(submitButton);
  }
}

customElements.define(END_OF_GAME_CONTENTS, EndOfGame);
