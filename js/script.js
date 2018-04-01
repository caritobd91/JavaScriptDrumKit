function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops function from running with key thats not on screen is pressed
    audio.currentTime = 0; //rewinds audio 
  
    audio.play();
    key.classList.add('playing');
  };
  
  function removeTransition(e){
  if(e.propertyName !== 'transform') return;  //skips property if its not a transform property
  this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);