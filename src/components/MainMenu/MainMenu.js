import * as classes from './style.module.scss';

export const MAIN_MENU_COMPONENT_NAME = 'main-menu-component';

const optionsNames = ['People', 'Vehicles', 'Starships'];

class MainMenu extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.options = optionsNames.map((optionName) => {
      return MainMenu.addOptions(optionName);
    });
    this.options[0].classList.add(classes.active);

    this.nav = MainMenu.addNavBar();
    this.options.forEach((element) => {
      this.nav.appendChild(element);
    });

    this._contents.appendChild(this.nav);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static addNavBar() {
    const nav = document.createElement('nav');
    nav.id = classes.mainMenu;
    return nav;
  }

  static addOptions(text) {
    const option = document.createElement('div');
    option.className = classes.options;
    option.textContent = text;
    option.addEventListener('click', (e) => {
      const lastActiveElement = e.target.parentNode.querySelector(
        `.${classes.active}`,
      );
      lastActiveElement.classList.remove(classes.active);
      e.target.classList.add(classes.active);
    });
    return option;
  }
}

customElements.get(MAIN_MENU_COMPONENT_NAME) ||
  customElements.define(MAIN_MENU_COMPONENT_NAME, MainMenu);
