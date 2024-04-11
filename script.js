'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "😎 THAT'S RIGHT! 😎";
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.secret-number').textContent);
// document.querySelector('.secret-number').textContent = '35';

// console.log(document.querySelector('.score').textContent);
// document.querySelector('.score').textContent = 'Score: 500';

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0; //state variable
let bestScore = 10;
let maxAttempts = 5;

// console.log(randomNumber);//for testing
// document.querySelector('.secret-number').textContent = randomNumber; //for development only

document.querySelector('.check-button').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-input').value);
  // console.log(typeof guess, guess); //for testing

  // if guess does not enter a valid number between 1 and 10
  if (!guess || guess > 10 || guess < 1) {
    document.querySelector('.message').innerHTML =
      'PLEASE ENTER A VALID NUMBER. <img src="images/ash_ketchum.png">';
    document.body.style.backgroundColor = '(8, 140, 83)';

    // if guess is correct
  } else if (guess === randomNumber) {
    document.querySelector('.message').innerHTML = 'THAT\'S RIGHT! <img src="images/pikachu.png">';
    attempts++;
    document.querySelector('.attempts').textContent = attempts;
    document.body.style.backgroundColor = 'rgb(204, 153, 0)';
    document.querySelector('.secret-number').style.fontSize = '8.5rem';
    document.querySelector('.secret-number').textContent = randomNumber;

    // setting Best score
    // bestScore = attempts;
    if (attempts < bestScore) {
      bestScore = attempts;
      document.querySelector('.bestScore').textContent = bestScore;
    }

    //if attempts exceed 10 & guess is too high
  } else if (guess > randomNumber) {
    if (attempts < 5) {
      document.querySelector('.message').innerHTML = 'TOO HIGH! <img src="images/charmander.png">';
      attempts++;
      document.querySelector('.attempts').textContent = attempts;
      document.body.style.backgroundColor = 'rgb(201, 103, 28)';
    } else {
      document.querySelector('.message').innerHTML = 'YOU LOSE! <img src="images/mewtwo.png">';
      document.body.style.backgroundColor = 'black';
      document.querySelector('.attempts').textContent = 0;
    }

    //if attempts exceed 10 & guess is too low
  } else if (guess < randomNumber) {
    if (attempts < 5) {
      document.querySelector('.message').innerHTML = 'TOO LOW! <img src="images/squirtle.png">';
      attempts++;
      document.querySelector('.attempts').textContent = attempts;
      document.body.style.backgroundColor = 'rgb(20, 66, 94)';
    } else {
      document.querySelector('.message').innerHTML = 'YOU LOSE! <img src="images/mewtwo.png">';
      document.body.style.backgroundColor = 'black';
      document.querySelector('.attempts').textContent = 0;
    }
  }
});

// reseting everything
document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('.message').innerHTML = '<img src="images/pokeball.png">';
  attempts = 0;
  document.querySelector('.attempts').textContent = attempts;
  document.body.style.backgroundColor = 'rgb(8, 140, 83)';
  document.querySelector('.secret-number').style.fontSize = '7rem';
  document.querySelector('.secret-number').textContent = '?';
  randomNumber = Math.floor(Math.random() * 10) + 1;
  // console.log(randomNumber);  //for testing
  document.querySelector('.guess-input').value = '';
});
