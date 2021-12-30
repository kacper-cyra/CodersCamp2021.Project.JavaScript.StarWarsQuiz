import * as classes from './style.module.scss';

export const RANKING_COMPONENT_NAME = 'ranking-component';

class Ranking extends HTMLElement {
  constructor() {
    super();

    let arr = [
      { playerName: 'Kacper', score: '11/21' },
      { playerName: 'Szymon', score: '16/37' },
      { playerName: 'Piotr Zając', score: '4/35' },
    ];

    this.playerScores = this.playerScores ? this.playerScores : arr;

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

    this.container.removeChild(this.rankingList);

    this.rankingList = Ranking.createRankingList(this.playerScores);
    this.container.appendChild(this.rankingList);
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
      acc.push({ ...item, ...playerScores[index] });
      return acc;
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
