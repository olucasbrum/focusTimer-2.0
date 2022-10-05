import Controls from './controls.js'
import Events from './events.js'
import Timer from './timer.js'
import Theme from './theme.js'
import Sounds from './sounds.js'
import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  btnPlay,
  btnPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const theme = Theme()
const sound = Sounds()
Events({ controls, timer, sound, theme })
