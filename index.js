let buttonRock = document.querySelector(`#rock`);
let buttonPaper = document.querySelector(`#paper`);
let buttonScissors = document.querySelector(`#scissors`);
let message = document.querySelector(`#message`);
let image = document.querySelector(`#player1`);
let image2 = document.querySelector(`#player2`);

buttonRock.addEventListener("click", playRock);
buttonPaper.addEventListener("click", playPaper);
buttonScissors.addEventListener("click", playScissors);

function playRock(){
    setRock(image);
    playGame(0)
}

function playPaper(){
    setPaper(image);
    playGame(1)

}

function playScissors() {
    setScissors(image);
    playGame(2)
}

function setRock(img){
    img.src = 'rock.jfif';
}

function setPaper(img){
    img.src = 'paper.jfif';
}

function setScissors(img){
    img.src = 'scissors.jpg';
}

function playGame(playerChoice){
    let computer = Math.floor((Math.random() *3))
    if(computer === 0){
        setRock(image2)
    }else if(computer === 1){
        setPaper(image2)
    }else{
        setScissors(image2)
    }
    if(playerChoice === computer){
        message.textContent = 'Tie'
    //Rock outcomes
    } else if(playerChoice === 0 && computer === 1){
        message.textContent = `Lose`
    }else if(playerChoice === 0 && computer === 2){
        message.textContent = `Win`
    //Paper outcomes
    }else if(playerChoice === 1 && computer === 0){
        message.textContent = `Win`
    }else if(playerChoice === 1 && computer === 2){
        message.textContent = `Lose`
    //Scissors outcomes
    }else if(playerChoice === 2 && computer === 0){
        message.textContent = `Lose`
    }else if(playerChoice === 2 && computer === 1){
        message.textContent = `Win`
    }
}

