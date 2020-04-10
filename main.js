const buttons = document.querySelectorAll('.key');
const kick = document.getElementById('kick');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    kick.play()
  })
});

document.addEventListener('keydown', (e) => {
  if(e.code == "KeyA") {kick.play()};
});
