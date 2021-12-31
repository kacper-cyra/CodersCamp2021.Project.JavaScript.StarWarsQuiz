import * as classes from './style.module.scss';

export const MODAL_WINDOW = 'modal-window';

class ModalWindow extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    this.modalWindow = ModalWindow.modalWindowBuilder();
    this.innerWindow = ModalWindow.innerWindowBuilder();
    this.modalWindow.appendChild(this.innerWindow);
    this._contents.appendChild(this.modalWindow);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static modalWindowBuilder() {
    const modalWindow = document.createElement('div');
    modalWindow.className = classes.overlay;

    return modalWindow;
  }

  static innerWindowBuilder() {
    const innerWindow = document.createElement('div');
    innerWindow.className = classes.modalWindowActive;

    return innerWindow;
  }

  addComponents(components) {
    components.forEach((elem) => {
      this.innerWindow.appendChild(elem);
    });
  }

  closeModalWindow() {
    this.modalWindow.remove();
  }
}

customElements.define(MODAL_WINDOW, ModalWindow);
