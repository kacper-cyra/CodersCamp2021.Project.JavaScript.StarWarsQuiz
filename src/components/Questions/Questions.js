import * as classes from './style.module.scss';

export const QUESTIONS_COMPONENT_NAME = 'portrait-component';

class QUESTIONS extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.imageContainer = Portrait.imageContainerBuilder();

    this._contents.appendChild(this.imageContainer);
  }

  connectedCallback() {
    this.imageContainer.style.backgroundImage = `url(${this.getAttribute(
      'data-image-url',
    )})`;
    this.appendChild(this._contents);
  }

  static imageContainerBuilder() {
    const imageContainer = document.createElement('div');
    imageContainer.className = classes.portrait;

    return imageContainer;
  }

  static buildQuestion() {
      const question = document.createElement('div');
      question.textContent =
  }
}

customElements.define(PORTRAIT_COMPONENT_NAME, Portrait);
