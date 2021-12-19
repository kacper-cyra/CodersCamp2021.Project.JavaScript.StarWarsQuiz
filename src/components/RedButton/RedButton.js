import * as classes from './style.module.scss';

export const RED_BUTTON_COMPONENT_NAME = 'red-button-component';

class Button extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.redButton = Button.redButtonBuilder();

    this._contents.appendChild(this.redButton);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static redButtonBuilder(caption) {
    const redButton = document.createElement('button');
    redButton.className = classes.redButton;
    redButton.innerText = caption;

    return redButton;
  }
}

customElements.define(RED_BUTTON_COMPONENT_NAME, Button);
