import * as classes from './style.module.scss';

export const TIMER_COMPONENT_NAME = 'timer';

class Timer extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    this.timer = Timer.timerBuilder();
    this.appendChild(this.timer);
  }

  connectedCallback() {
    this.appendChild(this._contents);
  }

  static timerBuilder() {
    const timer = document.createElement('div');
    timer.className = classes.timer;

    let amountOfTime = 120;

    displayTimer(timer, amountOfTime);

    let interval = setInterval(() => {
      amountOfTime--;
      displayTimer(gameTime, timerDiv);
      if (amountOfTime == 0) {
        clearInterval(interval);
      }
    }, 1000);

    return timer;

  }

  convertTimeToMinutesAndSeconds(amountOfTime) {
    const minutes = Math.floor(amountOfTime / 60);
    const seconds = amountOfTime - (minutes * 60);
    return { minutes, seconds };
  }

  timerDisplay(timer, amountOfTime) {
    var timeValues = convertTimeToMinutesAndSeconds(amountOfTime);
    timer.innerHTML = "Time left:" + timeValues.minutes + 'm' + timeValues.seconds + 's';
  }

}

customElements.define(TIMER_COMPONENT_NAME, Timer);
