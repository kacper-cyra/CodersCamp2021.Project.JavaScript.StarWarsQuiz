import * as classes from './style.module.scss';

export const PORTRAIT_COMPONENT_NAME = 'portrait-component';

class Portrait extends HTMLElement {
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
}

customElements.define(PORTRAIT_COMPONENT_NAME, Portrait);
