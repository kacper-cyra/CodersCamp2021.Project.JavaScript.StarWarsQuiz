import * as classes from './style.module.scss';

export const LOGO_COMPONENT_NAME = 'logo-component';

class Logo extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.logo = Logo.logoBuilder();

    this._contents.appendChild(this.logo);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static logoBuilder() { 
    const imgAnchor = document.createElement('a');
    imgAnchor.href = 'index.html';    

    const logo = document.createElement('img');
    logo.className = classes.logo;
    logo.src = 'static/assets/ui/StarWarsLogo.png';
    imgAnchor.appendChild(logo);

    return imgAnchor;
  }
}

customElements.define(LOGO_COMPONENT_NAME, Logo);