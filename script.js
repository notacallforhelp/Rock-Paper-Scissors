function getComputerChoice()
{
    let num =Math.floor(Math.random()*3+1);
    if(num==1)
    {
        return "rock";
    }
    else if(num==2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let v;
    do
    {
        v = prompt("Choose rock, paper, scissors: ");
        v = v.toLowerCase();
    }
    while(v!="rock"&&v!="paper"&&v!="scissors")
    
    return v;
}


//let computerSelection=getComputerChoice();
//console.log(C_choice);

//let humanSelection=getHumanChoice();
//console.log(H_choice);
let computerScore,humanScore;

function playRound(humanChoice,computerChoice)
{
    if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }
        else if(computerChoice=="paper")
        {
            console.log("You lose! Paper beats Rock");
            ++computerScore;
        }
        else
        {
            console.log("Its a tie! Rock can't beat Rock");
        }
    }

    if(humanChoice=="paper")
    {
        if(computerChoice=="rock")
        {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        }
        else if(computerChoice=="scissors")
        {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }
        else
        {
            console.log("Its a tie! Paper can't beat Paper");
        }
    }

    if(humanChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        }
        else if(computerChoice=="rock")
        {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        }
        else
        {
            console.log("Its a tie! Scissors can't beat Scissors");
        }
    }
}

function playGame()
{
    let play=5;
    computerScore=0;
    humanScore=0;

    while(play>=1)
    {
        let computerSelection=getComputerChoice();
        //console.log(C_choice);

        let humanSelection=getHumanChoice();
        //console.log(H_choice);
        playRound(humanSelection,computerSelection);
        --play;
    }
    console.log("RESULTS");
    if(computerScore>humanScore)
    {
        console.log("YOU LOSE");
    }
    else if(computerScore<humanScore)
    {
        console.log("YOU WIN");
    }
    else
    {
        console.log("ITS TIE");
    }
    console.log(`Computer: ${computerScore}`);
    console.log(`You: ${humanScore}`);
}

playGame();