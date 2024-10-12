let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = {
    wins: 0 ,
    losses: 0
  }
};

/*let guess = '';
console.log(guess === result ? 'You win!' : 'You lose!');*/

function playGame(guess){
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? 'heads' : 'tails';
  

  console.log(guess === result ? 'You win!' : 'You lose!');

  if (result === guess){
    score.wins += 1 ; 
  } else {
    score.losses += 1; 
  };
  localStorage.setItem('score' , JSON.stringify(score));
  alert(`Wins: ${score.wins}, Losses: ${score.losses}`);
};


