let computersScore = 0
let playersScore = 0
playersScore++

function computerPlay() {
    let number = Math.floor(Math.random() * 3);

    if (number == 1) {

        return 'Rock'

    }
    else if ( number == 2) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}


function playRound(playerSelection, computerSelection) {


    if (playerSelection == computerSelection) {
        return 'Tie!'
    }
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            computersScore++;
            return 'Computer wins !'
            
        }
        else if (computerSelection == 'Scissors') {
            playersScore++;
            return 'Player Wins !'
            
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            playersScore++;
            return 'Player Wins !'
            
        }
        else if (computerSelection == 'Scissors') {
            computersScore++;
            return 'Computer wins !'
            
        }
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            playersScore++;
            return 'Player Wins !'
            
        }
        else if (computerSelection == 'Rock') {
            computersScore++;
            return 'Computer wins !'
            
        }
    }
  }
  
  
  
function game(lenght) {
    for (let i = 0; i < lenght; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = computerPlay();
        console.log('Computers Selection is : ', computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log('Players Score : ', playersScore)
        console.log('Computers Score : ', playersScore)
     }
}
