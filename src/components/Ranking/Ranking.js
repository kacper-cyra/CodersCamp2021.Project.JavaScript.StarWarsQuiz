import * as classes from './style.module.scss';

export const RANKING_COMPONENT_NAME = 'ranking-component';

class Ranking extends HTMLElement {
  constructor() {
    super();

    this._contents = new DocumentFragment();

    this.container = Ranking.addContainer();

    this.titleElement = Ranking.addTitle();
    this.container.appendChild(this.titleElement);

    this.rankingList = Ranking.createRankingList(this.playerScores);
    this.container.appendChild(this.rankingList);

    this._contents.appendChild(this.container);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  setUserScores(playerScores) {
    this.playerScores = playerScores;
  }

  static addContainer() {
    const container = document.createElement('div');
    container.id = classes.RankingContainer;
    return container;
  }

  static addTitle() {
    const title = document.createElement('header');
    title.id = classes.RankingTitle;
    title.textContent = 'Mode Ranking';
    return title;
  }

  static createRankingList(playerScores) {
    const rankingList = document.createElement('div');

    let playerRanking = [
      { place: '1st' },
      { place: '2nd' },
      { place: '3rd' },
    ].reduce((acc, item, index) => {
      return [...acc, { ...item, ...playerScores[index] }];
    }, []);

    playerRanking.unshift({
      place: 'Place',
      playerName: 'Player',
      score: 'Answered',
    });

    playerRanking.forEach((element) => {
      Ranking.addRow(element).forEach((el) => rankingList.appendChild(el));
    });

    rankingList.id = classes.RankingList;
    return rankingList;
  }

  static addRow(playerScore) {
    const row = [];
    for (val of Object.values(playerScore)) {
      const element = document.createElement('div');
      element.innerText = val;
      row.push(element);
    }
    return row;
  }
}

customElements.get(RANKING_COMPONENT_NAME) ||
  customElements.define(RANKING_COMPONENT_NAME, Ranking);
