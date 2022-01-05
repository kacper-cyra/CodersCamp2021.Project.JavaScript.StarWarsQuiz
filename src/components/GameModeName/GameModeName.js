import * as classes from './style.module.scss';

export const GAME_MODE_COMPONENT_NAME = 'game-mode-title';

const defText = 'MODE: Who is this character?';
class GameMode extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    this.gameMode = GameMode.gameModeBuilder(defText);
    this._contents.appendChild(this.gameMode);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static gameModeBuilder(textContent) {
    const gameMode = document.createElement('div');
    gameMode.className = classes.gameModeTitle;
    gameMode.textContent = textContent;
    return gameMode;
  }

  setText(text) {
    this._contents.removeChild(this.gameMode);

    this.gameMode = GameMode.gameModeBuilder(defText);
    this._contents.appendChild(this.gameMode);
  }
}

customElements.define(GAME_MODE_COMPONENT_NAME, GameMode);
