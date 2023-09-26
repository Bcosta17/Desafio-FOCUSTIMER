import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
 state.isRunning = document.documentElement.classList.toggle('running')

 timer.countdown()
 sounds.buttonPressAudio.play()
}

export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay() // volta para o valor inicial 
  sounds.buttonPressAudio.play()
}

export function increaseTimer () {
  const minutes = Number(el.minutes.textContent) + 5
  const seconds = el.seconds.textContent 
 
  timer.updateDisplay(minutes, seconds)
}

export function decreaseTimer () {
  if(Number(el.minutes.textContent) < 5) {
    timer.updateDisplay(0,0) 
    return
  }

  const minutes = Number(el.minutes.textContent) - 5
  const seconds = el.seconds.textContent 
  
  timer.updateDisplay(minutes, seconds)
}

export function toggleMusic(sound) {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    sounds[sound].play();
    state.isMute = false
  } else {

    sounds[sound].pause();
    state.isMute = true
  }
}