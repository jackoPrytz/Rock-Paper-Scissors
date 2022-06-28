//create a user and computer input equal to an empty string
let userInput ="";
let compInput ="";
//create a function to determine a random number for the computer and returns Rock Paper scissors
function computerPlay(){
    let randomNum= Math.ceil(Math.random*3);
    if (randomNum==1){
        compInput=="Rock"
    }else if(randomNum==2){
        compInput=="Paper"
    }
   else{
       compInput=="Scissors"
   }
}


//create a function that compares the userInput with the computers Input

