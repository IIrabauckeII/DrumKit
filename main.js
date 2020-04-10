const buttons = document.querySelectorAll('.key');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let target = document.getElementById(button.innerHTML.toLowerCase());
    target.play();
  })
});

document.addEventListener('keydown', (e) => {
  if (['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].includes(e.key)
) {
    let targetSound = document.getElementById(e.key + 'Sound');
    targetSound.play();
/*    let targetKey = document.getElementById(e.key + 'Key');
    targetKey.style.background = "rgba(252,166,34,0.4)";
    targetKey.style.transform = "scale(1.15)";
    targetKey.style['border-color'] = "black";*/
    document.getElementById(e.key + 'Key').className = "keyDown";
    setTimeout(function(){
      document.getElementById(e.key + 'Key').className = "key"}, 400);
  }
});
