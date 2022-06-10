// returns 0,1,2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


// 3 buttons for when each selection is clicked
// rock = 0 , paper = 1 , scissors = 2

    // rock button
    const rButton = document.getElementById('rbutton');
    rButton.addEventListener("click", function () {
        playRound(0)
    });
    // paper button
    const pButton = document.getElementById('pbutton');
    pButton.addEventListener("click", function () {
        playRound(1);
    });
    // scissors button
    const sButton = document.getElementById('sbutton');
    sButton.addEventListener("click", function () {
        playRound(2);
    });
    
const playerOptions = [rButton,pButton,sButton]; 

const display = document.getElementById('gameResults');
const round = document.getElementById('thisRound');
const reloadBtn = document.querySelector('.reload');
reloadBtn.innerText = 'Restart';
reloadBtn.style.display = 'flex'
reloadBtn.addEventListener('click',() => {
    window.location.reload();
})


// 0 computer wins
// 1 player wins
// 2 tie
// 0 = rock , 1 = paper , 2 scissors
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();


        if (playerSelection == 0 || computerSelection == 1) {
            return 0;
        }
        else if (playerSelection == 1 || computerSelection == 0) {
            return 1;
        }
        else if (playerSelection == 1 || computerSelection == 2) {
            return 0;
        }
        else if (playerSelection == 2 || computerSelection == 1) {
          return 1;
         }
        else if (playerSelection == 0 || computerSelection == 2) {
        return 1;
        }
        else if (playerSelection == 2 || computerSelection == 0) {
            return 0
        } return 2;
    
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    playerOptions.forEach(option => {
        option.addEventListener('click',function(){   

        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${5-moves}`;

        // determines winner or tie of each round and adds to score
        const result = playRound();
                
        if (result == 0) {
            round.innerText = 'This round: Computer wins!';
            computerScore++;
        } else if (result == 1) {
            round.innerText = 'This round: Player wins!';
            playerScore++;
        } else if (result == 2) {
            round.innerText = 'Tie!';
        } else {
            round.innerText = 'Error';
        }   
        
        // when game reaches 5 moves, show winner and restart button
        if (moves == 5){
        
            if(playerScore > computerScore){
                round.innerText = 'You win the game!';
            } else if(playerScore < computerScore) {
                round.innerText = 'The computer wins the game!';
            }

            
        }
        
        if (moves > 5) window.location.reload();



       
        // shows score of each player
        const pScore = document.getElementById('playerScore');
        pScore.innerText = `Player Score: ${playerScore} `;

        const cScore = document.getElementById('computerScore');
        cScore.innerText = `Computer Score: ${computerScore} `;

        });
    });
}


game()