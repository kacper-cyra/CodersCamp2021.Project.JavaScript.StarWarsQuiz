import * as classes from './style.module.scss';

export const HALL_OF_FAME_BUTTON_COMPONENT_NAME =
  'hall-of-fame-button-component';

class Button extends HTMLElement {
  constructor() {
    super();
    this.contents = new DocumentFragment();

    this.icon = Button.iconBuilder();
    this.hallOfFameButton = Button.hallOfFameButtonBuilder();

    this.contents.appendChild(this.hallOfFameButton);
  }

  connectedCallback() {
    this.appendChild(this.contents);
    this.hallOfFameButton.append(this.icon);
  }

  static iconBuilder() {
    const icon = document.createElement('img');
    icon.setAttribute(
      'src',
      '../../static/assets/img/modes/icon/contacts_24px.png',
    );
    icon.className = classes.icon;

    return icon;
  }

  static hallOfFameButtonBuilder() {
    const hallOfFameButton = document.createElement('button');
    hallOfFameButton.className = classes.hallOfFamebutton;
    hallOfFameButton.textContent = 'caption';

    return hallOfFameButton;
  }

  setParameters(imageSrc, caption) {
    this.icon.setAttribute('src', imageSrc);
    this.hallOfFameButton.innerText = caption;
  }
}

customElements.define(HALL_OF_FAME_BUTTON_COMPONENT_NAME, Button);
