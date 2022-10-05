export default function () {
  const forest = new Audio('./assets/sounds/forest.wav')
  const rain = new Audio('./assets/sounds/rain.wav')
  const coffeeshop = new Audio('./assets/sounds/coffeeshop.wav')
  const fireplace = new Audio('./assets/sounds/fireplace.wav')
  const timerEnd = new Audio('./assets/sounds/timer-end.wav')

  coffeeshop.loop = true
  fireplace.loop = true
  forest.loop = true
  rain.loop = true
  timerEnd.volume = 0.3

  const volForest = value => (forest.volume = value)

  const volRain = value => (rain.volume = value)

  const volCoffeeshop = value => (coffeeshop.volume = value)

  const volFireplace = value => (fireplace.volume = value)

  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    timerEnd,
    volForest,
    volRain,
    volCoffeeshop,
    volFireplace
  }
}
