


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
        return 0
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            
            return 2
            
        }
        else if (computerSelection == 'scissors') {
            
            return 1
            
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            
            return 1
            
        }
        else if (computerSelection == 'scissors') {
            
            return 2
            
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            
            return 1
            
        }
        else if (computerSelection == 'rock') {
            
            return 2
            
        }
    }
  }

  
  
function game(lenght) {
    let computersScore = 0;
    let playersScore = 0;
    for (let i = 0; i < lenght; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        let computerSelection = computerPlay().toLowerCase();
        console.log('Players selection is : ', playerSelection)
        console.log('Computers selection is : ', computerSelection)
        let winner = playRound(playerSelection, computerSelection)
        if (winner == 1) {
            playersScore++
            console.log('Player wins !');
        }
        else if (winner == 2) {
            computersScore++
            console.log('Computer wins !')
        }
        else {
            console.log('Tie !')
        }
        
        console.log('Players Score : ', playersScore)
        console.log('Computers Score : ', computersScore)
     }
     if (playersScore > computersScore) {
        console.log('Player is the Winner !!')
     }
     else if (computersScore > playersScore) {
        console.log('Computer is the Winner !!')
     }
     else {
        console.log('The game is Tied !')
     }
     
}