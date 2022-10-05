export default function Controls({ btnPlay, btnPause }) {
  const play = () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  const pause = () => {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  const reset = () => {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  return {
    play,
    pause,
    reset
  }
}
