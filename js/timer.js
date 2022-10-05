import { minutes, seconds } from './elements.js'
import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timeout
  let newMinutes
  let newSeconds

  function updateTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function resetTimer(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    newSeconds = newSeconds === undefined ? seconds : newSeconds
    updateTimer(newMinutes, newSeconds)
  }

  function countdown() {
    timeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateTimer(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        Sounds().timerEnd.play()
        resetControls()
        resetTimer(newMinutes, newSeconds)
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimer(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timeout)
  }

  return {
    resetControls,
    updateTimer,
    countdown,
    hold,
    resetTimer
  }
}
