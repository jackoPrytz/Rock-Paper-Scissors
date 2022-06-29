//create a user and computer input equal to an empty string
let userInput ="";
let compInput ="";
//create a function to determine a random number for the computer which returns Rock Paper scissors to compInput
function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum===0){
        return "rock"
    }else if(randomNum===1){
        return "paper"
    }
   else{
       return "scissors"
   }
}


//create a function that compares the userInput with the computers Input

function gameRound(userInput,compInput){
    userInput =userInput.toLowerCase();
    compInput= computerPlay();
    if(userInput === compInput){
        return `It's a draw!! you both played ${userInput}`;
    }
    else if(userInput==="rock"&&compInput==="scissors"||userInput==="paper"&& compInput==="rock"||userInput==="scissors"&& compInput==="paper"){
        return `User won`
    }
    else{
        return `Computer won`
    }
}
// create a function called game that plays five rounds of gameTime
            //promt User for their input
            //generate comps input
            //play one round
            //add score to winners
            //repeat until first player gets to 3
            //Announce winner

function game(){ 
                let compScore=0;
                let userScore=0;
                let rounds= 1;
        
                while (compScore<3 && userScore<3) {
                    console.log(`Round:${rounds}`)
                    userInput=prompt('paper, scissors rock. Type your answer.',"rock");
                    compInput=computerPlay();

                        let round = gameRound(userInput,compInput)
                        if(round==="User won"){
                            userScore++;
                            console.log(`You won this round the score is You:${userScore} computer:${compScore}`)
                        }else if(round==="Computer won"){
                            compScore++;
                            console.log(`Computer won this round the score is You: ${userScore} computer:${compScore}`)
                        }else{
                            console.log(`This round was a draw the score is You: ${userScore} computer:${compScore}`)
                        }
                        rounds++;
                    }  
                if(compScore>userScore){
                    console.log("The computer won, better luck next time!!")

                }   else{
                    console.log("You won!! great job.")
                }  
            }

   