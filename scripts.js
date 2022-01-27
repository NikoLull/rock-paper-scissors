


function computerPlay(){
     var play= [
         "rock",
         "paper",
         "scissor"
    ]
     
       
   return play[Math.floor(Math.random()*play.length)];
   
  
}
console.log(computerPlay())

const playerSelection = "rock";
const computerSelection =computerPlay() 


function playRound(playerSelection,computerSelection){


if (playerSelection > computerSelection){
    return "huray"
} else {
    return "naay"
}
 

}

console.log(playRound())


