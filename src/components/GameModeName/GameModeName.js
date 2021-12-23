import * as classes from './style.module.scss';

export const GAME_MODE_COMPONENT_NAME = 'game-mode-title';

class GameMode extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    this.gameMode = GameMode.gameModeBuilder();
    this._contents.appendChild(this.gameMode);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static gameModeBuilder() {
    const gameMode = document.createElement('div');
    gameMode.className = classes.gameModeTitle;

    return gameMode;
  }

  setText(text) {
    this.gameMode.textContent = `MODE: ${text}`;
  }
}

customElements.define(GAME_MODE_COMPONENT_NAME, GameMode);
