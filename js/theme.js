import { lightMode, darkMode } from './elements.js'

export default function Theme() {
  function select() {
    document.body.classList.toggle('dark')
  }

  function light() {
    lightMode.classList.add('hide')
    darkMode.classList.remove('hide')
  }

  function dark() {
    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')
  }
  return {
    select,
    light,
    dark
  }
}
