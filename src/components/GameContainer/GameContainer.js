import * as classes from './style.module.scss';

import { MAIN_MENU_COMPONENT_NAME } from '../MainMenu/MainMenu.js';
import { LOGO_COMPONENT_NAME } from '../Logo/StarWarsLogo.js';

import { PORTRAIT_COMPONENT_NAME } from '../Portrait/Portrait';
import { MODE_RULES_COMPONENT_NAME } from '../ModeRules/ModeRules.js';

import { GAME_MODE_COMPONENT_NAME } from '../GameModeName/GameModeName.js';

import { HALL_OF_FAME_BUTTON_COMPONENT_NAME } from '../HallOfFameButton/HallOfFameButton';

export const GAME_CONTAINER_COMPONENT_NAME = 'game-container-component';

class GameContainer extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();

    this.topBar = GameContainer.addTopBar();

    this.Logo = document.createElement(LOGO_COMPONENT_NAME);
    this.topBar.appendChild(this.Logo);

    this.MainMenu = document.createElement(MAIN_MENU_COMPONENT_NAME);
    this.topBar.appendChild(this.MainMenu);

    this.middleBar = GameContainer.addMiddleBar();

    this.portrait = document.createElement(PORTRAIT_COMPONENT_NAME);
    this.portrait.setAttribute(
      'data-image-url',
      './static/assets/img/modes/people/56.jpg',
    );
    this.middleBar.appendChild(this.portrait);

    this.gameMode = document.createElement(GAME_MODE_COMPONENT_NAME);
    this.middleBar.appendChild(this.gameMode);

    this.modeRules = document.createElement(MODE_RULES_COMPONENT_NAME);
    this.middleBar.appendChild(this.modeRules);

    // this.BttnHallOfFame = document.createElement(
    //   HALL_OF_FAME_BUTTON_COMPONENT_NAME,
    // );
    // this.middleBar.appendChild(this.BttnHallOfFame);

    this._contents.appendChild(this.topBar);
    this._contents.appendChild(this.middleBar);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  setPortraitImage(imageUrl) {
    this.portrait.setAttribute('data-image-url', imageUrl);
  }

  static addTopBar() {
    const topBar = document.createElement('div');
    topBar.id = classes.TopBar;
    return topBar;
  }

  static addMiddleBar() {
    const middleBar = document.createElement('div');
    middleBar.id = classes.MiddleBar;
    return middleBar;
  }
}

customElements.get(GAME_CONTAINER_COMPONENT_NAME) ||
  customElements.define(GAME_CONTAINER_COMPONENT_NAME, GameContainer);
