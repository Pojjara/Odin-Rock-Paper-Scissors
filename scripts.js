


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
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            
            return 2
            
        }
        else if (computerSelection == 'Scissors') {
            
            return 1
            
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            
            return 1
            
        }
        else if (computerSelection == 'Scissors') {
            
            return 2
            
        }
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            
            return 1
            
        }
        else if (computerSelection == 'Rock') {
            
            return 2
            
        }
    }
  }

  
  
function game(lenght) {
    let computersScore = 0;
    let playersScore = 0;
    for (let i = 0; i < lenght; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = computerPlay();
        console.log('Computers Selection is : ', computerSelection)
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
}