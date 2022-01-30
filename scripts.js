let playerScore = 0
let computerScore = 0

    

        function computerPlay(){
            let play =[
                        "rock",
                        "paper",
                        "scissors"
            ]
            return play[Math.floor(Math.random()*play.length)]
    }

    

     computerSelection=computerPlay();
    playerSelection = window.prompt("Rock, Paper or Scissors?");
    
    function playRound(){
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
            playerScore += 1;
            console.log(`you win! ${playerSelection}  beats  ${computerSelection}`)
            if (playerScore === 5){
                return console.log("You Won The Game!")
            }
        } else if (playerSelection == computerSelection ) {
            playerScore += 1
            computerScore += 1
            console.log(`it's a tie, you both chose ${playerSelection}`)
            
        }
        else {
            computerScore += 1;
            console.log(`You lose ${computerSelection} beats ${playerSelection}`)
        } if (computerScore == 5){
            return console.log("You Lost The Game")
        }   return playRound()
    }
    console.log(playRound())