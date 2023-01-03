
function getComputerChoice(){
        return Math.floor(Math.random()*3);
      }
      

      
      let playerScore = 0;
      let computerScore = 0;
      function playRound(computerSelection, playerSelection){
        let user = playerSelection.toLowerCase()
        if(user==='rock'){
          if (computerSelection===0){
            return "It's a draw!"}
          else if (computerSelection===1){
              computerScore++;
            return "You lost! Paper beats rock!"
          }
          else {
            playerScore++;
            return "You won! Rock beats scissors!"
          }
      
        }
        else if(user==='paper'){
          if(computerSelection===0){
              playerScore++;
            return "You won! Paper beats rock!"
          }
          else if(computerSelection===1){
              return "It's a draw!"
          }
          else {
              computerScore++;
              return "You lost! Scissors beat paper!"
      
          }
      
        }
        else if(user==='scissors'){
            if(computerSelection===0){
                computerScore++;
                return "You lost! Rock beats scissors!"
            }
            else if(computerSelection===1){
                return "You won! Scissors beat paper!"
                playerScore++;
            }
            else {
                return "It's a draw!"
            }
      
        }
        else {
          return "Enter a proper value!"
        }
      }
 
      const computerSelection = getComputerChoice();
      
      function game(promptValue, computerSelection){
          function getPlayerChoice(){
              let a = prompt("RPS? ");
              return a;
          }
          for (i=0; i<5; i++){
              const playerSelection = getPlayerChoice()
              const computerSelection = getComputerChoice()
              console.log(playRound(computerSelection, playerSelection));
              }
      
      
          }
          
      
      console.log(game())
 
      if(playerScore>computerScore){
          console.log("YOU WON!")
      }
      else if(playerScore<computerScore){
          console.log("YOU LOST!")
      }
      else{
          console.log("IT'S A DRAW!")
      }
      