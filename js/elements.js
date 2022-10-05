const btnPlay = document.querySelector('#play')
const btnPause = document.querySelector('#pause')
const btnStop = document.querySelector('#stop')
const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCoffeeshop = document.querySelector('.coffeeshop')
const btnFireplace = document.querySelector('.fireplace')
const forestCard = document.querySelector('.cardForest')
const rainCard = document.querySelector('.cardRain')
const coffeeshopCard = document.querySelector('.cardCoffeeshop')
const fireplaceCard = document.querySelector('.cardFireplace')

const forestVolume = document.querySelector('.volForest')
const rainVolume = document.querySelector('.volRain')
const coffeeshopVolume = document.querySelector('.volCoffeeshop')
const fireplaceVolume = document.querySelector('.volFireplace')

const changeTheme = document.querySelector('#change-theme')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

export {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeshop,
  btnFireplace,
  forestCard,
  rainCard,
  coffeeshopCard,
  fireplaceCard,
  forestVolume,
  rainVolume,
  coffeeshopVolume,
  fireplaceVolume,
  changeTheme,
  lightMode,
  darkMode,
  minutes,
  seconds
}
