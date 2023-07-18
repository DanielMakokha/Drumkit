window.addEventListener('keydown', e => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);

    audio.play()
    audio.currentTime = 0
    key.classList.add('key_run')
function transitionRemove(e) {
console.log(e.propertyName)
this.classList.remove('key_run')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', transitionRemove))

})