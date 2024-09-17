let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let finalscore = document.querySelector("#finalscore");

let computerScore,humanScore;

let humanChoice;

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

function playRound(humanChoice,computerChoice)
{
    if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            result.textContent="You win! Rock beats Scissors";
            ++humanScore;
        }
        else if(computerChoice=="paper")
        {
            result.textContent="You lose! Paper beats Rock";
            ++computerScore;
        }
        else
        {
            result.textContent="Its a tie! Rock can't beat Rock";
        }
    }

    if(humanChoice=="paper")
    {
        if(computerChoice=="rock")
        {
            result.textContent="You win! Paper beats Rock";
            ++humanScore;
        }
        else if(computerChoice=="scissors")
        {
            result.textContent="You lose! Scissors beats Paper";
            ++computerScore;
        }
        else
        {
            result.textContent="Its a tie! Paper can't beat Paper";
        }
    }

    if(humanChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            result.textContent="You win! Scissors beats Paper";
            ++humanScore;
        }
        else if(computerChoice=="rock")
        {
            result.textContent="You lose! Rock beats Scissors";
            ++computerScore;
        }
        else
        {
            result.textContent="Its a tie! Scissors can't beat Scissors";
        }
    }

    score.textContent = `COMPUTER=${computerScore}  HUMAN=${humanScore}`;

    if(humanScore>=5)
    {
        finalscore.textContent="HUMAN WON";
        return;
    }
    else if(computerScore>=5)
    {
        finalscore.textContent="COMPUTER WON";
        return;
    }
}

function playGame()
{
    computerScore=0;
    humanScore=0;
    humanChoice='nothing yet';


    rock.addEventListener('click',()=>{
        humanChoice='rock';
        computerSelection=getComputerChoice();
        playRound(humanChoice,computerSelection);
    })

    paper.addEventListener('click',()=>{
        humanChoice='paper';
        computerSelection=getComputerChoice();
        playRound(humanChoice,computerSelection);
    })

    scissors.addEventListener('click',()=>{
        humanChoice='scissors';
        computerSelection=getComputerChoice();
        playRound(humanChoice,computerSelection);
    })

}

playGame();