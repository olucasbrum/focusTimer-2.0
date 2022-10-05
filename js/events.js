import {
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
  minutes,
  seconds,
  lightMode,
  darkMode
} from './elements.js'

export default function ({ controls, timer, sound, theme }) {
  btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
  })

  btnStop.addEventListener('click', () => {
    controls.reset()
    timer.updateTimer(minutes, seconds)
    timer.hold()
  })

  btnPlus.addEventListener('click', () => {
    let newMinutes = Number(minutesDisplay.textContent)
    let newSeconds = Number(secondsDisplay.textContent)

    timer.updateTimer(++newMinutes, newSeconds)
  })

  btnMinus.addEventListener('click', () => {
    let newMinutes = Number(minutesDisplay.textContent)
    let newSeconds = Number(secondsDisplay.textContent)

    if (newMinutes <= 0) {
      newMinutes = 60
    }

    timer.updateTimer(--newMinutes, newSeconds)
  })

  forestCard.addEventListener('click', () => {
    btnForest.classList.toggle('card-active')
    if (btnForest.classList.contains('card-active')) {
      sound.forest.play()
    } else {
      sound.forest.pause()
      forestVolume.value = 0.5
    }
  })

  rainCard.addEventListener('click', () => {
    btnRain.classList.toggle('card-active')
    if (btnRain.classList.contains('card-active')) {
      sound.rain.play()
    } else {
      sound.rain.pause()
      rainVolume.value = 0.5
    }
  })

  coffeeshopCard.addEventListener('click', () => {
    btnCoffeeshop.classList.toggle('card-active')
    if (btnCoffeeshop.classList.contains('card-active')) {
      sound.coffeeshop.play()
    } else {
      sound.coffeeshop.pause()
      coffeeshopVolume.value = 0.5
    }
  })

  fireplaceCard.addEventListener('click', () => {
    btnFireplace.classList.toggle('card-active')
    if (btnFireplace.classList.contains('card-active')) {
      sound.fireplace.play()
    } else {
      sound.fireplace.pause()
      fireplaceVolume.value = 0.5
    }
  })

  forestVolume.addEventListener('input', () => {
    sound.volForest(forestVolume.value)
  })

  rainVolume.addEventListener('input', () => {
    sound.volRain(rainVolume.value)
  })

  coffeeshopVolume.addEventListener('input', () => {
    sound.volCoffeeshop(coffeeshopVolume.value)
  })

  fireplaceVolume.addEventListener('input', () => {
    sound.volFireplace(fireplaceVolume.value)
  })

  lightMode.addEventListener('click', function () {
    theme.select()
    theme.light()
  })

  darkMode.addEventListener('click', function () {
    theme.select()
    theme.dark()
  })
}
