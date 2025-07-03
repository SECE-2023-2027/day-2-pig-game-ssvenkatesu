const diceImg = document.getElementById('diceImg');
const player1ScoreEl = document.getElementById('player1Turn');
const player2ScoreEl = document.getElementById('player2Turn');
const current1El = document.querySelector('.currentScore');
const current2El = document.querySelector('.cs1');

const newGameBtn = document.querySelectorAll('button')[0];
const rollBtn = document.querySelectorAll('button')[1];
const holdBtn = document.querySelectorAll('button')[2];

const changeTheme1=document.querySelector(".player1")
const changeTheme2=document.querySelector(".player2")
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player1ScoreEl.textContent = 0;
  player2ScoreEl.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;
  diceImg.src = 'dice1.jpg';
  changeTheme1.style.backgroundColor = '';
  changeTheme2.style.backgroundColor = '';
 
  
};

const switchPlayer = () => {
  document.querySelectorAll('.currentScore')[activePlayer].textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollBtn.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice${dice}.jpg`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelectorAll('.currentScore')[activePlayer].textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    if (activePlayer === 0) {
      player1ScoreEl.textContent = scores[0];
    } else {
      player2ScoreEl.textContent = scores[1];
    }

    if (scores[activePlayer] >= 20) {
       if(activePlayer===0){
        changeTheme1.style.backgroundColor='lightblue';
       }else if(activePlayer===1){
        changeTheme2.style.backgroundColor='lightblue';
       }
      
      
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);

init();
