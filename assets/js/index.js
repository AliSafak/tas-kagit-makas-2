
let cpuMoveScore = 0;
let playerMoveScore = 0;

let cpuMove = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));

playerTas.addEventListener("click", hesaplaTas);
playerKagit.addEventListener("click", hesaplaKagit);
playerMakas.addEventListener("click", hesaplaMakas);

clearBtn.addEventListener("click",reset)

function reset() {
    cpuMoveScore = 0;
    playerMoveScore = 0;
    cpuWin.innerHTML = 0;
    playerWin.innerHTML = 0;
    winnerTxt.innerHTML = "Yok";
    cpuMoveTxt.innerHTML = "Bilinmiyor";
}

function hesaplaTas() {
    cpuMoveTxt.innerHTML = cpuMove;
    if (cpuMove === "kağıt") {
        cpuMoveScore++;
        cpuWin.innerHTML = cpuMoveScore;
        winnerTxt.innerHTML = "Bilgisayar";
    } else if (cpuMove === "makas") {
        playerMoveScore++;
        playerWin.innerHTML = playerMoveScore;
        winnerTxt.innerHTML = "Oyuncu";
    } else if (cpuMove === "taş") {
        winnerTxt.innerHTML = "Yok";
    }
    cpuMove = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
}

function hesaplaKagit() {
    cpuMoveTxt.innerHTML = cpuMove;
    if (cpuMove === "taş") {
        playerMoveScore++;
        playerWin.innerHTML = playerMoveScore;
        winnerTxt.innerHTML = "Oyuncu";

    } else if (cpuMove === "makas") {
        cpuMoveScore++;
        cpuWin.innerHTML = cpuMoveScore;
        winnerTxt.innerHTML = "Bilgisayar";
    } else if (cpuMove === "kağıt") {
        winnerTxt.innerHTML = "Yok";
    }
    cpuMove = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
}

function hesaplaMakas() {
    cpuMoveTxt.innerHTML = cpuMove;
    if (cpuMove === "taş") {
        cpuMoveScore++;
        cpuWin.innerHTML = cpuMoveScore;
        winnerTxt.innerHTML = "Bilgisayar";
    } else if (cpuMove === "kağıt") {
        playerMoveScore++;
        playerWin.innerHTML = playerMoveScore;
        winnerTxt.innerHTML = "Oyuncu";
    } else if (cpuMove === "makas") {
        winnerTxt.innerHTML = "Yok";
    }
    cpuMove = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
   }







