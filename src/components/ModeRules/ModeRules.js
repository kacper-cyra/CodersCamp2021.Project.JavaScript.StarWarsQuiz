import * as classes from './style.module.scss';

export const MODE_RULES_COMPONENT_NAME = 'mode-rules-component';

const defText =
  'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.';

class ModeRules extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.container = ModeRules.addContainer();

    this.header = ModeRules.createHeader();
    this.container.appendChild(this.header);

    this.cont = ModeRules.createContent(defText);
    this.container.appendChild(this.cont);

    this._contents.appendChild(this.container);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  setRules(rules) {
    this.container.removeChild(this.cont);

    this.cont = ModeRules.createContent();
    this.container.appendChild(this.cont);
  }

  static addContainer() {
    const container = document.createElement('div');
    container.id = classes.container;
    return container;
  }

  static createHeader() {
    const header = document.createElement('div');
    header.id = classes.title;
    header.innerText = 'Mode Rules';
    return header;
  }

  static createContent(textContent) {
    const cont = document.createElement('div');
    cont.id = classes.content;
    cont.innerText = textContent;
    return cont;
  }
}

customElements.get(MODE_RULES_COMPONENT_NAME) ||
  customElements.define(MODE_RULES_COMPONENT_NAME, ModeRules);
