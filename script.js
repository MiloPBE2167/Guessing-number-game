function createCorrectNumber_raw() {
  return Math.trunc(Math.random() * 20) + 1;
}

let correct_number = createCorrectNumber_raw();
let score = 20;
let highScore = 0;

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const againEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

checkEl.addEventListener('click', function() {
  const guess_number = Number(guessEl.value);


  if (!guess_number) {
    messageEl.textContent = 'No number!';


  } else if (guess_number === correct_number) {
    messageEl.textContent = '🎉 Correct number! 🎉';
    numberEl.textContent = correct_number;
    bodyEl.style.backgroundColor = '#6ec255';
    numberEl.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }


  } else if (guess_number !== correct_number) {
    if (score > 1) {
      messageEl.textContent = guess_number > correct_number ? 'Too high!' : 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "You've lost the game";
      scoreEl.textContent = 0;
    }
  }
});

againEl.addEventListener('click', function() {
  score = 20;
  correct_number = createCorrectNumber_raw();
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
  bodyEl.style.backgroundColor = 'black';
  numberEl.style.width = '15rem';
});
