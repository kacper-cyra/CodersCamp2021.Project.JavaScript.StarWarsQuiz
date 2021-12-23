import { async } from 'regenerator-runtime';
import * as classes from './style.module.scss';

// const HallOfFameButton = document.createElement('button')
// const Icon = document.createElement('img')
// HallOfFameButton.textContent = "hall of fame"
// Icon.setAttribute('src', './static/assets/img/modes/icon/contacts_24px.png')
// document.body.append(HallOfFameButton)
// HallOfFameButton.append(Icon)


export const HALL_OF_FAME_BUTTON_COMPONENT_NAME = 'hall-of-fame-button-component';

class Button extends HTMLElement {
    constructor() {
        super();
        this.contents = new DocumentFragment();

        this.icon = Button.iconBuilder();
        this.hallOfFameButton = Button.hallOfFameButtonBuilder();


        this.contents.appendChild(this.hallOfFameButton)
    }

    connectedCallback() {
        this.appendChild(this.contents);
        this.hallOfFameButton.append(this.icon);
    }

    static iconBuilder() {
        const icon = document.createElement('img')
        icon.setAttribute('src', '../../static/assets/img/modes/icon/contacts_24px.png');
        icon.className = classes.icon;

        return icon
    }

    static hallOfFameButtonBuilder() {
        const hallOfFameButton = document.createElement('button');
        hallOfFameButton.className = classes.hallOfFamebutton;
        hallOfFameButton.textContent = "caption";

        return hallOfFameButton;
    }

    setParameters(imageSrc, caption) {
        this.icon.setAttribute('src', imageSrc);
        this.hallOfFameButton.innerText = caption;
    }
}

askQuestion(question, callback) {
    callback.forEach((callback) => {
        callback(question)
    });
    this._question = question;
}

isAnswerCorrect()

async askQuestion(question, callback) {
    this.question = await getQuizQuestion();
    callback();
}

async answerQuestion(answer, callback) {
    this.isAnswerCorrect = await isAnswerCorrect()
    callback();
}


customElements.define(HALL_OF_FAME_BUTTON_COMPONENT_NAME, Button)