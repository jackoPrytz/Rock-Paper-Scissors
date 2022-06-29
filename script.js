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
        return `Good job you won!!!`
    }
    else{
        return `Bad luck the Computer won!!`
    }
}
// create a function called game that plays five rounds of gameTime
            //promt User for their input
            //generate comps input
            //play one round
            //add score to winners
            //repeat until first player gets to 3
            //Announce winner


            


   