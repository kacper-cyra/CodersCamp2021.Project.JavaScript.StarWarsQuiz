import * as classes from './style.module.scss';

const HallOfFameButton = document.createElement('button')
const Icon = document.createElement('img')
HallOfFameButton.textContent = "hall of fame"
Icon.setAttribute('src', './static/assets/img/modes/icon/contacts_24px.png')
document.body.append(HallOfFameButton)
HallOfFameButton.append(Icon)