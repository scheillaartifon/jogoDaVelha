document.addEventListener('DOMContentLoaded', () =>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            playerTime == 0 ? playerTime = 'O' : playerTime = 'X'
            alert("O VENCEDOR FOI O JOGADOR " + playerTime);
        }, 10);
    }

    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    currentPlayer();
}

function currentPlayer(){
    let currentPlayer = document.getElementById("currentPlayer");
    let player = 'O';
    
    playerTime == 0 ? player = 'O' : player = 'X';
    console.log(player);

    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}


function resetGame(){
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) =>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            board[position] = '';
            
            var els = document.querySelectorAll('.square > *')
            els[els.length - 1].remove(); 
        }
    })

    currentPlayer();
}