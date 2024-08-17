const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let score = 0;
let computerScore = 0;

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', playRound);
});

document.getElementById('play-again').addEventListener('click', resetGame);

function playRound(event) {
  const userChoice = event.currentTarget.id;
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  
  const result = getResult(userChoice, computerChoice);
  
  displayResult(result, userChoice, computerChoice);
  
  if (result === 'win') {
    score++;
    document.getElementById('score').textContent = score;
  } else if (result === 'lose') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
  }
  
  document.getElementById('play-again').classList.remove('hidden');
}

function resetGame() {
  document.getElementById('result-message').textContent = '';
  document.getElementById('play-again').classList.add('hidden');
  score = 0;
  computerScore = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('computer-score').textContent = computerScore;
}


function getResult(user, computer) {
  if (user === computer) {
    return 'draw';
  }
  
  if (
    (user === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
    (user === 'paper' && (computer === 'rock' || computer === 'spock')) ||
    (user === 'rock' && (computer === 'lizard' || computer === 'scissors')) ||
    (user === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
    (user === 'spock' && (computer === 'scissors' || computer === 'rock'))
  ) {
    return 'win';
  }
  
  return 'lose';
}

function displayResult(result, user, computer) {
  const resultMessage = document.getElementById('result-message');
  
  if (result === 'win') {
    resultMessage.textContent = `You Win! ${capitalize(user)} beats ${capitalize(computer)}`;
  } else if (result === 'lose') {
    resultMessage.textContent = `You Lose! ${capitalize(computer)} beats ${capitalize(user)}`;
  } else {
    resultMessage.textContent = `It's a Draw! Both chose ${capitalize(user)}`;
  }
}

function resetGame() {
  document.getElementById('result-message').textContent = '';
  document.getElementById('play-again').classList.add('hidden');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
