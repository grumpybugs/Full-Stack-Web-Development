var RandomNumber = Math.floor(Math.random() * 10) + 1;
var guesses = document.querySelector('.guesses');
var Statement = document.querySelector('.Statement');
var lowOrHi = document.querySelector('.lowOrHi');
var guessub = document.querySelector('.guessub');
var guesfld = document.querySelector('.guesfld');
var GC = 1;
var RB;
guesfld.focus();
function CG() {
  var userGuess = Number(guesfld.value);
  if(GC === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  if(userGuess === RandomNumber) {
    Statement.textContent = 'Congratulations! You got it right!';
    Statement.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    SGO();
  } else if(GC === 10) {
    LR.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    SGO();
  } else {
    Statement.textContent = 'Wrong!';
    Statement.style.backgroundColor = 'red';
    if(userGuess < RandomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > RandomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  GC++;
  guesfld.value = '';
  guesfld.focus();
}
guessub.addEventListener('click', CG);
function SGO() {
  guesfld.disabled = true;
  guessub.disabled = true;
  RB = document.createElement('button');
  RB.textContent = 'Start new game';
  document.body.appendChild(RB);
  RB.addEventListener('click', resetGame);
}
function resetGame() {
  GC = 1;
  var reset = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < reset.length ; i++) {
    resetHimanshu[i].textContent = '';
  }
  RB.parentNode.removeChild(RB);
  guesfld.disabled = false;
  guessub.disabled = false;
  guesfld.value = '';
  guesfld.focus();
  Statement.style.backgroundColor = 'white';
  RandomNumber = Math.floor(Math.random() * 100) + 1;
}
