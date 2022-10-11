const table = document.querySelector("table")
const gameTable = document.querySelector(".gameTable")
const xH = document.getElementById("xH")
const oH = document.getElementById("oH")
let gameArr = []
let player
let xWins = 0
let oWins = 0

function createPlayZone(){
    player = "X"
    for(let i = 0; i < 3; i++){
        const row = document.createElement("tr")
        gameArr.push([])
        for(let j = 0; j < 3; j++){
            const col = document.createElement("td")
            col.id = `id${i}${j}`
            col.addEventListener('click', (ev) => {
                if(ev.target.innerHTML == ""){
                    ev.target.innerHTML = `${player}`
                    soundClick()
                    gameArr[i][j] = player
                    if(player == "X"){
                        player = "O"
                        ev.target.style.color = "#22df13"
                    }else player = "X"
                }
                if(checkWinner([0, 0], [0, 1], [0, 2]) ||
                checkWinner([1, 0], [1, 1], [1, 2]) ||
                checkWinner([2, 0], [2, 1], [2, 2]) ||
                checkWinner([0, 0], [1, 0], [2, 0]) ||
                checkWinner([0, 1], [1, 1], [2, 1]) ||
                checkWinner([0, 2], [1, 2], [2, 2]) ||
                checkWinner([0, 0], [1, 1], [2, 2]) ||
                checkWinner([2, 0], [1, 1], [0, 2])) {}
                else if(gameArr.flat().length == 9) draw()
            })
            row.append(col)
        }
        table.append(row)
    }
}

createPlayZone()

function checkWinner(x1, x2, x3){
    if(gameArr[x1[0]][x1[1]] == gameArr[x2[0]][x2[1]] &&
        gameArr[x1[0]][x1[1]] == gameArr[x3[0]][x3[1]] &&
        gameArr[x1[0]][x1[1]] != undefined) {
            win(gameArr[x1[0]][x1[1]])
            return true
    }
}

function draw(){
    drawSound()
    const backDiv = document.createElement('div')
    backDiv.className = 'backDiv'
    gameTable.append(backDiv)
    setTimeout(()=>{
        gameArr = []
        table.innerHTML = ""
        backDiv.remove()
        createPlayZone()
    },3000)
}

function win(mark){
    winSound()
    let forStyle
    if(mark == "X"){
        xWins++
        xH.innerText = `X: ${xWins}`
        xH.style.transform = 'scale(2)'
        forStyle = 'X'
    }else{
        oWins++
        oH.innerText = `O: ${oWins}`
        oH.style.transform = 'scale(2)'
        forStyle = 'O'
    }
    const backDiv = document.createElement('div')
    backDiv.className = 'backDiv'
    gameTable.append(backDiv)
    setTimeout(()=>{
        gameArr = []
        forStyle === 'X' ? xH.style.transform = 'scale(1)' : oH.style.transform = 'scale(1)'
        table.innerHTML = ""
        backDiv.remove()
        createPlayZone()
    },3000)
}

function soundClick() {
    let audio = new Audio(); 
    audio.src = "audio/clickSound.wav"
    audio.autoplay = true
}
function winSound() {
    let audio = new Audio()
    audio.src = "audio/winSound.mp3"
    audio.autoplay = true
}
function drawSound() {
    let audio = new Audio()
    audio.src = "audio/loseSound.wav"
    audio.autoplay = true
}