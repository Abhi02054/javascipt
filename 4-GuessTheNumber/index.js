const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = []
let numGuess = 0

let playGame = true ;
if (playGame){
    submit.addEventListener('click', (e) => {
     e.preventDefault()
     const guess = parseInt(userInput.value)
    //  console.log(guess);
     validateGuess(guess)
    })
}

const validateGuess = (guess) => {
    if(isNaN(guess)){
      alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter the number between 1 amd 100')
    }else if( guess >100){
        alert('please enter the number between 1 amd 100')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayGuess(`Game Over .Random Number is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

const checkGuess = (guess) => {
    if(guess === randomNumber){
        displayMessage(`Your guess number is right`)
    }
    else if(guess > randomNumber){
        displayMessage(`guess number is TOOO LOW`)
    }
    else if (guess<randomNumber){
        displayMessage(`guess number is TOOO HIGH`)
    }
}

const displayGuess = (guess) => {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  remaining.innerHTML = `${11- numGuess}`
} 

const displayMessage = (message) => {
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
 userInput.value = ''
 userInput.setAttribute('disabled', '')
 p.classList.add('button')
 p.innerHTML = `<h2 id ="playAgain">Play Again</h2>`
 startOver.appendChild(p);
 playGame = false
 newGame()
}
const newGame = () => {
    const newGameButton = document.querySelector('#playAgain');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess= []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11- numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}