let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let game = document.getElementById('mini-game-container');

let open = function() {
  game.style.display = 'block';
  close.style.display = 'inline-block';
}

let hide = function() {
  game.style.display = 'none';
  close.style.display = 'none';
}

view.addEventListener('click', open);
close.addEventListener('click', hide);

let ball = document.getElementById('float-circle');

const up = () => ball.style.bottom = '250px';

function down(){
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);