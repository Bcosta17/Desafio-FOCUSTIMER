import * as el from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action] ()
  })  
}

export function playSounds() {
  let currentSound = null; 

  el.sounds.addEventListener('click', (event) => {
    const sound = event.target.dataset.sound;

    document.querySelectorAll('.sound').forEach(button => {
      button.classList.remove('playing');
    });

    event.target.classList.add('playing');

    if (currentSound && currentSound !== sound) {
     
      actions.toggleMusic(currentSound); 
    }

    actions.toggleMusic(sound); 
    currentSound = sound;
  });
}
