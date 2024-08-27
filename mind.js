let randomNumber = Math.ceil(Math.random() * 100)
let attempts = 0
let maxAttempts = 5
let guessedNumbers = []

let userGuessedInput = document.getElementById('userGuess')
let resultDiv = document.getElementById('result')
let guessedNumbersDiv = document.getElementById('guessedNumbers')
let checkBtn = document.getElementById('checkBtn')

const checkNumber = () => {

    let userGuessedNumber = parseInt(userGuessedInput.value)

    if(userGuessedNumber < 1 || userGuessedNumber > 100 || isNaN(userGuessedNumber)) {
        alert("Please enter a valid number between 1 to 100")
    }

    else {
        attempts++
        guessedNumbers.push(userGuessedNumber)

        if(userGuessedNumber === randomNumber) {
            resultDiv.innerHTML = `<h4>CONGRATULATIONS! You guessed it right at ${attempts} attempt(s)</h4>`
            resultDiv.style.color = 'green'
            disableInput()
        }

        else if(attempts === maxAttempts) {
            resultDiv.innerHTML = `<h4>GAME OVER! The correct number was ${randomNumber}</h4>`
            disableInput()
        }

        else {
            if(userGuessedNumber > randomNumber) {
                resultDiv.innerHTML = `<h4>TOO HIGH! Try Again</h4>`
            }

            else {
                resultDiv.innerHTML = `<h4>TOO LOW! Try Again</h4>`
            }
            resultDiv.style.color = 'red'
        }

        guessedNumbersDiv.innerHTML = `<h4>Guessed Number: ${guessedNumbers.join(', ')}`
        userGuessedInput.value = ''
    }
}

const restartGame = () => {
    randomNumber = Math.ceil(Math.random() * 100)
    attempts = 0
    guessedNumbers = []

    resultDiv.innerHTML = ''
    guessedNumbersDiv.innerHTML = ''

    userGuessedInput.value = ''
    userGuessedInput.disabled = false
    checkBtn.disabled = false
}

const disableInput = () => {
    userGuessedInput.disabled = true
    checkBtn.disabled = true
}