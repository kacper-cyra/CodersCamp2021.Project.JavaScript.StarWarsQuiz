import * as classes from './style.module.scss';

export const MODE_RULES_COMPONENT_NAME = 'mode-rules-component';

class ModeRules extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.container = ModeRules.addContainer();

    this.title = ModeRules.createTitle();
    this.container.appendChild(this.title);

    this._contents.appendChild(this.container);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static addContainer() {
    const container = document.createElement('div');
    container.id = classes.container;
    return container;
  }

  static createTitle() {
    const title = document.createElement('div');
    title.id = classes.title;
    return title;
  }
}

customElements.get(MODE_RULES_COMPONENT_NAME) ||
  customElements.define(MODE_RULES_COMPONENT_NAME, ModeRules);
