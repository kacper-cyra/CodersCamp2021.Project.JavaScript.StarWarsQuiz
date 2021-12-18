import * as classes from './style.module.scss';

export const LOGO_COMPONENT_NAME = 'logo-component';

class Logo extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.imageContainer = Logo.imageContainerBuilder();

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
    imageContainer.className = classes.imageContainer;

    const imageAnchor = document.createElement('a');
    imageAnchor.href = 'index.html';
    imageContainer.appendChild(imageAnchor);

    const imgTag = document.createElement('img');
    imgTag.src = 'static/assets/ui/StarWarsLogo.png';
    imageAnchor.appendChild(imageAnchor);

    return imageContainer;
  }
}

customElements.define(LOGO_COMPONENT_NAME, Logo);