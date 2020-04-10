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
    let target = document.getElementById(e.key);
    target.play();

  }
});
