let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=["stone","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    console.log("game was a draw");
    msg.innerText="match was a draw.play again";
    msg.style.backgroundColor="#081b31";


};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;

        console.log("you win");
        msg.innerText=`you win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lost");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";



    }

};

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    let compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            //paper , scissor
           userWin= compChoice=="paper"? false:true;
        }
        else if(userChoice==="paper"){
//stone,scissor
            userWin=compChoice==="scissor"? false:true;
        }
        else{
            //user=scissor
            //stone,paper
            userWin= compChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    
    let userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        
        playGame(userChoice);

    });
});