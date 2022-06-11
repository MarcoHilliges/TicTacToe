let evaluationArea = []
let playerId = 1;
let gameIsRunning = true;

function fillField(id){
    if(!evaluationArea[id] && gameIsRunning){
        evaluationArea[id] = playerId;
        draw(id);
        changePlayer();
    }
    
    checkForWin();
}


function draw(fieldId){
    if(playerId == 1){
        document.getElementById(`xField_${fieldId}`).classList.remove('d-none');
    }else{
        document.getElementById(`oField_${fieldId}`).classList.remove('d-none');
    }
}


function changePlayer(){
    if (playerId == 1){
        playerId = 2;
        document.getElementById('player1').classList.remove('activePlayer');
        document.getElementById('player2').classList.add('activePlayer');
    }else{
        playerId = 1;
        document.getElementById('player1').classList.add('activePlayer');
        document.getElementById('player2').classList.remove('activePlayer');
    }
}


function checkForWin(){
    checkForWinHorizontal();
    checkForWinVartical();
    checkForWinDiaganal();
}


function checkForWinHorizontal(){
    if (evaluationArea[0] == evaluationArea[1] && evaluationArea[1] == evaluationArea[2] && evaluationArea[0]){
        document.getElementById('crossOut').classList.add('animHorizontal0');
        gameIsRunning = false;
    }
    if (evaluationArea[3] == evaluationArea[4] && evaluationArea[4] == evaluationArea[5] && evaluationArea[3]){
        document.getElementById('crossOut').classList.add('animHorizontal3');
        gameIsRunning = false;
    }
    if (evaluationArea[6] == evaluationArea[7] && evaluationArea[7] == evaluationArea[8] && evaluationArea[6]){
        document.getElementById('crossOut').classList.add('animHorizontal6');
        gameIsRunning = false;
    }
}


function checkForWinVartical(){
    if (evaluationArea[0] == evaluationArea[3] && evaluationArea[3] == evaluationArea[6] && evaluationArea[0]){
        document.getElementById('crossOut').classList.add('animVertical0');
        gameIsRunning = false;
    }
    if (evaluationArea[1] == evaluationArea[4] && evaluationArea[4] == evaluationArea[7] && evaluationArea[1]){
        document.getElementById('crossOut').classList.add('animVertical1');
        gameIsRunning = false;
    }
    if (evaluationArea[2] == evaluationArea[5] && evaluationArea[5] == evaluationArea[8] && evaluationArea[2]){
        document.getElementById('crossOut').classList.add('animVertical2');
        gameIsRunning = false;
    }
}


function checkForWinDiaganal(){
    if (evaluationArea[0] == evaluationArea[4] && evaluationArea[4] == evaluationArea[8] && evaluationArea[0]){
        document.getElementById('crossOut').classList.add('animDiagonal0');
        gameIsRunning = false;
    }
    if (evaluationArea[2] == evaluationArea[4] && evaluationArea[4] == evaluationArea[6] && evaluationArea[2]){
        document.getElementById('crossOut').classList.add('animDiagonal2');
        gameIsRunning = false;
    }
}


function restart(){
    evaluationArea = [];
    for (let i= 0; i < 9; i++) {
        document.getElementById('xField_'+i).classList.add('d-none');
        document.getElementById('oField_'+i).classList.add('d-none');
    }
    document.getElementById('crossOutArea').innerHTML = '<div id="crossOut"></div>';
    gameIsRunning = true;
}