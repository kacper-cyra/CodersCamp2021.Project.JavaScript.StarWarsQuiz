const HallOfFame = document.createElement('button')
const Icon = document.createElement('img')
HallOfFame.textContent = "hall of fame"
Icon.setAttribute('src', './static/assets/img/modes/icon/contacts_24px.png')
document.body.append(HallOfFame)
HallOfFame.append(Icon)


HallOfFame.style.background = '#FFFFFF'
HallOfFame.style.border = "none"
HallOfFame.style.padding = '40px'
HallOfFame.style.height = '100px'
HallOfFame.style.width = '50vw'
HallOfFame.style.textTransform = 'capitalize'
HallOfFame.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
HallOfFame.style.borderRadius = '16px'
HallOfFame.style.fontFamily = 'Montserrat'
HallOfFame.style.fontSize = '42px'
HallOfFame.style.textAlign = 'center'

Icon.style.position = 'absolute'
Icon.style.left = '5vw'